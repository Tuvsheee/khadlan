import HomeView from "@/components/sections/home/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хүсэлтүүд",
  description: "Хадлангийн хүсэлтүүд",
};

export default function RequestsPage() {
  return <HomeView />;
}
