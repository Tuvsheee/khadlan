import SignUpForm from "./sign-up-form";
import Link from "next/link";

export default function SignupPageView() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl p-8 space-y-8">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Бүртгүүлэх
            </h1>
            <p className="text-sm text-muted-foreground">
              Шинээр бүртгүүлэхийн тулд и-мэйл хаяг болон нууц үгээ оруулна уу
            </p>
          </div>
          <SignUpForm />
          <div className="text-center text-sm">
            Бүртгэлтэй юу?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Нэвтрэх
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
