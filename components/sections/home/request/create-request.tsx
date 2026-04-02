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
import { useEffect, useMemo, useState } from "react";
import SelectDistricts from "@/components/common/select-districts";
import { useQueryUtil } from "@/hooks/use-query";
import { usePayment } from "@/hooks/use-payment";

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

  const [acceptedContractTerms, setAcceptedContractTerms] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

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

  useEffect(() => {
    setAcceptedContractTerms(false);
  }, [bagKhorooIdValue, uploadedContractFiles.length]);

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
      setAcceptedContractTerms(false);
      setIsReviewOpen(true);
      return;
    }

    mutate({ ...data, landSize: Number(data.landSize) });
  };

  const handleReviewConfirm = () => {
    if (!acceptedContractTerms) {
      toast.error("Гэрээний файлыг шалгаж, нөхцлийг зөвшөөрнө үү");
      return;
    }

    const data = form.getValues();
    mutate({ ...data, landSize: Number(data.landSize) });
    setIsReviewOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button size="lg" className="gap-2" onClick={handleTriggerClick}>
        <Plus className="h-4 w-4" />
        Хадлан ашиглах хүсэлт илгээх
      </Button>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <MapPin className="h-5 w-5 text-primary" />
              Хадлан ашиглах хүсэлт илгээх
            </DialogTitle>
            <p className="text-muted-foreground text-sm">
              Та доорх мэдээллийг бөглөн хадлан ашиглах хүсэлтээ илгээнэ үү
            </p>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 mt-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="">
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
                          <FormLabel>Гудамж/Хороо</FormLabel>
                          <FormControl>
                            <Input placeholder="Гудамж/Хороо..." {...field} />
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
                          <FormLabel>Хэрэглэгчийн төрөл</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
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

                <div className="space-y-2">
                  <h3 className="font-medium">Газрын мэдээлэл</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="landSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Газрын хэмжээ (га)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Жишээ: 1.5"
                              {...field}
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
                          <FormLabel>Газрын нэр</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Жишээ: Хадлангийн талбай"
                              {...field}
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
                className="w-full"
                size="lg"
                disabled={isPending}
              >
                {isPending ? "Илгээж байна..." : "Хүсэлт илгээх"}
              </Button>
              {uploadedContractFiles.length > 0 && !acceptedContractTerms ? (
                <p className="text-sm text-destructive">
                  Гэрээний файлыг бүрэн шалгаж, нөхцлийг зөвшөөрсний дараа
                  хүсэлт илгээх боломжтой.
                </p>
              ) : null}
            </form>
          </Form>
        </div>
      </DialogContent>
      <Dialog open={isReviewOpen} onOpenChange={setIsReviewOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl">
                Гэрээний файлыг баталгаажуулах
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Доорх файл дээр дарж гэрээний нөхцлийг шалгаад "Би дээрх
                гэрээний файлыг хараад гэрээний нөхцлийг зөвшөөрч байна"-г
                тэмдэглээд үргэлжлүүлэх товчийг дарна уу.
              </p>
              <div className="space-y-2 rounded-md border border-border bg-background p-4">
                {uploadedContractFiles.map((entry) => (
                  <div
                    key={`${entry.uploadId}-${entry.file}`}
                    className="rounded-md border border-muted/50 bg-white px-3 py-2"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <a
                        href={entry.file}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {entry.file.split("/").pop()}
                      </a>
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={entry.file}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-md border border-border bg-muted px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10"
                        >
                          Үзэх
                        </a>
                        <a
                          href={entry.file}
                          download
                          className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10"
                        >
                          Татах
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 rounded-md border border-border bg-background p-3">
                <input
                  id="review-accept-contract-terms"
                  type="checkbox"
                  checked={acceptedContractTerms}
                  onChange={(event) =>
                    setAcceptedContractTerms(event.target.checked)
                  }
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                />
                <label
                  htmlFor="review-accept-contract-terms"
                  className="text-sm leading-6"
                >
                  Би дээрх гэрээний файлыг хараад гэрээний нөхцлийг зөвшөөрч
                  байна.
                </label>
              </div>
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
                disabled={!acceptedContractTerms || isPending}
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
