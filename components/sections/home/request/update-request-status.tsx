import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload, Download, X, File, FileText, MapPin } from "lucide-react";
import { useState } from "react";
import { useMutationUtil } from "@/hooks/use-mutation";
import { RequestDetailData, STATUS_MAP } from "@/types/request";
import Image from "next/image";
import Link from "next/link";
import { RoleGate } from "@/components/common/auth/role-gate";
import { Separator } from "@/components/ui/separator";
import { cn, getMedia } from "@/lib/utils";

const UpdateRequestStatus = ({
  detail,
  onClose,
}: {
  detail: RequestDetailData;
  onClose: () => void;
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const selectedFileLabel =
    selectedStatus === "confirmed"
      ? "KMZ/KML файл"
      : selectedStatus === "paid"
        ? "Төлбөр төлсөн баримт"
        : "Хавсаргах файл";

  const selectedFileAccept =
    selectedStatus === "confirmed"
      ? ".kmz,.kml,.zip"
      : selectedStatus === "paid"
        ? ".pdf,.png,.jpg,.jpeg"
        : "*/*";

  const selectedFileMultiple = selectedStatus === "paid";

  const googleMapUrl =
    detail.googleMapUrl ||
    (detail.mapCoordinates
      ? `https://www.google.com/maps?q=${detail.mapCoordinates.latitude},${detail.mapCoordinates.longitude}`
      : "");

  // Normalize filePath to array
  const filePathArray = detail.filePath
    ? Array.isArray(detail.filePath)
      ? detail.filePath
      : [detail.filePath]
    : [];

  const { mutate: updateRequest, isPending: isUpdating } = useMutationUtil({
    endpoint: `/request/${detail.requestId}/changeStatus`,
    method: "post",
    queryKey: ["request", detail.requestId],
    successMessage: "Хүсэлт амжилттай шинэчлэгдлөө",
    onSuccessCallback: () => {
      onClose();
    },
    contentType: "multipart/form-data",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setSelectedFiles(files);
      const imageUrls = files
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file));
      setPreviewUrls(imageUrls);
    }
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls([]);
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);

    const newImageUrls = newFiles
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => URL.createObjectURL(file));

    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls(newImageUrls);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    clearFiles();
  };

  const handleSubmit = () => {
    if (!selectedStatus) return;

    const formData = new FormData();

    if (
      (selectedStatus === "paid" || selectedStatus === "confirmed") &&
      selectedFiles.length === 0
    ) {
      return;
    }

    if (selectedFiles.length > 0) {
      if (selectedStatus === "paid") {
        selectedFiles.forEach((file) => {
          formData.append("contractFiles", file);
        });
      } else {
        selectedFiles.forEach((file) => {
          formData.append("files", file);
        });
      }
    }

    formData.append("status", selectedStatus);
    updateRequest(formData);
  };

  // Only show paid status option when current status is confirmed
  const showPaidOption = detail.status === "confirmed";
  // Only show confirmed status option when current status is pending
  const showConfirmedOption = detail.status === "pending";

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2 text-primary">
              <Upload className="h-4 w-4" />
              {detail.status === "confirmed"
                ? "Хүсэлтийн төлөв"
                : "Хүсэлтийн төлөв шинэчлэх"}
            </h3>
            <div className="space-x-2 flex justify-center items-center  gap-2">
              Одоогийн төлөв:
              <Badge
                variant={
                  detail.status === "confirmed"
                    ? "default"
                    : detail.status === "paid"
                      ? "secondary"
                      : detail.status === "pending"
                        ? "outline"
                        : "destructive"
                }
                className={cn("px-3", STATUS_MAP[detail.status].color)}
              >
                {STATUS_MAP[detail.status].label}
              </Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            {/* Current File Section */}
            {filePathArray.length > 0 && selectedFiles.length === 0 && (
              <div className="rounded-lg border p-4 space-y-3">
                <h4 className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Одоогийн файлууд ({filePathArray.length})
                </h4>
                <div className="space-y-2">
                  {filePathArray.map((file, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <File className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {detail.status === "pending"
                            ? `Хадлан талбай ${index + 1}`
                            : detail.status === "paid"
                              ? `Төлбөр төлсөн баримт ${index + 1}`
                              : /\.(kmz|kml|zip)$/i.test(file)
                                ? `Газрын координат ${index + 1}`
                                : `Хүсэлтийн файл ${index + 1}`}
                        </p>
                        {googleMapUrl && /\.(kmz|kml|zip)$/i.test(file) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 px-2 mt-1 mr-2"
                          >
                            <a
                              href={googleMapUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              <MapPin className="h-3 w-3" />
                              <span className="text-xs">Google Maps</span>
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-8 px-2 mt-1"
                        >
                          {(() => {
                            const fileUrl = getMedia(file) || file;
                            return (
                              <Link
                                href={fileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <Download className="h-3 w-3" />
                                <span className="text-xs">Татах</span>
                              </Link>
                            );
                          })()}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detail.contractSignature ? (
              <div className="rounded-lg border p-4 space-y-3">
                <h4 className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Гэрээний гарын үсэг
                </h4>
                <div className="rounded-md border bg-white p-3">
                  <Image
                    src={detail.contractSignature}
                    alt="Гэрээний гарын үсэг"
                    width={520}
                    height={180}
                    unoptimized
                    className="h-auto w-full max-w-[520px] rounded-sm object-contain"
                  />
                </div>
              </div>
            ) : null}

            {detail.status !== "paid" && (
              <>
                {/* Status Selection */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Шинэ төлөв</h4>
                  <Select
                    value={selectedStatus}
                    onValueChange={handleStatusChange}
                    disabled={isUpdating}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Шинэ төлөв сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <RoleGate allowedRoles={["user"]}>
                        {showPaidOption && (
                          <SelectItem value="paid">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary" className="text-white">
                                Төлбөр төлөгдсөн
                              </Badge>
                            </div>
                          </SelectItem>
                        )}
                      </RoleGate>

                      {showConfirmedOption && (
                        <SelectItem value="confirmed">
                          <div className="flex items-center gap-2">
                            <Badge variant="default">
                              Хүсэлт баталгаажуулах
                            </Badge>
                          </div>
                        </SelectItem>
                      )}

                      <SelectItem value="cancelled">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Хүсэлт цуцлах</Badge>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* File Upload Section */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    {selectedFileLabel}
                  </h4>

                  {selectedFiles.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          {selectedFiles.length} файл сонгогдсон
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearFiles}
                          className="h-8 px-2"
                        >
                          <X className="h-3 w-3 mr-1" />
                          Бүгдийг арилгах
                        </Button>
                      </div>
                      <div className="grid gap-3">
                        {selectedFiles.map((file, index) => {
                          const isImage = file.type.startsWith("image/");
                          const previewUrl = isImage
                            ? previewUrls.find(
                                (_, i) =>
                                  selectedFiles
                                    .slice(0, index + 1)
                                    .filter((f) => f.type.startsWith("image/"))
                                    .length ===
                                  i + 1,
                              )
                            : null;

                          return (
                            <div
                              key={index}
                              className="relative rounded-lg border p-4"
                            >
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background"
                                onClick={() => removeFile(index)}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                              {previewUrl ? (
                                <div className="relative h-[200px]">
                                  <Image
                                    src={previewUrl}
                                    alt={`File preview ${index + 1}`}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="flex items-center gap-3">
                                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <File className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">
                                      {file.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="grid gap-3">
                    <Input
                      type="file"
                      multiple={selectedFileMultiple}
                      accept={selectedFileAccept}
                      onChange={handleFileChange}
                      className="cursor-pointer"
                      disabled={isUpdating}
                    />
                    <p className="text-sm text-muted-foreground">
                      {selectedStatus === "confirmed"
                        ? "KMZ/KML/ZIP файл заавал хавсаргана уу"
                        : selectedStatus === "paid"
                          ? "Төлбөр төлсөн баримт хавсаргана уу (олон файл боломжтой)"
                          : "Файл сонгох"}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={
                    ((selectedStatus === "paid" ||
                      selectedStatus === "confirmed") &&
                      selectedFiles.length === 0) ||
                    !selectedStatus ||
                    isUpdating
                  }
                  className="w-full"
                  size="lg"
                >
                  {isUpdating ? "Илгээж байна..." : "Төлөв шинэчлэх"}
                </Button>

                {googleMapUrl && (
                  <div className="rounded-lg border border-dashed p-4 bg-blue-50/60">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-900">
                          Газрын байршил бэлэн байна
                        </h4>
                        <p className="text-sm text-blue-800">
                          KMZ файлаас координат уншигдсан тул Google Maps дээр
                          шууд нээж болно.
                        </p>
                      </div>
                      <Button asChild>
                        <a
                          href={googleMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Maps дээр нээх
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdateRequestStatus;
