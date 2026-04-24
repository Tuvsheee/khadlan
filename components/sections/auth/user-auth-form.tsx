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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useAuthStore } from "@/hooks/use-auth-store";

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
  const login = useAuthStore((state) => state.login);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.username, data.password);
      router.push("/dashboard");
    } catch (error: any) {
      const errorMessage = error?.message || "Authentication failed";

      // Check for backend error messages in Mongolian or English error codes
      if (
        errorMessage.includes("USER_NOT_FOUND") ||
        errorMessage.includes("INVALID_PASSWORD") ||
        errorMessage.includes("Бүртгэлтэй хэрэглэгч олдсонгүй") ||
        errorMessage.includes("Нууц үг буруу байна") ||
        errorMessage.includes("not found") ||
        errorMessage.includes("incorrect")
      ) {
        // Show the standard incorrect credentials message
        toast.error("Та нэр эсвэл нууц үг буруу байна");
      } else if (
        errorMessage.includes("баталгаажуулна") ||
        errorMessage.includes("verified") ||
        errorMessage.includes("и-мэйл хаягаа")
      ) {
        // Show email verification message
        toast.error("Та и-мэйл хаягаа баталгаажуулна уу");
      } else {
        // Show the actual error message if it's something else
        toast.error(errorMessage);
      }
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
                <FormLabel className="text-xs font-medium text-[#1A3A3E]">
                  Хэрэглэгчийн нэр
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Хэрэглэгчийн нэр"
                    {...field}
                    className="h-11 bg-[#f5f6f7] border-gray-200"
                  />
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
                <FormLabel className="text-xs font-medium text-[#1A3A3E]">
                  Нууц үг
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Нууц үг"
                    {...field}
                    className="h-11 bg-[#f5f6f7] border-gray-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={loading}
            className="ml-auto w-full h-11 bg-[#0f5e34] hover:bg-[#0b4a2a]"
            type="submit"
          >
            Нэвтрэх
          </Button>
        </form>
      </Form>
    </>
  );
}
