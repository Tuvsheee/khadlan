"use client";

import { useQueryUtil } from "@/hooks/use-query";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Building2,
  MapPinned,
  Home,
  MapPin,
  FileText,
  Mail,
  User,
  Download,
  File,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn, getMedia } from "@/lib/utils";
import Link from "next/link";
import { RoleGate } from "@/components/common/auth/role-gate";
import UpdateRequestStatus from "./update-request-status";
import { RequestDetailData } from "@/types/request";
import GrassInfoForm from "./add-grass-info";

interface RequestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestId: string;
}

export default function RequestDetailModal({
  isOpen,
  onClose,
  requestId,
}: RequestDetailModalProps) {
  const { data, isLoading } = useQueryUtil<{
    data: RequestDetailData;
  }>({
    queryKey: ["request", requestId],
    endpoint: `/request/${requestId}`,
  });

  const detail = data?.data;

  const filePathArray = detail?.filePath
    ? Array.isArray(detail.filePath)
      ? detail.filePath
      : [detail.filePath]
    : [];

  const contractFilesArray = detail?.contractFiles
    ? Array.isArray(detail.contractFiles)
      ? detail.contractFiles
      : [detail.contractFiles]
    : [];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">
        Хадлангийн хүсэлтийн дэлгэрэнгүй
      </DialogTitle>
      <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-y-auto md:max-w-[800px] p-2 md:p-3">
        <div className="px-6 py-4 border-b bg-muted/40">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <h2 className="text-xl font-semibold">
                Хадлангийн хүсэлтийн дэлгэрэнгүй
              </h2>
              {!isLoading && detail && (
                <Badge
                  variant="outline"
                  className={cn(
                    "px-3 py-1",
                    detail.status === "confirmed" &&
                      "bg-green-500 text-white border-0",
                    detail.status === "paid" &&
                      "bg-blue-500 text-white border-0",
                    detail.status === "pending" &&
                      "bg-orange-500 text-white border-0",
                    detail.status === "cancelled" &&
                      "bg-red-500 text-white border-0",
                  )}
                >
                  {detail.status === "confirmed"
                    ? "Баталгаажсан"
                    : detail.status === "paid"
                      ? "Төлбөр төлөгдсөн"
                      : detail.status === "pending"
                        ? "Хүлээгдэж буй"
                        : "Цуцлагдсан"}
                </Badge>
              )}
            </div>

            {!isLoading && detail && (
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>
                    {detail.sender.firstName || detail.sender.lastName
                      ? `${detail.sender.firstName || ""} ${
                          detail.sender.lastName || ""
                        }`.trim()
                      : "Нэр оруулаагүй"}
                  </span>
                </div>
                <div>•</div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{detail.sender.email}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
          ) : detail ? (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2 text-primary">
                        <MapPin className="h-4 w-4" />
                        Байршлын мэдээлэл
                      </h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Building2 className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-medium">Аймаг/Хот</p>
                            <p className="text-muted-foreground">
                              {detail.district}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPinned className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-medium">Сум/Дүүрэг</p>
                            <p className="text-muted-foreground">
                              {detail.subDistrict}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPinned className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-medium">Баг/Хороо</p>
                            <p className="text-muted-foreground">
                              {detail.bagKhoroo}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Home className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-medium">
                              Дэлгэрэнгүй хаяг
                            </p>
                            <p className="text-muted-foreground">
                              {detail.street}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2 text-primary">
                        <MapPin className="h-4 w-4" />
                        Газрын мэдээлэл
                      </h3>
                      <Separator />
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-medium">Газрын нэр</p>
                            <p className="text-muted-foreground">
                              {detail.landName}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                          <div>
                            <p className="text-sm font-medium">Газрын хэмжээ</p>
                            <p className="text-muted-foreground">
                              {detail.landSize} га
                            </p>
                          </div>
                        </div>
                        {detail.userType && (
                          <div className="flex items-start gap-3">
                            <User className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                            <div>
                              <p className="text-sm font-medium">
                                Хэрэглэгчийн төрөл
                              </p>
                              <p className="text-muted-foreground capitalize">
                                {detail.userType}
                              </p>
                            </div>
                          </div>
                        )}
                        {detail.grassInfo && detail.grassInfo.boodol > 0 && (
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                            <div>
                              <p className="text-sm font-medium">Боодлын тоо</p>
                              <p className="text-muted-foreground">
                                {detail.grassInfo.boodol} ширхэг
                              </p>
                            </div>
                          </div>
                        )}
                        {detail.grassInfo && detail.grassInfo.buhal > 0 && (
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                            <div>
                              <p className="text-sm font-medium">Бухлын тоо</p>
                              <p className="text-muted-foreground">
                                {detail.grassInfo.buhal} ширхэг
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {(filePathArray.length > 0 || contractFilesArray.length > 0) && (
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold flex items-center gap-2 text-primary">
                        <FileText className="h-4 w-4" />
                        Хавсралт файлууд
                      </h3>
                      <Separator />
                      <div className="space-y-4">
                        {contractFilesArray.length > 0 && (
                          <div className="space-y-3">
                            <div className="grid gap-3 md:grid-cols-2">
                              {contractFilesArray.map((file, index) => (
                                <div
                                  key={index}
                                  className="rounded-lg border p-4"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                      <File className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium truncate">
                                        Гэрээний файл {index + 1}
                                      </p>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        asChild
                                        className="h-8 px-2 mt-1"
                                      >
                                        {(() => {
                                          const fileUrl =
                                            getMedia(file) || file;
                                          return (
                                            <Link
                                              href={fileUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-1"
                                            >
                                              <Download className="h-3 w-3" />
                                              <span className="text-xs">
                                                Татах
                                              </span>
                                            </Link>
                                          );
                                        })()}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {filePathArray.length > 0 && (
                          <div className="space-y-3">
                            <div className="grid gap-3 md:grid-cols-2">
                              {filePathArray.map((file, index) => (
                                <div
                                  key={index}
                                  className="rounded-lg border p-4"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                      <File className="h-5 w-5 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium truncate">
                                        Хадлангийн газрын талбай {index + 1}
                                      </p>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        asChild
                                        className="h-8 px-2 mt-1"
                                      >
                                        {(() => {
                                          const fileUrl =
                                            getMedia(file) || file;
                                          return (
                                            <Link
                                              href={fileUrl}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="flex items-center gap-1"
                                            >
                                              <Download className="h-3 w-3" />
                                              <span className="text-xs">
                                                Татах
                                              </span>
                                            </Link>
                                          );
                                        })()}
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <RoleGate allowedRoles={"user"}>
                <UpdateRequestStatus detail={detail} onClose={onClose} />
              </RoleGate>
              <RoleGate allowedRoles={["citizen"]}>
                <div>
                  {detail.status === "paid" &&
                    detail.grassInfo.boodol === 0 &&
                    detail.grassInfo.buhal === 0 && (
                      <GrassInfoForm id={detail.requestId} />
                    )}
                </div>
              </RoleGate>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
