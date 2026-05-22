"use client";
import { useMemo } from "react";
import RequestList from "./request/request-list";
import CreateRequestModal from "./request/create-request";
import { RoleGate } from "@/components/common/auth/role-gate";
import { useAuth } from "@/hooks/use-auth";
import { useQueryUtil } from "@/hooks/use-query";
import { MapPin } from "lucide-react";

interface BagKhorooItem {
  _id: string;
  name: string;
  subDistrictId: string;
}

// Navbar is fixed at 74px height — map starts below it
const NAVBAR_HEIGHT = 74;

function MapBackground({ bagKhorooId }: { bagKhorooId?: string | null }) {
  const { data } = useQueryUtil<{ data: BagKhorooItem[] }>({
    queryKey: ["all-bagkhoroos"],
    endpoint: "/district/bagKhoroo",
    enabled: !!bagKhorooId,
  });

  const bagKhoroo = useMemo(
    () =>
      bagKhorooId && data?.data
        ? data.data.find((b) => String(b._id) === String(bagKhorooId))
        : null,
    [data, bagKhorooId],
  );

  const mapQuery = bagKhoroo
    ? encodeURIComponent(`${bagKhoroo.name} Монгол`)
    : encodeURIComponent("Монгол улс");

  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&output=embed&z=12&t=k`;

  return (
    <>
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Газрын зураг"
      />
      {/* Location badge */}
      {bagKhoroo && (
        <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur-sm px-3 py-1.5 shadow-sm text-sm font-medium text-gray-800">
          <MapPin className="h-3.5 w-3.5 text-green-600 shrink-0" />
          {bagKhoroo.name}
        </div>
      )}
    </>
  );
}

export default function HomeView() {
  const { user } = useAuth();
  const showMap = user?.role === "user" || user?.role === "citizen";

  return (
    <>
      {/* Full-viewport map background, sits below navbar */}
      {showMap && (
        <div
          className="fixed left-0 right-0 bottom-0 -z-10 overflow-hidden"
          style={{ top: NAVBAR_HEIGHT }}
        >
          <MapBackground bagKhorooId={user?.bagKhorooId} />
        </div>
      )}

      <main className="space-y-6 w-full container mx-auto min-h-[520px] py-8">
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
    </>
  );
}
