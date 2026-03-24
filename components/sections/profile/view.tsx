"use client";

import { useAuth } from "@/hooks/use-auth";
import { useQueryUtil } from "@/hooks/use-query";
import { UserProfileData } from "@/types/user";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ProfileInfo } from "./profile-info";
import { UpdateProfile } from "./update-profile";
import { ChangePassword } from "./change-password";

export default function ProfileView() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const { data, isLoading } = useQueryUtil<{
    data: UserProfileData;
  }>({
    queryKey: ["profile"],
    endpoint: `/auth/${user?.userId}`,
    enabled: !!user?.userId,
  });

  const profile = data?.data;

  return (
    <main className="space-y-8 w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between gap-y-2 md:gap-y-0 md:items-center border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Профайл</h1>
          <p className="text-muted-foreground mt-1">
            Хувийн мэдээлэл болон нууц үг солих
          </p>
        </div>
        {!isChangingPassword && !isEditing && (
          <Button
            variant="outline"
            onClick={() => {
              setIsChangingPassword(true);
            }}
          >
            Нууц үг солих
          </Button>
        )}
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[180px]" />
              </div>
            ) : profile ? (
              isChangingPassword ? (
                <ChangePassword onCancel={() => setIsChangingPassword(false)} />
              ) : isEditing ? (
                <UpdateProfile
                  profile={profile}
                  onCancel={() => setIsEditing(false)}
                />
              ) : (
                <ProfileInfo
                  profile={profile}
                  onEdit={() => setIsEditing(true)}
                />
              )
            ) : null}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
