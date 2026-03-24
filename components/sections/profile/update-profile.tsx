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
import { UserProfileData } from "@/types/user";
import SelectDistricts from "@/components/common/select-districts";
import { Mail, User2, CreditCard, Phone, Loader2 } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const updateProfileSchema = z.object({
  firstName: z.string().min(1, "Нэр оруулна уу"),
  lastName: z.string().min(1, "Овог оруулна уу"),
  regNumber: z
    .string()
    .min(1, "Регистрийн дугаар оруулна уу")
    .length(10, "Регистрийн дугаар 10 оронтой байх ёстой")
    .transform((val) => val.toUpperCase()) // Transform first
    .pipe(
      z.string().regex(/^[А-ЯӨҮ]{2}\d{8}$/, "Регистрийн дугаар буруу байна")
    ),
  username: z.string().min(1, "Нэр оруулна уу"),
  phone: z
    .string()
    .min(1, "Утасны дугаар оруулна уу")
    .max(8, "Утасны дугаар 8 оронтой байна"),
  districtId: z.string().min(1, "Аймаг оруулна уу"),
  subDistrictId: z.string().min(1, "Сум оруулна уу"),
  profileImageUrl: z
    .union([
      z
        .instanceof(File)
        .refine(
          (file) => file.size <= MAX_FILE_SIZE,
          `Зургийн хэмжээ 5MB-аас бага байх ёстой`
        )
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
          "Зөвхөн JPG, PNG, WEBP өргөтгөлтэй зураг оруулна уу"
        ),
      z.string(),
    ])
    .optional(),
  bagKhorooId: z.string().min(1, "Баг, хороо оруулна уу").optional(),
});

interface UpdateProfileProps {
  profile: UserProfileData;
  onCancel: () => void;
}

export function UpdateProfile({ profile, onCancel }: UpdateProfileProps) {
  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      bagKhorooId: "",
      firstName: profile.firstname || "",
      lastName: profile.lastname || "",
      regNumber: profile.regNumber || "",
      phone: profile.phone?.toString() || "",
      districtId: "",
      subDistrictId: "",
      username: profile.username || "",
      profileImageUrl: profile.profileImageUrl || undefined,
    },
  });

  const { mutate: updateProfile, isPending } = useMutationUtil({
    endpoint: "/auth/updateProfile",
    method: "put",
    queryKey: ["profile"],
    successMessage: "Профайл амжилттай шинэчлэгдлээ",
    onSuccessCallback: () => {
      onCancel();
    },
    contentType: "multipart/form-data",
  });

  function onSubmit(data: z.infer<typeof updateProfileSchema>) {
    const formData = new FormData();

    // Add other fields
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("username", data.username);
    formData.append("phone", data.phone);
    formData.append("regNumber", data.regNumber);
    formData.append("districtId", data.districtId);
    formData.append("subDistrictId", data.subDistrictId);

    // Handle profile image
    if (data.profileImageUrl) {
      // Only append if it's a File object (new upload)
      if (data.profileImageUrl instanceof File) {
        formData.append("profileImageUrl", data.profileImageUrl);
      }
      // If it's a string (existing URL), only append if you want to keep the existing image
      // You might not need to send it at all if your backend handles this case
    }

    updateProfile(formData);
  }

  return (
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
                  <FormLabel className="text-sm font-medium">И-мэйл</FormLabel>
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
                    <FormLabel className="text-sm font-medium">Овог</FormLabel>
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
                    <FormLabel className="text-sm font-medium">Нэр</FormLabel>
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
            <FormField
              control={form.control}
              name="profileImageUrl"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Зураг</FormLabel>
                  {/* Show existing image if available */}
                  {typeof value === "string" && value && (
                    <div className="mb-2">
                      <img
                        src={value}
                        alt="Profile"
                        className="w-20 h-20 object-cover rounded-full"
                      />
                    </div>
                  )}
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      {...fieldProps}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    defaultBagKhoroo={{
                      _id: profile.bagKhorooId,
                      name: profile.bagKhoroo,
                    }}
                    defaultDistrict={{
                      _id: profile.subDistrictId,
                      name: profile.subDistrict,
                    }}
                    defaultProvince={{
                      _id: profile.districtId,
                      name: profile.district,
                    }}
                    onProvinceChange={(value) => {
                      form.setValue("districtId", value);
                    }}
                    onDistrictChange={(value) => {
                      form.setValue("subDistrictId", value);
                    }}
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
            onClick={onCancel}
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
                Хадгалж байна...
              </>
            ) : (
              "Хадгалах"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
