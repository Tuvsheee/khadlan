import UsersView from "@/components/sections/users/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хэрэглэгчид",
  description: "Хэрэглэгчид",
};

export default function UsersPage() {
  return <UsersView />;
}
