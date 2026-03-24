import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(1, "Хэрэглэгчийн нэр оруулна уу"),
    password: z
      .string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгт байх ёстой")
      .max(32, "Нууц үг хамгийн ихдээ 32 тэмдэгт байх ёстой"),
    confirmPassword: z.string(),
    lastName: z.string().min(1, "Овог оруулна уу"),
    firstName: z.string().min(1, "Нэр оруулна уу"),
    districtId: z.string().min(1, "Аймаг сонгоно уу"),
    subDistrictId: z.string().min(1, "Дүүрэг сонгоно уу"),
    bagKhorooId: z.string().min(1, "Баг, хороо сонгоно уу").optional(),
    regNumber: z
      .string()
      .min(1, "Регистрийн дугаар оруулна уу")
      .length(10, "Регистрийн дугаар 10 оронтой байх ёстой")
      .transform((val) => val.toUpperCase()) // Transform first
      .pipe(
        z.string().regex(/^[А-ЯӨҮ]{2}\d{8}$/, "Регистрийн дугаар буруу байна")
      ),
    phone: z
      .string()
      .min(1, "Утасны дугаар оруулна уу")
      .length(8, "Утасны дугаар 8 оронтой байх ёстой")
      .regex(/^[0-9]+$/, "Зөвхөн тоо оруулна уу"),
    otp: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Нууц үг таарахгүй байна",
    path: ["confirmPassword"],
  });

export type SignUpType = z.infer<typeof signUpSchema>;
