import SignInViewPage from "@/components/sections/auth/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Нэвтэрх",
  description: "Нэвтэрх",
};

export default function Page() {
  return <SignInViewPage />;
}
