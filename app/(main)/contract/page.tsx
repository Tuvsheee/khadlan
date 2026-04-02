"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { File, ImageIcon, X } from "lucide-react";
import { useMutationUtil } from "@/hooks/use-mutation";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { useQueryUtil } from "@/hooks/use-query";
import { useAuth } from "@/hooks/use-auth";

export default function ContractPage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const { user, token } = useAuth();
  const bagKhorooId = user?.bagKhorooId || "";

  const { data: contractUploads } = useQueryUtil<{
    success: boolean;
    message: string;
    data: Array<{ _id: string; contractFiles: string[] }>;
  }>({
    queryKey: ["contract-uploads"],
    endpoint: "/request/uploadedContracts",
    enabled: Boolean(bagKhorooId),
  });

  const uploadedFiles = useMemo(
    () =>
      contractUploads?.data?.flatMap((upload) =>
        upload.contractFiles.map((file) => ({
          uploadId: upload._id,
          file,
        })),
      ) ?? [],
    [contractUploads],
  );

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutationUtil<any, FormData>({
    endpoint: "/request/uploadContract",
    queryKey: ["contract-uploads"],
    onSuccessCallback: () => {
      toast.success("Гэрээний файл амжилттай илгээгдлээ");
      clearFiles();
    },
    contentType: "multipart/form-data",
  });

  const handleDeleteUploadedFile = async (
    uploadId: string,
    filePath: string,
  ) => {
    try {
      await api.delete(`/request/uploadedContracts/${uploadId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          filePath,
        },
      });
      toast.success("Файл амжилттай устгагдлаа");
      queryClient.invalidateQueries({ queryKey: ["contract-uploads"] });
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Файл устгах үед алдаа гарлаа",
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(files);
    setPreviewUrls(
      files
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file)),
    );
  };

  const clearFiles = () => {
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setSelectedFiles([]);
    setPreviewUrls([]);
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newImageFiles = newFiles.filter((file) =>
      file.type.startsWith("image/"),
    );
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setSelectedFiles(newFiles);
    setPreviewUrls(newImageFiles.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFiles.length === 0 || !bagKhorooId) return;

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("contractFiles", file);
    });

    mutate(formData);
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <div className="space-y-6 py-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Гэрээ</h1>
        <p className="max-w-2xl text-muted-foreground">
          Та энд гэрээний файлуудаа оруулж, хүсэлтээ илгээх боломжтой.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold">Гэрээний файл оруулах</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Гэрээний файл оруулж, дараа нь иргэн хүсэлт илгээх үед эдгээр файлууд
          системд хадгалагдана.
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Гэрээний файл
                  </label>
                  <div>
                    <Input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="cursor-pointer"
                      disabled={isPending}
                    />
                  </div>
                </div>

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
                      {selectedFiles.map((file, index) => (
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
                          <div className="flex items-center gap-3">
                            <div className="h-16 w-16 min-w-[4rem] overflow-hidden rounded-lg border bg-background">
                              {previewUrls[index] ? (
                                <img
                                  src={previewUrls[index]}
                                  alt={file.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-primary/10">
                                  <ImageIcon className="h-6 w-6 text-primary" />
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={
                  isPending || selectedFiles.length === 0 || !bagKhorooId
                }
              >
                {isPending ? "Илгээж байна..." : "Файл илгээх"}
              </Button>
            </form>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h3 className="font-semibold">Илгээсэн гэрээний файлууд</h3>
              <p className="text-sm text-muted-foreground">
                Та илгээсэн гэрээний файлуудыг доор харна.
              </p>
              <div className="mt-3 grid gap-2">
                {uploadedFiles.map(({ uploadId, file }, index) => (
                  <div
                    key={`${uploadId}-${index}`}
                    className="flex flex-col gap-2 rounded-lg border bg-white/80 p-3 text-sm sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <File className="h-4 w-4 text-primary" />
                      <a
                        href={file}
                        target="_blank"
                        rel="noreferrer"
                        className="truncate text-sm font-medium text-primary underline-offset-2 hover:underline"
                      >
                        {file.split("/").pop() || file}
                      </a>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive"
                      onClick={() => handleDeleteUploadedFile(uploadId, file)}
                    >
                      Устгах
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
