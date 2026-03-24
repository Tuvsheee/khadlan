"use client";

import UserList from "./user-list";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import UserStats from "./user-stats";
import { RoleGate } from "@/components/common/auth/role-gate";

export default function UsersView() {
  const router = useRouter();

  return (
    <main className="flex flex-col h-full gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Хэрэглэгчид</h1>
          <p className="text-muted-foreground mt-1">
            Системийн хэрэглэгчдийн жагсаалт болон удирдлага
          </p>
        </div>

        <RoleGate allowedRoles={"admin"}>
          <Button onClick={() => router.push("/users/new")}>
            <Plus className="h-4 w-4 mr-2" />
            Шинэ хэрэглэгч
          </Button>
        </RoleGate>
      </div>

      {/* Stats Cards */}
      <RoleGate allowedRoles={"admin"}>
        <UserStats />
      </RoleGate>

      <UserList />
    </main>
  );
}
