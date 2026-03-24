"use client";

import { useQueryUtil } from "@/hooks/use-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { UserProfileData } from "@/types/user";
import {
  Calendar,
  Mail,
  User2,
  CreditCard,
  Shield,
  MapPin,
  Map,
} from "lucide-react";
import { format } from "date-fns";
import { ROLES } from "@/constants/data";
import { cn } from "@/lib/utils";
import ChangeStatus from "./change-status";
import { STATUS_MAP } from "@/types/request";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface UserDetailProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export default function UserDetail({
  isOpen,
  onClose,
  userId,
}: UserDetailProps) {
  const { data, isLoading } = useQueryUtil<{
    data: UserProfileData;
  }>({
    queryKey: ["user", userId],
    endpoint: `/auth/${userId}`,
  });

  const profile = data?.data;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Хэрэглэгчийн мэдээлэл</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[180px]" />
          </div>
        ) : profile ? (
          <div className="space-y-6">
            {/* User Status Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    profile.role === "admin"
                      ? "default"
                      : profile.role === "citizen"
                      ? "secondary"
                      : "outline"
                  }
                >
                  <Shield className="w-3 h-3 mr-1" />
                  {ROLES.find((role) => role.value === profile.role)?.text}
                </Badge>

                <Badge
                  variant="outline"
                  className={cn(
                    profile.status
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-700 border-red-200"
                  )}
                >
                  {profile.status ? "Идэвхтэй" : "Идэвхгүй"}
                </Badge>
              </div>

              <ChangeStatus
                isActive={profile.status}
                userId={userId}
                onClose={onClose}
              />
            </div>

            {/* User Info Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{profile.username}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <User2 className="h-4 w-4" />
                <span>
                  {profile.firstname} {profile.lastname}
                </span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                <span>{profile.regNumber || "Регистр оруулаагүй"}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Map className="h-4 w-4" />
                <span>
                  {profile.district} , {profile.subDistrict}
                </span>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">Бүртгүүлсэн</span>
                    <span className="text-sm">
                      {format(new Date(profile.createdAt), "yyyy.MM.dd")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium">Шинэчилсэн</span>
                    <span className="text-sm">
                      {format(new Date(profile.updatedAt), "yyyy.MM.dd")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Requests Section */}
            {profile.requests.length > 0 && (
              <>
                <Separator />
                <div className="space-y-3">
                  <h3 className="font-semibold">Хүсэлтүүд</h3>
                  <ScrollArea className="h-[300px] pr-4">
                    <div className="space-y-4">
                      {profile.requests.map((request) => (
                        <div
                          key={request._id}
                          className="p-3 rounded-lg border space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">
                              {request.landName}
                            </span>
                            <Badge
                              className={cn(
                                "px-2 py-0.5",
                                STATUS_MAP[request.status].color
                              )}
                            >
                              {STATUS_MAP[request.status].label}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{request.street}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Газрын хэмжээ: {request.landSize} га
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </>
            )}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
