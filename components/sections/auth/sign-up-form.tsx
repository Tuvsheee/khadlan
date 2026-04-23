"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationUtil } from "@/hooks/use-mutation";
import { Loader2, UserPlus, Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema, SignUpType } from "@/validations/auth/form-validations";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SelectDistricts from "@/components/common/select-districts";

interface SignUpResponse {
  success: boolean;
  message: string;
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      lastName: "",
      firstName: "",
      regNumber: "",
      phone: "",
      districtId: "",
      subDistrictId: "",
      bagKhorooId: "",
    },
  });

  const { mutate: signUp, isPending: isSigningUp } = useMutationUtil<
    SignUpResponse,
    { user: Omit<SignUpType, "confirmPassword"> }
  >({
    endpoint: "/auth/signup",
    queryKey: ["signup"],
    successMessage: "Бүртгэл амжилттай үүслээ",
    onSuccessCallback: () => {
      router.push("/auth/login");
    },
  });

  const onSubmit = (data: SignUpType) => {
    const { confirmPassword, ...signUpData } = data;
    signUp({ user: signUpData });
  };

  const handleProvinceChange = (value: string) => {
    form.setValue("districtId", value);
    form.setValue("subDistrictId", "");
  };

  const handleDistrictChange = (value: string) => {
    form.setValue("subDistrictId", value);
  };
  const handleBagKhorooChange = (value: string) => {
    form.setValue("bagKhorooId", value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">
                Хэрэглэгчийн и-мэйл
              </FormLabel>
              <FormControl>
                <Input
                  autoComplete="off"
                  placeholder="email@example.com"
                  {...field}
                  className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-medium">Овог</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Овог"
                    {...field}
                    className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-medium">Нэр</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Нэр"
                    {...field}
                    className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 pt-1">
          <FormField
            control={form.control}
            name="districtId"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SelectDistricts
                    layout="auth"
                    onBagKhorooChange={handleBagKhorooChange}
                    onProvinceChange={handleProvinceChange}
                    onDistrictChange={handleDistrictChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="regNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-medium">РД</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="РД"
                    {...field}
                    className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white uppercase"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-medium">
                  Утасны дугаар
                </FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="Утасны дугаар"
                    {...field}
                    maxLength={8}
                    className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">Нууц үг</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    placeholder="Нууц үг"
                    {...field}
                    className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">
                Нууц үг давтах
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    autoComplete="off"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Нууц үг давтаж оруулах"
                    {...field}
                    className="h-11 rounded-lg border border-gray-200 bg-[#f5f6f7] px-3 text-sm placeholder-gray-500 focus:border-gray-300 focus:bg-white pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-500" />
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isSigningUp}
          type="submit"
          className="w-full h-11 bg-[#0f5e34] hover:bg-[#0b4a2a]"
        >
          {isSigningUp ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <UserPlus className="mr-2 h-4 w-4" />
          )}
          Бүртгүүлэх
        </Button>
      </form>
    </Form>
  );
}
