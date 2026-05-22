"use client";

import { useQueryUtil } from "@/hooks/use-query";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/components/common/pagination";
import RequestDetail from "./request-detail";
import {
  RequestData,
  RequestPagination,
  STATUS_MAP,
  Status,
} from "@/types/request";
import { FileText, User, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Filter from "@/components/common/filter";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import RequestStats from "./request-stats";
import { AIMAGS, SUMS, BAG_KHOROOS } from "@/constants/data";

export default function RequestList() {
  const router = useRouter();
  const { user } = useAuth();
  const isCitizen = user?.role === "citizen";
  const isUser = user?.role === "user";
  const showRequestTabs = isCitizen || isUser;
  const params = useSearchParams();
  const type = params?.get("type");
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(type as Status);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "oldest">("latest");
  const debouncedSearch = useDebounce(search, 500);

  const handleStatusChange = (newStatus: Status | null) => {
    setStatus(newStatus);
    setCurrentPage(1);

    // Update URL params
    const url = new URL(window.location.href);
    if (newStatus) {
      url.searchParams.set("type", newStatus);
    } else {
      url.searchParams.delete("type");
    }
    router.push(url.pathname + url.search);
  };

  const { data, isLoading } = useQueryUtil<{
    data: RequestData[];
    pagination: RequestPagination;
  }>({
    queryKey: ["requests", currentPage, type, debouncedSearch, status],
    endpoint: `/request/list`,
    params: {
      page: currentPage.toString(),
      search: debouncedSearch,
      type: status,
    },
    staleTime: 0,
    refetchOnMount: "always",
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const tabOptions: { label: string; value: Status | null }[] = [
    { label: "Бүгд", value: null },
    { label: "Баталгаажсан", value: "confirmed" },
    { label: "Хүлээгдэж буй", value: "pending" },
    { label: "Цуцлагдсан", value: "cancelled" },
  ];

  const sortedRows = [...(data?.data || [])].sort((a, b) => {
    const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return sortBy === "latest" ? bTime - aTime : aTime - bTime;
  });

  const statusBadgeClass: Record<Status, string> = {
    confirmed: "bg-green-100 text-green-700 border border-green-200",
    paid: "bg-blue-100 text-blue-700 border border-blue-200",
    pending: "bg-amber-100 text-amber-700 border border-amber-200",
    cancelled: "bg-red-100 text-red-700 border border-red-200",
  };

  const bagKhorooMap = useMemo(
    () => new Map(BAG_KHOROOS.map((item) => [item._id, item])),
    [],
  );

  const sumMap = useMemo(
    () => new Map(SUMS.map((item) => [item._id, item])),
    [],
  );

  const aimagMap = useMemo(
    () => new Map(AIMAGS.map((item) => [item._id, item])),
    [],
  );

  const resolveAddress = (request: RequestData) => {
    const bagKhorooEntry = request.bagKhorooId
      ? bagKhorooMap.get(request.bagKhorooId)
      : undefined;
    const sumEntry = bagKhorooEntry?.parentId
      ? sumMap.get(bagKhorooEntry.parentId)
      : undefined;
    const aimagEntry = sumEntry?.parentId
      ? aimagMap.get(sumEntry.parentId)
      : undefined;

    return {
      district: request.district || aimagEntry?.name || "Мэдээлэлгүй",
      subDistrict: request.subDistrict || sumEntry?.name || "",
      bagKhoroo: request.bagKhoroo || bagKhorooEntry?.name || "Мэдээлэлгүй",
    };
  };

  return (
    <div className="relative space-y-4 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md p-4 md:p-5 shadow-sm">
      {/* {showRequestTabs && (
        <RequestStats status={status} variant={isUser ? "user" : "default"} />
      )} */}

      {showRequestTabs && (
        <div className="flex flex-wrap items-center gap-2">
          {tabOptions.map((tab) => {
            const isActive = status === tab.value;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleStatusChange(tab.value)}
                className={cn(
                  "h-9 px-4 rounded-full text-sm font-medium border transition-colors",
                  isActive
                    ? "bg-[#0b3d6d] border-[#0b3d6d] text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <div className="relative flex-1 w-full md:max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Нэр, регистрийн дугаараар хайх..."
            value={search}
            onChange={handleSearch}
            className="pl-9 w-full h-10 rounded-full bg-slate-50 border-slate-200"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          {!showRequestTabs && (
            <Filter<Status>
              value={status}
              onChange={(value) => handleStatusChange(value as Status | null)}
              options={[
                { label: "Баталгаажсан", value: "confirmed" },
                { label: "Хүлээгдэж буй", value: "pending" },
                { label: "Цуцлагдсан", value: "cancelled" },
                { label: "Төлбөр төлсөн", value: "paid" },
              ]}
              label="Төлөв"
              triggerLabel={
                tabOptions.find((tab) => tab.value === status)?.label || "Бүгд"
              }
            />
          )}

          <Filter<"latest" | "oldest">
            value={sortBy}
            onChange={(value) =>
              setSortBy((value || "latest") as "latest" | "oldest")
            }
            options={[
              { label: "Хамгийн сүүлийнх", value: "latest" },
              { label: "Хамгийн эхнийх", value: "oldest" },
            ]}
            label="Эрэмбэлэх"
            triggerLabel={
              sortBy === "latest" ? "Хамгийн сүүлийнх" : "Хамгийн эхнийх"
            }
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-xl text-nowrap border border-slate-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50/70 hover:bg-slate-50/70">
              <TableHead className="font-semibold text-slate-700">
                Овог нэр
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Регистрийн дугаар
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Газрын хэмжээ
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Аймаг сум
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Баг
              </TableHead>
              <TableHead className="font-semibold text-slate-700">
                Төлөв
              </TableHead>
              <TableHead className="text-right font-semibold text-slate-700">
                Огноо
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <span>Уншиж байна...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : data?.data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-32">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">
                      {search ? "Хайлтын илэрц олдсонгүй" : "Хүсэлт олдсонгүй"}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-[300px] mt-2">
                      {search
                        ? "Хайлтын үр дүнд тохирох хүсэлт олдсонгүй"
                        : "Та хадлан талбай ашиглах хүсэлт илгээгээгүй байна"}
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              sortedRows.map((request) => {
                const address = resolveAddress(request);
                return (
                  <TableRow
                    key={request._id}
                    className="cursor-pointer hover:bg-slate-50/60"
                    onClick={() => setSelectedRequest(request._id)}
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center">
                          {request.sender?.profileImageUrl ? (
                            <Image
                              src={request.sender.profileImageUrl}
                              alt="User avatar"
                              width={36}
                              height={36}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <User className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-800">
                            {(request.sender?.lastName || "-") +
                              " " +
                              (request.sender?.firstName || "-")}
                          </span>
                          <span className="text-xs text-slate-400">
                            Илгээгчийн мэдээлэл
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-slate-700">
                        {request.sender?.regNumber || "Регистр оруулаагүй"}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-emerald-700">
                        {request?.landSize} га
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-slate-700">
                        {address.district}
                        <p className="text-xs text-slate-400 mt-0.5">
                          {address.subDistrict}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-slate-700">
                        {address.bagKhoroo}
                      </div>
                    </TableCell>
                    <TableCell>
                      <p
                        className={cn(
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                          statusBadgeClass[request.status],
                        )}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {STATUS_MAP[request.status].label}
                      </p>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="text-sm text-slate-600">
                        {request.createdAt &&
                          format(new Date(request.createdAt), "yyyy.MM.dd")}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}

      {data?.pagination && data.pagination.totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.pagination.totalPages}
          total={data.pagination.total}
          onPageChange={setCurrentPage}
        />
      )}

      {selectedRequest && (
        <RequestDetail
          isOpen={!!selectedRequest}
          onClose={() => setSelectedRequest(null)}
          requestId={selectedRequest}
        />
      )}
    </div>
  );
}
