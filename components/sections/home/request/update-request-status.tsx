import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutationUtil } from "@/hooks/use-mutation";
import { cn } from "@/lib/utils";
import { RequestDetailData, STATUS_MAP } from "@/types/request";
import {
  Check,
  File,
  FileText,
  Loader2,
  MapPin,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RoleGate } from "@/components/common/auth/role-gate";

const APPROVAL_CHECK_ITEMS = [
  { key: "deputy_governor", label: "Засаг даргын орлогч" },
  { key: "bag_governor_1", label: "1-р багийн дарга" },
  { key: "bag_governor_2", label: "2-р багийн дарга" },
  { key: "bag_governor_3", label: "3-р багийн дарга" },
  { key: "tax_inspector", label: "Татварын байцаагч" },
  { key: "haatkh_specialist", label: "ХААТХ мэргэжилтэн" },
  { key: "land_manager", label: "Газрын даамал" },
] as const;

const getInitialApprovalChecks = (
  approvalChecks?: Record<string, boolean>,
) =>
  APPROVAL_CHECK_ITEMS.reduce<Record<string, boolean>>((acc, item) => {
    acc[item.key] = approvalChecks?.[item.key] === true;
    return acc;
  }, {});

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
  const [approvalChecks, setApprovalChecks] = useState<Record<string, boolean>>(
    () => getInitialApprovalChecks(detail.approvalChecks),
  );

  const allApprovalChecksChecked = APPROVAL_CHECK_ITEMS.every(
    (item) => approvalChecks[item.key],
  );
  const checkedCount = APPROVAL_CHECK_ITEMS.filter(
    (item) => approvalChecks[item.key],
  ).length;

  useEffect(() => {
    setApprovalChecks(getInitialApprovalChecks(detail.approvalChecks));
  }, [detail.approvalChecks]);

  const googleMapUrl =
    detail.googleMapUrl ||
    (detail.mapCoordinates
      ? `https://www.google.com/maps?q=${detail.mapCoordinates.latitude},${detail.mapCoordinates.longitude}`
      : "");

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

  const { mutate: updateRequest, isPending: isUpdating } = useMutationUtil({
    endpoint: `/request/${detail.requestId}/changeStatus`,
    method: "post",
    queryKey: ["request", detail.requestId],
    successMessage: "Хүсэлт амжилттай шинэчлэгдлээ",
    onSuccessCallback: () => {
      onClose();
    },
    contentType: "multipart/form-data",
  });

  const { mutate: saveApprovalChecks, isPending: isSavingApprovalChecks } =
    useMutationUtil<
      { data: { approvalChecks: Record<string, boolean> } },
      { approvalChecks: Record<string, boolean> }
    >({
      endpoint: `/request/${detail.requestId}/approvalChecks`,
      method: "patch",
      queryKey: ["request", detail.requestId],
      successMessage: null,
    });

  const clearFiles = () => {
    setSelectedFiles([]);
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls([]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setSelectedFiles(files);
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls(
      files
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file)),
    );
  };

  const removeFile = (index: number) => {
    const nextFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(nextFiles);

    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls(
      nextFiles
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file)),
    );
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
    clearFiles();
  };

  const handleApprovalCheckChange = (key: string, checked: boolean) => {
    if (detail.status !== "pending" || isSavingApprovalChecks) return;

    const previousChecks = approvalChecks;
    const nextChecks = {
      ...approvalChecks,
      [key]: checked,
    };

    setApprovalChecks(nextChecks);
    saveApprovalChecks(
      { approvalChecks: nextChecks },
      {
        onError: () => {
          setApprovalChecks(previousChecks);
        },
      },
    );
  };

  const handleSubmit = () => {
    if (!selectedStatus) return;
    if (selectedStatus === "confirmed" && !allApprovalChecksChecked) return;
    if (
      (selectedStatus === "paid" || selectedStatus === "confirmed") &&
      selectedFiles.length === 0
    ) {
      return;
    }

    const formData = new FormData();

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        formData.append(selectedStatus === "paid" ? "contractFiles" : "files", file);
      });
    }

    formData.append("status", selectedStatus);
    if (selectedStatus === "confirmed") {
      formData.append("approvalChecks", JSON.stringify(approvalChecks));
    }

    updateRequest(formData);
  };

  const showPaidOption = detail.status === "confirmed";
  const showConfirmedOption = detail.status === "pending";
  const requiresFile =
    selectedStatus === "paid" || selectedStatus === "confirmed";
  const submitDisabled =
    !selectedStatus ||
    isUpdating ||
    isSavingApprovalChecks ||
    (requiresFile && selectedFiles.length === 0) ||
    (selectedStatus === "confirmed" && !allApprovalChecksChecked);

  return (
    <Card className="overflow-hidden border-slate-200 shadow-sm">
      <CardContent className="p-0">
        <div className="border-b bg-slate-50 px-5 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                <Upload className="h-4 w-4 text-primary" />
                {detail.status === "confirmed"
                  ? "Хүсэлтийн төлөв"
                  : "Хүсэлтийн төлөв шинэчлэх"}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Хяналтын тэмдэглэгээ шууд хадгалагдана. Бүгд шалгагдсаны дараа баталгаажуулна.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              Одоогийн төлөв
              <Badge className={cn("px-3", STATUS_MAP[detail.status].color)}>
                {STATUS_MAP[detail.status].label}
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-5 p-5">
          {detail.status !== "paid" && (
            <>
              <div className="rounded-lg border border-slate-200 bg-white">
                <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-slate-900">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      Хяналтын самбар
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {checkedCount}/{APPROVAL_CHECK_ITEMS.length} шалгалт хийгдсэн
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    {isSavingApprovalChecks ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Хадгалж байна
                      </>
                    ) : (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        Автоматаар хадгална
                      </>
                    )}
                  </div>
                </div>

                <div className="grid gap-2 p-3 md:grid-cols-2">
                  {APPROVAL_CHECK_ITEMS.map((item) => {
                    const checked = approvalChecks[item.key];

                    return (
                      <button
                        key={item.key}
                        type="button"
                        disabled={detail.status !== "pending" || isSavingApprovalChecks}
                        onClick={() =>
                          handleApprovalCheckChange(item.key, !checked)
                        }
                        className={cn(
                          "flex min-h-12 items-center justify-between gap-3 rounded-md border px-3 py-2 text-left transition-colors",
                          checked
                            ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                            : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
                          (detail.status !== "pending" ||
                            isSavingApprovalChecks) &&
                            "cursor-not-allowed opacity-70",
                        )}
                      >
                        <span className="min-w-0 text-sm font-medium">
                          {item.label}
                        </span>
                        <span
                          className={cn(
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                            checked
                              ? "border-emerald-600 bg-emerald-600 text-white"
                              : "border-slate-300 bg-white text-transparent",
                          )}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    );
                  })}
                </div>

                {!allApprovalChecksChecked && detail.status === "pending" && (
                  <div className="border-t border-slate-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                    Бүх хүн “Шалгасан” гэж тэмдэглэсний дараа хүсэлтийг баталгаажуулах боломжтой.
                  </div>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-800">
                    Шинэ төлөв
                  </h4>
                  <Select
                    value={selectedStatus}
                    onValueChange={handleStatusChange}
                    disabled={isUpdating || isSavingApprovalChecks}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Шинэ төлөв сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <RoleGate allowedRoles={["user"]}>
                        {showPaidOption && (
                          <SelectItem value="paid">
                            Төлбөр төлөгдсөн
                          </SelectItem>
                        )}
                      </RoleGate>

                      {showConfirmedOption && (
                        <SelectItem
                          value="confirmed"
                          disabled={!allApprovalChecksChecked}
                        >
                          Хүсэлт баталгаажуулах
                        </SelectItem>
                      )}

                      <SelectItem value="cancelled">Хүсэлт цуцлах</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <FileText className="h-4 w-4 text-primary" />
                    {selectedFileLabel}
                  </h4>
                  <Input
                    type="file"
                    multiple={selectedFileMultiple}
                    accept={selectedFileAccept}
                    onChange={handleFileChange}
                    className="h-11 cursor-pointer bg-white"
                    disabled={isUpdating || isSavingApprovalChecks}
                  />
                </div>
              </div>

              {selectedFiles.length > 0 && (
                <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-700">
                      {selectedFiles.length} файл сонгогдсон
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFiles}
                      className="h-8 px-2"
                    >
                      <X className="mr-1 h-3 w-3" />
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
                          key={`${file.name}-${index}`}
                          className="relative rounded-md border border-slate-200 bg-white p-3"
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 z-10 h-8 w-8 bg-white/80"
                            onClick={() => removeFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>

                          {previewUrl ? (
                            <div className="relative h-[180px]">
                              <Image
                                src={previewUrl}
                                alt={`File preview ${index + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div className="flex items-center gap-3 pr-10">
                              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                                <File className="h-5 w-5 text-primary" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-slate-800">
                                  {file.name}
                                </p>
                                <p className="text-xs text-slate-500">
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

              <Button
                onClick={handleSubmit}
                disabled={submitDisabled}
                className="h-11 w-full"
                size="lg"
              >
                {isUpdating ? "Илгээж байна..." : "Төлөв шинэчлэх"}
              </Button>

              {googleMapUrl && (
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-950">
                        Газрын байршил бэлэн байна
                      </h4>
                      <p className="text-sm text-blue-800">
                        KMZ файлаас координат уншигдсан тул Google Maps дээр шууд нээж болно.
                      </p>
                    </div>
                    <Button asChild variant="outline" className="bg-white">
                      <a
                        href={googleMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpdateRequestStatus;
