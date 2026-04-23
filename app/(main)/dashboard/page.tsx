import HomeView from "@/components/sections/home/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Нүүр хуудас",
  description: "Нүүр хуудас",
};

export default function Dashboard() {
  return <HomeView />;
}
