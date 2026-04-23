"use client";

import { Card } from "@/components/ui/card";
import {
  Clock,
  CheckCircle2,
  XCircle,
  CreditCard,
  FileText,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useQueryUtil } from "@/hooks/use-query";
import { useSearchParams } from "next/navigation";
import { Status } from "@/types/request";

interface StatItem {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

interface RequestStatsResponse {
  success: boolean;
  message: string;
  data: {
    pending: number;
    confirmed: number;
    declined?: number;
    cancelled?: number;
    paid: number;
  };
}

interface RequestStatsProps {
  status?: Status | null;
  variant?: "default" | "user";
}

export default function RequestStats({
  status: propStatus,
  variant = "default",
}: RequestStatsProps) {
  const params = useSearchParams();
  const urlStatus = params?.get("type") as Status | null;
  const status = propStatus !== undefined ? propStatus : urlStatus;
  const normalizedStatus = status === "cancelled" ? "declined" : status;

  const { data, isLoading } = useQueryUtil<RequestStatsResponse>({
    endpoint: "/request/statistic",
    queryKey: ["request-stats", normalizedStatus],
    params: normalizedStatus ? { type: normalizedStatus } : undefined,
  });

  const pendingCount = data?.data.pending || 0;
  const confirmedCount = data?.data.confirmed || 0;
  const cancelledCount = data?.data.cancelled ?? data?.data.declined ?? 0;
  const paidCount = data?.data.paid || 0;
  const totalCount = pendingCount + confirmedCount + cancelledCount + paidCount;

  const stats: StatItem[] =
    variant === "user"
      ? [
          {
            title: "Нийт хүсэлтүүд",
            value: totalCount,
            icon: FileText,
            color: "bg-sky-500",
            iconColor: "text-sky-600 bg-sky-50",
          },
          {
            title: "Баталгаажсан",
            value: confirmedCount,
            icon: CheckCircle2,
            color: "bg-emerald-500",
            iconColor: "text-emerald-600 bg-emerald-50",
          },
          {
            title: "Хүлээгдэж буй",
            value: pendingCount,
            icon: Clock,
            color: "bg-amber-500",
            iconColor: "text-amber-600 bg-amber-50",
          },
          {
            title: "Татгалзсан",
            value: cancelledCount,
            icon: XCircle,
            color: "bg-rose-500",
            iconColor: "text-rose-600 bg-rose-50",
          },
        ]
      : [
          {
            title: "Хүлээгдэж буй",
            value: pendingCount,
            icon: Clock,
            color: "bg-amber-500",
            iconColor: "text-amber-600 bg-amber-50",
          },
          {
            title: "Баталгаажсан",
            value: confirmedCount,
            icon: CheckCircle2,
            color: "bg-emerald-500",
            iconColor: "text-emerald-600 bg-emerald-50",
          },
          {
            title: "Цуцлагдсан",
            value: cancelledCount,
            icon: XCircle,
            color: "bg-rose-500",
            iconColor: "text-rose-600 bg-rose-50",
          },
          {
            title: "Төлбөр төлсөн",
            value: paidCount,
            icon: CreditCard,
            color: "bg-blue-500",
            iconColor: "text-blue-600 bg-blue-50",
          },
        ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className={cn("absolute left-0 top-0 h-full w-1", stat.color)} />
          <div className="relative pl-2">
            <div className="mb-4 flex items-center justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {stat.title}
              </p>
              <div className={cn("rounded-lg p-2", stat.iconColor)}>
                <stat.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="flex items-end gap-1">
              <h3 className="text-3xl font-bold text-slate-800">
                {isLoading ? "-" : stat.value.toLocaleString()}
              </h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
