import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useMutationUtil } from "@/hooks/use-mutation";

const GrassSchema = z.object({
  boodol: z.coerce.number().min(0, { message: "Боодол оруулна уу" }),
  buhal: z.coerce.number().min(0, { message: "Бухал оруулна уу" }),
});

type GrassFormValues = z.infer<typeof GrassSchema>;

export default function GrassInfoForm({ id }: { id: string }) {
  const form = useForm<GrassFormValues>({
    resolver: zodResolver(GrassSchema),
    defaultValues: {
      boodol: 0,
      buhal: 0,
    },
  });
  const { mutate, isPending } = useMutationUtil({
    endpoint: `/request/${id}/grassInfo`,
    method: "post",
    queryKey: ["request", id, "grassInfo"],
    successMessage: "Амжилттай..",
  });

  // Form submission handler
  const onSubmit = (data: GrassFormValues) => {
    mutate(data);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center gap-2 text-primary">
            <Sprout className="h-4 w-4" />
            Өвсны хэмжээ оруулах
          </h3>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="boodol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Боодол</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Боодол оруулах"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="buhal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Бухал</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Бухал оруулах"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={isPending} type="submit">
                Илгээх
              </Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
