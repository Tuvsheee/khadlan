import SignUpForm from "./sign-up-form";
import Link from "next/link";

export default function SignupPageView() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f4f4f5] p-4 md:p-8">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-100 bg-white shadow-xl p-7 md:p-10 space-y-7">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium text-[#1A3A3E]">
            Шинэ бүртгэл үүсгэх
          </h1>
          <p className="text-sm text-muted-foreground">
            Төрийн газрын удирдлагын нэгдсэн системд нэгдэж бүртгүүлнэ.
          </p>
        </div>

        <SignUpForm />

        <div className="text-center text-sm text-muted-foreground">
          Бүртгэлтэй юу?{" "}
          <Link
            href="/auth/login"
            className="text-[#1A3A3E] hover:underline font-medium"
          >
            Нэвтрэх
          </Link>
        </div>
      </div>
    </div>
  );
}
