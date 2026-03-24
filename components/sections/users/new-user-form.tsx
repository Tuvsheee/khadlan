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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutationUtil } from "@/hooks/use-mutation";
import { ArrowLeft, Mail, User2, Phone, Lock, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ENUM_ROLES, ROLES } from "@/constants/data";
import SelectDistricts from "@/components/common/select-districts";
import { Loader2 } from "lucide-react";

const newUserSchema = z.object({
  username: z.string().min(1, "Хэрэглэгчийн нэр оруулна уу"),
  password: z.string().min(1, "Нууц үг оруулна уу"),
  phone: z
    .string()
    .min(8, "Утасны дугаар 8 оронтой байх ёстой")
    .max(8, "Утасны дугаар 8 оронтой байх ёстой")
    .regex(/^[0-9]+$/, "Зөвхөн тоо оруулна уу"),
  role: z.enum(ENUM_ROLES, {
    required_error: "Хэрэглэгчийн төрөл сонгоно уу",
  }),
  subDistrictId: z.string().min(1, "Дүүрэг/Аймаг сонгоно уу"),
  bagKhorooId: z.string().min(1, "Дүүрэг/Аймаг сонгоно уу"),
  regNumber: z
    .string()
    .min(1, "Регистрийн дугаар оруулна уу")
    .length(10, "Регистрийн дугаар 10 оронтой байх ёстой")
    .transform((val) => val.toUpperCase()) // Transform first
    .pipe(
      z.string().regex(/^[А-ЯӨҮ]{2}\d{8}$/, "Регистрийн дугаар буруу байна")
    ),
  lastName: z.string().min(1, "Овог оруулна уу"),
  firstName: z.string().min(1, "Нэр оруулна уу"),
});

type NewUserFormValues = z.infer<typeof newUserSchema>;

export default function NewUserForm() {
  const router = useRouter();

  const form = useForm<NewUserFormValues>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      username: "",
      password: "",
      phone: "",
      role: "user",
      subDistrictId: "",
      bagKhorooId: "",
    },
  });

  const { mutate: createUser, isPending } = useMutationUtil({
    endpoint: "/auth/createAccount",
    method: "post",
    queryKey: ["users"],
    successMessage: "Хэрэглэгч амжилттай бүртгэгдлээ",
    onSuccessCallback: () => {
      router.push("/users");
    },
  });

  function onSubmit(data: NewUserFormValues) {
    createUser(data);
  }

  return (
    <main className="space-y-8 w-full">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Шинэ хэрэглэгч</h1>
          <p className="text-muted-foreground mt-1">
            Системд шинэ хэрэглэгч нэмэх
          </p>
        </div>
      </div>

      <Card className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="border-b pb-2">
                <h3 className="font-semibold text-lg">Хувийн мэдээлэл</h3>
                <p className="text-sm text-muted-foreground">
                  Үндсэн мэдээллээ оруулна уу.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        И-мэйл
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            placeholder="И-мэйл хаяг..."
                            {...field}
                            className="pl-10 bg-muted/50 hover:bg-muted/80 transition-colors"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">
                          Овог
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              placeholder="Овог..."
                              {...field}
                              className="pl-10 bg-muted/50 hover:bg-muted/80 transition-colors"
                            />
                          </div>
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
                        <FormLabel className="text-sm font-medium">
                          Нэр
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              placeholder="Нэр..."
                              {...field}
                              className="pl-10 bg-muted/50 hover:bg-muted/80 transition-colors"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-6">
              <div className="border-b pb-2">
                <h3 className="font-semibold text-lg">Холбоо барих</h3>
                <p className="text-sm text-muted-foreground">
                  Холбоо барих мэдээллээ оруулна уу.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="regNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Регистрийн дугаар
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            placeholder="Жишээ: АА12345678"
                            {...field}
                            className="pl-10 uppercase bg-muted/50 hover:bg-muted/80 transition-colors"
                          />
                        </div>
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
                      <FormLabel className="text-sm font-medium">
                        Утасны дугаар
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="number"
                            placeholder="Жишээ: 99999999"
                            maxLength={8}
                            {...field}
                            className="pl-10 bg-muted/50 hover:bg-muted/80 transition-colors"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Account Information Section */}
            <div className="space-y-6">
              <div className="border-b pb-2">
                <h3 className="font-semibold text-lg">Бүртгэлийн мэдээлэл</h3>
                <p className="text-sm text-muted-foreground">
                  Нэвтрэх эрхийн мэдээллээ оруулна уу.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Нууц үг
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            type="password"
                            placeholder="Нууц үг..."
                            {...field}
                            className="pl-10 bg-muted/50 hover:bg-muted/80 transition-colors"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Хэрэглэгчийн төрөл
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-muted/50 hover:bg-muted/80 transition-colors">
                            <SelectValue placeholder="Хэрэглэгчийн төрөл сонгох" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ROLES.map((role) => (
                            <SelectItem key={role.value} value={role.value}>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{role.text}</Badge>
                                <span className="text-muted-foreground text-sm">
                                  {role.text}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-6">
              <div className="border-b pb-2">
                <h3 className="font-semibold text-lg">Хаяг</h3>
                <p className="text-sm text-muted-foreground">
                  Оршин суугаа хаягаа сонгоно уу.
                </p>
              </div>

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

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="min-w-[100px]"
              >
                Цуцлах
              </Button>
              <Button
                type="submit"
                disabled={isPending}
                className="min-w-[100px] bg-primary hover:bg-primary/90"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Үүсгэж байна...
                  </>
                ) : (
                  "Үүсгэх"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </main>
  );
}
