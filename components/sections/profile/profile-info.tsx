"use client";

import { Badge } from "@/components/ui/badge";
import { UserProfileData } from "@/types/user";
import {
  Mail,
  User2,
  Phone,
  CreditCard,
  RefreshCw,
  Clock4,
  Shield,
  MapPin,
  FileText,
  Camera,
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ROLES } from "@/constants/data";
import { cn } from "@/lib/utils";
import { STATUS_MAP } from "@/types/request";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProfileInfoProps {
  profile: UserProfileData;
  onEdit: () => void;
}

export function ProfileInfo({ profile, onEdit }: ProfileInfoProps) {
  return (
    <div className="space-y-8">
      {/* User Info Card */}
      <Card className="p-6">
        <div className="space-y-6">
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
            <Button variant="outline" onClick={onEdit}>
              Засах
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground">
                      И-мэйл
                    </span>
                    <span className="font-medium">{profile.username}</span>
                  </div>
                </div>
              </div>

              <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <User2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex gap-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-muted-foreground">
                        Овог
                      </span>
                      <span className="font-medium">
                        {profile.lastname || "Оруулаагүй"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-muted-foreground">
                        Нэр
                      </span>
                      <span className="font-medium">
                        {profile.firstname || "Оруулаагүй"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col items-start space-y-4">
                    {/* Profile Image Container */}
                    <div className="relative">
                      {profile?.profileImageUrl ? (
                        <div className="relative">
                          <Image
                            width={150}
                            height={150}
                            src={`${profile?.profileImageUrl}`}
                            alt="Profile"
                            className="w-40 h-40 rounded-full object-cover border-4 border-primary/20 shadow-md"
                          />
                          <div className="absolute bottom-0 right-0 bg-primary/20 rounded-full p-2 hover:bg-primary/30 transition-colors cursor-pointer">
                            <Camera className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-40 h-40 bg-primary/30 rounded-full flex items-center justify-center">
                          <User2 className="h-16 w-16 text-muted " />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground">
                      Регистрийн дугаар
                    </span>
                    <span className="font-medium">
                      {profile.regNumber || "Оруулаагүй"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground">
                      Утасны дугаар
                    </span>
                    <span className="font-medium">
                      {profile.phone || "Оруулаагүй"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-muted-foreground">
                      Хаяг
                    </span>
                    <span className="font-medium">
                      {profile.district} , {profile.subDistrict}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground border-t pt-4">
            <div className="flex items-start gap-2">
              <Clock4 className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-xs font-medium">Бүртгүүлсэн</span>
                <span className="text-sm">
                  {format(new Date(profile.createdAt), "yyyy.MM.dd")}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <RefreshCw className="h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-xs font-medium">Шинэчилсэн</span>
                <span className="text-sm">
                  {format(new Date(profile.updatedAt), "yyyy.MM.dd")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Requests Section */}
      {profile.requests.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold text-lg">Миний хүсэлтүүд</h3>
            </div>
            <Badge variant="outline" className="rounded-md">
              Нийт: {profile.requests.length}
            </Badge>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.requests.map((request) => (
              <Card
                key={request._id}
                className="relative overflow-hidden group hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 relative space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{request.landName}</h4>
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
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card className="py-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Хүсэлт олдсонгүй</h3>
            <p className="text-sm text-muted-foreground max-w-[300px] mt-2">
              Та хадлан талбай ашиглах хүсэлт илгээгээгүй байна
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}
