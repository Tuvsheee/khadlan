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
import {
  CalendarDays,
  ChevronRight,
  FileText,
  MapPin,
  Ruler,
  Search,
  User,
} from "lucide-react";
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

  const statusDotClass: Record<Status, string> = {
    confirmed: "bg-green-500",
    paid: "bg-blue-500",
    pending: "bg-amber-500",
    cancelled: "bg-red-500",
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

  const getSenderName = (request: RequestData) =>
    `${request.sender?.lastName || "-"} ${request.sender?.firstName || "-"}`;

  const getCreatedDate = (createdAt?: string) =>
    createdAt ? format(new Date(createdAt), "yyyy.MM.dd") : "-";

  const totalRequests = data?.pagination?.total ?? sortedRows.length;

  return (
    <div className="relative space-y-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:p-5">
      {/* {showRequestTabs && (
        <RequestStats status={status} variant={isUser ? "user" : "default"} />
      )} */}

      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Хүсэлтийн жагсаалт
          </h2>
          <p className="text-sm text-slate-500">
            {totalRequests} хүсэлт
            {status ? ` • ${STATUS_MAP[status].label}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Шинэчлэгдсэн жагсаалт
        </div>
      </div>

      {showRequestTabs && (
        <div className="flex flex-wrap items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 p-1">
          {tabOptions.map((tab) => {
            const isActive = status === tab.value;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleStatusChange(tab.value)}
                className={cn(
                  "h-9 rounded-md px-3 text-sm font-medium transition-colors md:px-4",
                  isActive
                    ? "bg-white text-slate-950 shadow-sm"
                    : "text-slate-600 hover:bg-white/70 hover:text-slate-900",
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50/70 p-3 md:flex-row md:items-center">
        <div className="relative flex-1 w-full md:max-w-lg">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="Нэр, регистрийн дугаараар хайх..."
            value={search}
            onChange={handleSearch}
            className="h-10 w-full rounded-md border-slate-200 bg-white pl-9 shadow-none"
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
      <div className="hidden overflow-hidden rounded-lg border border-slate-200 md:block">
        <Table className="min-w-[980px]">
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="w-[28%] font-semibold text-slate-600">
                Иргэн
              </TableHead>
              <TableHead className="w-[14%] font-semibold text-slate-600">
                Регистрийн дугаар
              </TableHead>
              <TableHead className="w-[12%] font-semibold text-slate-600">
                Хэмжээ
              </TableHead>
              <TableHead className="w-[22%] font-semibold text-slate-600">
                Байршил
              </TableHead>
              <TableHead className="w-[12%] font-semibold text-slate-600">
                Баг
              </TableHead>
              <TableHead className="w-[12%] font-semibold text-slate-600">
                Төлөв
              </TableHead>
              <TableHead className="w-[10%] text-right font-semibold text-slate-600">
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
                    className="group cursor-pointer bg-white hover:bg-slate-50"
                    onClick={() => setSelectedRequest(request._id)}
                  >
                    <TableCell className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                          {request.sender?.profileImageUrl ? (
                            <Image
                              src={request.sender.profileImageUrl}
                              alt="User avatar"
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <User className="h-4 w-4 text-slate-500" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <span className="block truncate font-semibold text-slate-900">
                            {getSenderName(request)}
                          </span>
                          <span className="block truncate text-xs text-slate-500">
                            ID: {request._id}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-slate-700">
                      {request.sender?.regNumber || "-"}
                    </TableCell>
                    <TableCell>
                      <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                        <Ruler className="h-3.5 w-3.5" />
                        {request?.landSize} га
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-slate-800">
                            {address.district}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-slate-500">
                            {address.subDistrict || "-"}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="truncate font-medium text-slate-700">
                        {address.bagKhoroo}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                          statusBadgeClass[request.status],
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            statusDotClass[request.status],
                          )}
                        />
                        {STATUS_MAP[request.status].label}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2 text-sm font-medium text-slate-600">
                        {getCreatedDate(request.createdAt)}
                        <ChevronRight className="h-4 w-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-500" />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      <div className="space-y-3 md:hidden">
        {isLoading ? (
          <div className="flex h-32 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span>Уншиж байна...</span>
          </div>
        ) : data?.data.length === 0 ? (
          <div className="flex h-44 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">
              {search ? "Хайлтын илэрц олдсонгүй" : "Хүсэлт олдсонгүй"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {search
                ? "Хайлтын үгээ өөрчлөөд дахин оролдоно уу."
                : "Одоогоор харуулах хүсэлт алга байна."}
            </p>
          </div>
        ) : (
          sortedRows.map((request) => {
            const address = resolveAddress(request);
            return (
              <button
                key={request._id}
                type="button"
                onClick={() => setSelectedRequest(request._id)}
                className="w-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition-colors hover:bg-slate-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                      {request.sender?.profileImageUrl ? (
                        <Image
                          src={request.sender.profileImageUrl}
                          alt="User avatar"
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User className="h-4 w-4 text-slate-500" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-slate-900">
                        {getSenderName(request)}
                      </p>
                      <p className="text-xs text-slate-500">
                        {request.sender?.regNumber || "-"}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-slate-400" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs font-medium text-slate-500">Хэмжээ</p>
                    <p className="mt-1 font-semibold text-emerald-700">
                      {request.landSize} га
                    </p>
                  </div>
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs font-medium text-slate-500">Огноо</p>
                    <p className="mt-1 flex items-center gap-1 font-semibold text-slate-700">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {getCreatedDate(request.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2 text-sm text-slate-700">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                  <p className="min-w-0">
                    <span className="block truncate font-medium">
                      {address.district}
                      {address.subDistrict ? `, ${address.subDistrict}` : ""}
                    </span>
                    <span className="block truncate text-xs text-slate-500">
                      {address.bagKhoroo}
                    </span>
                  </p>
                </div>

                <div className="mt-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                      statusBadgeClass[request.status],
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        statusDotClass[request.status],
                      )}
                    />
                    {STATUS_MAP[request.status].label}
                  </span>
                </div>
              </button>
            );
          })
        )}
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
