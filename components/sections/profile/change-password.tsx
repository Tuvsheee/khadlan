"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutationUtil } from "@/hooks/use-mutation";

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Одоогийн нууц үг оруулна уу"),
  newPassword: z
    .string()
    .min(6, "Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой"),
});

interface ChangePasswordProps {
  onCancel: () => void;
}

export function ChangePassword({ onCancel }: ChangePasswordProps) {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const { mutate: changePassword, isPending } = useMutationUtil({
    endpoint: "/auth/changePassword",
    method: "post",
    queryKey: ["profile"],
    successMessage: "Нууц үг амжилттай солигдлоо",
    onSuccessCallback: () => {
      onCancel();
      form.reset();
    },
  });

  function onSubmit(data: z.infer<typeof changePasswordSchema>) {
    changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Одоогийн нууц үг</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Одоогийн нууц үг..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Шинэ нууц үг</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Шинэ нууц үг..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Цуцлах
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Солиж байна..." : "Солих"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
