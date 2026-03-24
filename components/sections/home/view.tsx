"use client";
import RequestList from "./request/request-list";
import CreateRequestModal from "./request/create-request";
import { RoleGate } from "@/components/common/auth/role-gate";
import { useAuth } from "@/hooks/use-auth";
import RequestStats from "./request/request-stats";

export default function HomeView() {
  const { user } = useAuth();

  return (
    <main className="space-y-8 w-full">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-bold tracking-tight">
            {user?.role === "citizen" ? "Миний" : "Хадлангийн"} хүсэлтүүд
          </h1>
          <p className="text-base text-muted-foreground">
            Та хадлан ашиглах хүсэлт илгээх болон хүсэлтийн явцыг хянах
            боломжтой
          </p>
        </div>
        <RoleGate allowedRoles={"citizen"}>
          <CreateRequestModal />
        </RoleGate>
      </div>

      <RoleGate allowedRoles={"admin"}>
        <div>
          <h2 className="text-xl font-semibold mb-4">Хүсэлтийн тоо</h2>
          <RequestStats />
        </div>
      </RoleGate>

      <RequestList />
    </main>
  );
}
