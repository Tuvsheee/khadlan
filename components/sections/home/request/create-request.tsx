"use client";
import { Button } from "@/components/ui/button";
import { Plus, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutationUtil } from "@/hooks/use-mutation";
import { toast } from "sonner";
import { useEffect, useMemo, useRef, useState } from "react";
import SelectDistricts from "@/components/common/select-districts";
import { useQueryUtil } from "@/hooks/use-query";
import { usePayment } from "@/hooks/use-payment";
import { getMedia } from "@/lib/utils";

const createRequestSchema = z.object({
  userType: z.enum(["хувь хүн", "бизнес"], {
    required_error: "Хэрэглэгчийн төрлийг сонгоно уу",
  }),
  subDistrictId: z.string().min(1, "Дүүрэг/Аймаг оруулна уу"),
  bagKhorooId: z.string().optional(),
  street: z.string().min(1, "Гудамж/Хороо оруулна уу"),
  landSize: z.string().min(1, "Газрын хэмжээ оруулна уу"),
  landName: z.string().min(1, "Газрын нэр оруулна уу"),
});

type CreateRequestData = z.infer<typeof createRequestSchema>;

function CreateRequestModal() {
  const [open, setOpen] = useState(false);
  const form = useForm<CreateRequestData>({
    resolver: zodResolver(createRequestSchema),
    defaultValues: {
      userType: "хувь хүн",
      subDistrictId: "",
      bagKhorooId: "",
      street: "",
      landSize: "",
      landName: "",
    },
  });

  const { onOpen: openPaymentModal } = usePayment();
  const { data: accountStatus } = useQueryUtil<{ isActive: boolean }>({
    queryKey: ["account-status"],
    endpoint: "/auth/account/isActive",
  });

  const bagKhorooIdValue = useWatch({
    control: form.control,
    name: "bagKhorooId",
  });

  const [hasSignature, setHasSignature] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const { data: contractUploads } = useQueryUtil<{
    success: boolean;
    message: string;
    data: Array<{ _id: string; contractFiles: string[] }>;
  }>({
    queryKey: ["request-contract-uploads", bagKhorooIdValue],
    endpoint: "/request/uploadedContracts",
    params: { bagKhorooId: bagKhorooIdValue },
    enabled: Boolean(bagKhorooIdValue),
  });

  const uploadedContractFiles = useMemo<
    Array<{ uploadId: string; file: string }>
  >(
    () =>
      contractUploads?.data?.flatMap((upload) =>
        upload.contractFiles.map((file) => ({
          uploadId: upload._id,
          file,
        })),
      ) ?? [],
    [contractUploads],
  );

  const getCanvasPoint = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();

    if ("touches" in event) {
      const touch = event.touches[0] ?? event.changedTouches[0];
      return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    }

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const startDraw = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const { x, y } = getCanvasPoint(event);
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
    setHasSignature(true);
  };

  const draw = (
    event:
      | React.MouseEvent<HTMLCanvasElement>
      | React.TouchEvent<HTMLCanvasElement>,
  ) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const { x, y } = getCanvasPoint(event);
    context.lineTo(x, y);
    context.strokeStyle = "#1f2937";
    context.lineWidth = 2;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.stroke();
  };

  const stopDraw = () => {
    const canvas = canvasRef.current;
    if (canvas && hasSignature) {
      setSignatureDataUrl(canvas.toDataURL("image/png"));
    }
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setSignatureDataUrl("");
    setIsDrawing(false);
  };

  useEffect(() => {
    setHasSignature(false);
    setSignatureDataUrl("");
  }, [bagKhorooIdValue, uploadedContractFiles.length]);

  useEffect(() => {
    if (isReviewOpen) {
      clearSignature();
    }
  }, [isReviewOpen]);

  const handleTriggerClick = () => {
    // if (!accountStatus?.isActive) {
    //   openPaymentModal();
    //   return;
    // }
    setOpen(true);
  };

  const { mutate, isPending } = useMutationUtil({
    endpoint: "/request/createRequest",
    queryKey: ["requests"],
    onSuccessCallback: () => {
      toast.success("Хүсэлт амжилттай илгээгдлээ");
      setOpen(false);
      form.reset();
    },
  });

  const onSubmit = (data: CreateRequestData) => {
    if (uploadedContractFiles.length > 0) {
      setHasSignature(false);
      setSignatureDataUrl("");
      setIsReviewOpen(true);
      return;
    }

    mutate({ ...data, landSize: Number(data.landSize) });
  };

  const handleReviewConfirm = () => {
    if (!hasSignature || !signatureDataUrl) {
      toast.error("Гарын үсгээ зурж баталгаажуулна уу");
      return;
    }

    const data = form.getValues();
    mutate({
      ...data,
      landSize: Number(data.landSize),
      contractSignature: signatureDataUrl,
    });
    setIsReviewOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        size="lg"
        className="gap-2 rounded-xl bg-[#0f5e34] hover:bg-[#0c4b2a] shadow-sm"
        onClick={handleTriggerClick}
      >
        <Plus className="h-4 w-4" />
        Хадлан ашиглах хүсэлт илгээх
      </Button>
      <DialogContent className="sm:max-w-[860px] max-h-[90vh] overflow-y-auto p-0 rounded-2xl border border-slate-200">
        <div className="p-6 md:p-7 bg-gradient-to-b from-white to-slate-50/40">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <MapPin className="h-5 w-5 text-[#0f5e34]" />
              Хадлан ашиглах хүсэлт илгээх
            </DialogTitle>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Та доорх мэдээллийг бөглөн хадлан ашиглах хүсэлтээ илгээнэ үү
            </p>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 mt-6"
            >
              <div className="space-y-5">
                <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-700">
                    Байршлын мэдээлэл
                  </h3>
                  <div>
                    <FormField
                      control={form.control}
                      name="subDistrictId"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <SelectDistricts
                              onDistrictChange={field.onChange}
                              onBagKhorooChange={(value) => {
                                form.setValue("bagKhorooId", value, {
                                  shouldValidate: true,
                                  shouldDirty: true,
                                });
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="street"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-700">
                            Гудамж/Хороо
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Гудамж/Хороо..."
                              {...field}
                              className="h-11 bg-slate-50 border-slate-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />{" "}
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-700">
                            Хэрэглэгчийн төрөл
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11 bg-slate-50 border-slate-200">
                                <SelectValue placeholder="Хэрэглэгчийн төрөл сонгох" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="хувь хүн">Хувь хүн</SelectItem>
                              <SelectItem value="бизнес">Бизнес</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* {bagKhorooIdValue ? (
                  <div className="space-y-3 rounded-lg border border-muted/50 bg-muted/10 p-4">
                    <h3 className="font-medium">Гэрээний файлууд</h3>
                    {uploadedContractFiles.length > 0 ? (
                      <div className="space-y-2">
                        {uploadedContractFiles.map((entry) => (
                          <div
                            key={`${entry.uploadId}-${entry.file}`}
                            className="rounded-md border border-border bg-background px-3 py-2"
                          >
                            <a
                              href={entry.file}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {entry.file.split("/").pop()}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Тус хаягтай ямар ч гэрээний файл олдсонгүй.
                      </p>
                    )}
                    {uploadedContractFiles.length > 0 ? (
                      <p className="text-sm text-muted-foreground">
                        Хүсэлт илгээх товч дарахад гэрээ popup-аар харагдана.
                      </p>
                    ) : null}
                  </div>
                ) : null} */}

                <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
                  <h3 className="text-sm font-semibold text-slate-700">
                    Газрын мэдээлэл
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="landSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-700">
                            Газрын хэмжээ (га)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Жишээ: 1.5"
                              {...field}
                              className="h-11 bg-slate-50 border-slate-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="landName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-slate-700">
                            Газрын нэр
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Жишээ: Хадлангийн талбай"
                              {...field}
                              className="h-11 bg-slate-50 border-slate-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-[#0f5e34] hover:bg-[#0c4b2a]"
                size="lg"
                disabled={isPending}
              >
                {isPending ? "Илгээж байна..." : "Хүсэлт илгээх"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="sm:max-w-[640px] rounded-2xl border border-slate-200 p-0">
          <div className="p-6 md:p-7 bg-gradient-to-b from-white to-slate-50/40">
            <DialogHeader>
              <DialogTitle className="text-xl">
                Гэрээний файлыг баталгаажуулах
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <p className="text-sm text-muted-foreground">
                Доорх файл дээр дарж гэрээний нөхцлийг шалгаад &quot;Би дээрх
                гэрээний файлыг хараад гэрээний нөхцлийг зөвшөөрч байна&quot;-г
                тэмдэглээд үргэлжлүүлэх товчийг дарна уу.
              </p>
              <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                {uploadedContractFiles.map((entry) => (
                  <div
                    key={`${entry.uploadId}-${entry.file}`}
                    className="rounded-md border border-slate-200 bg-slate-50/60 px-3 py-2"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      {(() => {
                        const fileUrl = getMedia(entry.file) || entry.file;
                        return (
                          <>
                            <a
                              href={fileUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              {entry.file.split("/").pop()}
                            </a>
                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href={fileUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10"
                              >
                                Үзэх
                              </a>
                              <a
                                href={fileUrl}
                                download
                                className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10"
                              >
                                Татах
                              </a>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <div className="w-full space-y-2">
                  <p className="text-sm font-medium">
                    Энд гарын үсгээ зурна уу
                  </p>
                  <canvas
                    ref={canvasRef}
                    width={520}
                    height={170}
                    onMouseDown={startDraw}
                    onMouseMove={draw}
                    onMouseUp={stopDraw}
                    onMouseLeave={stopDraw}
                    onTouchStart={startDraw}
                    onTouchMove={draw}
                    onTouchEnd={stopDraw}
                    className="w-full rounded-md border border-dashed border-border bg-white touch-none"
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Гарын үсэг зурсны дараа үргэлжлүүлэх боломжтой.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={clearSignature}
                    >
                      Дахин зурах
                    </Button>
                  </div>
                </div>
              </div>
              {!hasSignature ? (
                <p className="text-sm text-destructive">
                  Баталгаажуулахын тулд гарын үсгээ зурна уу.
                </p>
              ) : null}
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => setIsReviewOpen(false)}
              >
                Буцах
              </Button>
              <Button
                onClick={handleReviewConfirm}
                disabled={!hasSignature || isPending}
              >
                {isPending ? "Илгээж байна..." : "Үргэлжлүүлэх"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}

export default CreateRequestModal;
