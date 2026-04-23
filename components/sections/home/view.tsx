"use client";
import RequestList from "./request/request-list";
import CreateRequestModal from "./request/create-request";
import { RoleGate } from "@/components/common/auth/role-gate";
import { useAuth } from "@/hooks/use-auth";

export default function HomeView() {
  const { user } = useAuth();

  return (
    <main className="space-y-8 w-full container mx-auto min-h-[520px] py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {user?.role === "citizen" && (
          <div className="space-y-1.5">
            <h1 className="text-3xl font-bold tracking-tight">
              Миний хүсэлтүүд
            </h1>
            <p className="text-base text-muted-foreground">
              Та хадлан ашиглах хүсэлт илгээх болон хүсэлтийн явцыг хянах
              боломжтой
            </p>
          </div>
        )}
        <RoleGate allowedRoles={"citizen"}>
          <CreateRequestModal />
        </RoleGate>
      </div>

      <RequestList />
    </main>
  );
}
