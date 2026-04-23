"use client";

import { useQueryUtil } from "@/hooks/use-query";
import { useState } from "react";
import Pagination from "@/components/common/pagination";
import RequestDetail from "./request-detail";
import {
  RequestData,
  RequestPagination,
  STATUS_MAP,
  Status,
} from "@/types/request";
import {
  FileText,
  User,
  MapPin,
  Calendar,
  Search,
  ListFilter,
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

export default function RequestList() {
  const params = useSearchParams();
  const type = params.get("type");
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [status, setStatus] = useState<Status | null>(type as Status);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

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
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const statusOptions = [
    {
      label: "Баталгаажсан",
      value: "confirmed" as Status,
      color: "text-green-500 font-medium",
    },
    {
      label: "Төлбөр төлөгдсөн",
      value: "paid" as Status,
      color: "text-blue-500 font-medium",
    },
    {
      label: "Хүлээгдэж буй",
      value: "pending" as Status,
      color: "text-orange-500 font-medium",
    },
    {
      label: "Цуцлагдсан",
      value: "cancelled" as Status,
      color: "text-destructive font-medium",
    },
  ];

  return (
    <div className="relative space-y-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row md:items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Нэр, регистрийн дугаараар хайх..."
            value={search}
            onChange={handleSearch}
            className="pl-9 w-full"
          />
        </div>
        <Filter<Status>
          value={status}
          onChange={setStatus}
          options={statusOptions}
        />
      </div>

      {/* Table Section */}
      <div className="rounded-lg text-nowrap border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-muted/50">
              <TableHead className="font-semibold">Овог, нэр</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  РД
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Газрын хэмжээ
                </div>
              </TableHead>
              <TableHead className="font-semibold">Аймаг/Хот</TableHead>
              <TableHead className="font-semibold">Сум/Дүүрэг</TableHead>
              <TableHead className="font-semibold">Баг/Хороо</TableHead>
              <TableHead className="font-semibold">Төлөв</TableHead>
              <TableHead className="text-right font-semibold">
                <div className="flex items-center justify-end gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  Үүсгэсэн огноо
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <span>Уншиж байна...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : data?.data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-32">
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
              data?.data.map((request) => (
                <TableRow
                  key={request._id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedRequest(request._id)}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {request.sender?.lastName || "Овог оруулаагүй"}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {request.sender?.firstName || "Нэр оруулаагүй"}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      {request.sender?.regNumber || "Регистр оруулаагүй"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{request?.landSize} га</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      {request.district || "Мэдээлэлгүй"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      {request.subDistrict || "Мэдээлэлгүй"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      {request.bagKhoroo || "Мэдээлэлгүй"}
                    </div>
                  </TableCell>
                  <TableCell>
                    <p
                      className={cn(
                        "inline-block px-2 py-1 rounded-2xl text-sm font-medium",
                        STATUS_MAP[request.status].color,
                      )}
                    >
                      {STATUS_MAP[request.status].label}
                    </p>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {request.createdAt &&
                        format(new Date(request.createdAt), "yyyy.MM.dd")}
                    </div>
                  </TableCell>
                </TableRow>
              ))
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
