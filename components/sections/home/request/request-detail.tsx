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
  const displayStatus = detail?.status === "paid" ? "pending" : detail?.status;

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

  const googleMapUrl =
    detail?.googleMapUrl && detail.googleMapUrl.trim() !== ""
      ? detail.googleMapUrl
      : detail?.mapCoordinates?.latitude != null &&
          detail?.mapCoordinates?.longitude != null
        ? `https://www.google.com/maps?q=${detail.mapCoordinates.latitude},${detail.mapCoordinates.longitude}`
        : "";

  const isKmzLike = (file: string) => {
    try {
      const parsed = new URL(file, "http://localhost");
      const normalizedPath = parsed.pathname.toLowerCase();
      return /\.(kmz|kml|zip)$/i.test(normalizedPath);
    } catch {
      return /\.(kmz|kml|zip)(\?.*)?(#.*)?$/i.test(file.toLowerCase());
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">
        Хадлангийн хүсэлтийн дэлгэрэнгүй
      </DialogTitle>
      <DialogContent className="max-h-[92vh] max-w-[96vw] overflow-hidden p-0 md:max-w-[920px]">
        <div className="sticky top-0 z-10 border-b bg-white px-5 py-4 md:px-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <h2 className="text-xl font-semibold text-slate-900">
                Хадлангийн хүсэлтийн дэлгэрэнгүй
              </h2>
              {!isLoading && detail && (
                <Badge
                  variant="outline"
                  className={cn(
                    "px-3 py-1",
                    displayStatus === "confirmed" &&
                      "bg-green-500 text-white border-0",
                    displayStatus === "pending" &&
                      "bg-orange-500 text-white border-0",
                    displayStatus === "cancelled" &&
                      "bg-red-500 text-white border-0",
                  )}
                >
                  {displayStatus === "confirmed"
                    ? "Баталгаажсан"
                    : displayStatus === "pending"
                      ? "Хүлээгдэж буй"
                      : "Цуцлагдсан"}
                </Badge>
              )}
            </div>

            {!isLoading && detail && (
              <div className="flex flex-col gap-2 text-sm text-slate-500 md:flex-row md:items-center md:gap-4">
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

        <div className="max-h-[calc(92vh-96px)] overflow-y-auto bg-slate-50 p-4 md:p-6">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
          ) : detail ? (
            <div className="space-y-5">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-slate-200 bg-white shadow-sm">
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

                <Card className="border-slate-200 bg-white shadow-sm">
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
                <Card className="border-slate-200 bg-white shadow-sm">
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
                                                {isKmzLike(file)
                                                  ? "KMZ татах"
                                                  : "Татах"}
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
                                        {isKmzLike(file)
                                          ? `Газрын координат ${index + 1}`
                                          : `Хадлангийн газрын талбай ${index + 1}`}
                                      </p>
                                      <div className="flex items-center gap-1 mt-1">
                                        {googleMapUrl && isKmzLike(file) && (
                                          <a
                                            href={googleMapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-accent hover:text-accent-foreground"
                                          >
                                            <MapPin className="h-3 w-3" />
                                            Google Maps
                                          </a>
                                        )}
                                        <a
                                          href={getMedia(file) || file}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          download
                                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-accent hover:text-accent-foreground"
                                        >
                                          <Download className="h-3 w-3" />
                                          {isKmzLike(file)
                                            ? "KMZ татах"
                                            : "Татах"}
                                        </a>
                                      </div>
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
                    detail.grassInfo &&
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
