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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Хэрэглэгчийн нэр оруулна уу"),
  password: z.string().min(1, "Нууц үг оруулна уу"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function UserAuthForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
      callbackUrl: "/",
    });
    if (result?.error) {
      toast.error(result.error);
    } else {
      router.push("/");
    }
  };
  const loading = form.formState.isSubmitting;
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Хэрэглэгчийн нэр</FormLabel>
                <FormControl>
                  <Input placeholder="Хэрэглэгчийн нэр..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Нууц үг</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Нууц үг..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className="ml-auto w-full" type="submit">
            Нэвтрэх
          </Button>
        </form>
      </Form>
    </>
  );
}
