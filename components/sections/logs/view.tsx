"use client";
import { useQueryUtil } from "@/hooks/use-query";
import { useState } from "react";
import Pagination from "@/components/common/pagination";
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  AlertCircle,
  FileEdit,
  Search,
  Trash2,
  User,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

interface Log {
  _id: string;
  user: {
    username: string;
    isActive: boolean;
    role: string;
  };
  action: "DELETE" | "UPDATE" | "CREATE";
  entityType: string;
  entityId: string;
  message: string;
  timestamp: string;
}

interface LogResponse {
  logs: Log[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

const ACTION_COLORS = {
  DELETE: "bg-gradient-to-r from-red-500 to-red-600",
  UPDATE: "bg-gradient-to-r from-blue-500 to-blue-600",
  CREATE: "bg-gradient-to-r from-green-500 to-green-600",
} as const;

const ACTION_ICONS = {
  DELETE: Trash2,
  UPDATE: FileEdit,
  CREATE: UserCheck,
} as const;

const ACTION_LABELS: Record<Log["action"], string> = {
  DELETE: "Устгасан",
  UPDATE: "Шинэчлэсэн",
  CREATE: "Үүсгэсэн",
} as const;

export default function LogsView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useQueryUtil<LogResponse>({
    queryKey: ["logs", currentPage, debouncedSearch],
    endpoint: "/logs/list",
    params: {
      page: currentPage.toString(),
      search: debouncedSearch,
    },
  });

  return (
    <main className="space-y-8 w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight">Аудит бүртгэл</h1>
          <p className="text-base text-muted-foreground">
            Системд хийгдсэн үйлдлүүдийн түүх
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Хайх..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Logs Grid */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 animate-in fade-in-50 duration-500">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
            >
              {/* ... loading skeleton ... */}
            </Card>
          ))
        ) : data?.logs && data.logs.length > 0 ? (
          data.logs.map((log) => {
            const ActionIcon = ACTION_ICONS[log.action];
            return (
              <Card
                key={log._id}
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      className={cn(
                        "gap-1.5 shadow-sm",
                        ACTION_COLORS[log.action]
                      )}
                    >
                      <ActionIcon className="h-3.5 w-3.5" />
                      {ACTION_LABELS[log.action]}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(log.timestamp), "yyyy.MM.dd HH:mm")}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pb-3 border-b">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{log.user.username}</span>
                      <span className="text-sm text-muted-foreground capitalize">
                        {log.user.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      {log.message}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <Card className="p-8 col-span-full">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Бүртгэл олдсонгүй</h3>
              <p className="text-sm text-muted-foreground max-w-[300px] mt-2">
                {search
                  ? "Хайлтын илэрц олдсонгүй"
                  : "Системд хийгдсэн үйлдлийн бүртгэл олдсонгүй"}
              </p>
            </div>
          </Card>
        )}
      </div>

      {data?.pagination && data.pagination.totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.pagination.totalPages}
          total={data.pagination.total}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
