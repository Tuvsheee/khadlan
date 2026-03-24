import { Card } from "@/components/ui/card";
import { UserCheck, UserPlus, UserX, Users, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQueryUtil } from "@/hooks/use-query";

interface StatItem {
  title: string;
  value: number;
  icon: LucideIcon;
  color: {
    from: string;
    to: string;
  };
}

interface StatsResponse {
  data: {
    totalUser: number;
    activeUser: number;
    inactiveUser: number;
  };
}

const UserStats = () => {
  const { data, isLoading } = useQueryUtil<StatsResponse>({
    endpoint: "/auth/statistics",
    queryKey: ["users-stats"],
  });

  const stats: StatItem[] = [
    {
      title: "Нийт хэрэглэгч",
      value: data?.data.totalUser || 0,
      icon: Users,
      color: {
        from: "from-blue-500",
        to: "to-blue-600",
      },
    },
    {
      title: "Идэвхтэй",
      value: data?.data.activeUser || 0,
      icon: UserCheck,
      color: {
        from: "from-green-500",
        to: "to-green-600",
      },
    },
    {
      title: "Идэвхгүй",
      value: data?.data.inactiveUser || 0,
      icon: UserX,
      color: {
        from: "from-red-500",
        to: "to-red-600",
      },
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="p-6 relative overflow-hidden group hover:shadow-lg transition-all duration-200"
        >
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity",
              stat.color.from.replace("from", "from") + "/10",
              "to-transparent"
            )}
          />
          <div className="relative flex items-center gap-4">
            <div
              className={cn(
                "p-3.5 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform bg-gradient-to-br",
                stat.color.from,
                stat.color.to,
                `shadow-${stat.color.from.split("-")[1]}-500/20`
              )}
            >
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {stat.title}
              </p>
              <div className="flex items-baseline gap-1">
                <h3 className="text-2xl font-bold">
                  {isLoading ? "-" : stat.value.toLocaleString()}
                </h3>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserStats;
