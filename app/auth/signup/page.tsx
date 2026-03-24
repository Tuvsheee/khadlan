import SignupPageView from "@/components/sections/auth/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бүртгэл үүсгэх",
  description: "Бүртгэл үүсгэх",
};

export default function SignupPage() {
  return <SignupPageView />;
}
