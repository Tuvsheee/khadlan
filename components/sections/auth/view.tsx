import UserAuthForm from "./user-auth-form";
import Link from "next/link";

export default function SignInViewPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#f4f4f5] p-4 md:p-8 overflow-hidden">
      <div className="absolute inset-0 lg:hidden bg-[url('/images/Background.svg')] bg-cover bg-center" />
      <div className="absolute inset-0 lg:hidden bg-[#1a3a3e]/70" />

      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-white/95 lg:bg-white shadow-xl overflow-hidden border border-white/20 lg:border-gray-100 backdrop-blur-sm lg:backdrop-blur-0">
        <div className="grid lg:grid-cols-2">
          <div className="hidden lg:flex relative min-h-[560px] bg-[url('/images/Background.svg')] bg-cover bg-center p-10 items-end">
            {/* <div className="absolute inset-0 bg-[#21484c]/35" />
            <div className="relative z-10 text-white max-w-sm space-y-4">
              <div className="inline-flex items-center rounded-full border border-white/30 px-3 py-1 text-xs bg-white/10">
                ЦАХИМ ХҮСЭЛТ
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                Хадлангийн хүсэлтээ илгээгээрэй
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Хадлангийн зориулалтат газар ашиглах хүсэлтийг цахимаар
                бүртгүүлж, явцыг хянах боломжтой.
              </p>
            </div> */}
          </div>

          <div className="p-6 sm:p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md space-y-7">
              <div className="lg:hidden rounded-2xl border border-[#d9e5e5] bg-[#f6fbfb] px-4 py-3 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-[#3f6b6f]">
                  Цахим хүсэлт
                </p>
                <p className="mt-1 text-sm text-[#21484c]">
                  Хадлангийн системд нэвтрэн үргэлжлүүлнэ үү
                </p>
              </div>

              <div className="space-y-2 text-center hidden md:block">
                <h1 className="text-3xl font-semibold text-[#1A3A3E]">
                  Нэвтрэх
                </h1>
                <p className="text-sm text-muted-foreground">
                  Үргэлжлүүлэхийн тулд нэвтэрнэ үү
                </p>
              </div>

              <UserAuthForm />

              <div className="text-center text-sm text-muted-foreground">
                Бүртгэлгүй юу?{" "}
                <Link
                  href="/auth/signup"
                  className="text-[#1A3A3E] hover:underline font-medium"
                >
                  Бүртгүүлэх
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
