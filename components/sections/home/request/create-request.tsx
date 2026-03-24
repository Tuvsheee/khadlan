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
import { useForm } from "react-hook-form";
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
import { useState } from "react";
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

  const handleTriggerClick = () => {
    if (!accountStatus?.isActive) {
      openPaymentModal();
      return;
    }
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
    mutate({ ...data, landSize: Number(data.landSize) });
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
                                form.setValue("bagKhorooId", value);
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
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateRequestModal;
