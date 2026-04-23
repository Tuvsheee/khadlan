import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";
import { useQueryUtil } from "@/hooks/use-query";
import { UserProfileData } from "@/types/user";
import { LogOut, User, UserCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function UserNav() {
  const { user, logout } = useAuth();

  const { data: profileResponse } = useQueryUtil<{ data: UserProfileData }>({
    queryKey: ["profile", user?.userId],
    endpoint: `/auth/${user?.userId}`,
    enabled: !!user?.userId,
  });

  const profile = profileResponse?.data;
  const profileName = [profile?.lastname, profile?.firstname]
    .filter(Boolean)
    .join(" ")
    .trim();

  const authName = [user?.lastName, user?.firstName]
    .filter(Boolean)
    .join(" ")
    .trim();

  const displayName =
    profileName || authName || user?.name || user?.username || "Хэрэглэгч";

  const primaryIdentity = user?.email || user?.username || "";
  const subtitle =
    primaryIdentity && primaryIdentity !== displayName
      ? primaryIdentity
      : user?.role || "";

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" asChild>
          <Link href="/auth/signup">Бүртгүүлэх</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/login">Нэвтрэх</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto rounded-full px-2 py-1.5 hover:bg-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="hidden text-right leading-tight md:block">
              <p className="text-sm font-semibold text-[#1d4ed8]">
                {displayName}
              </p>
              <p className="text-[11px] text-[#6b7280]">{subtitle}</p>
            </div>
            <Avatar className="h-9 w-9 border border-white/80 shadow-sm">
              <AvatarImage src={`/images/profile-default.svg`} />
              <AvatarFallback className="bg-white">
                <UserCircle className="h-5 w-5 text-muted-foreground" />
              </AvatarFallback>
            </Avatar>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {subtitle}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/profile" className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Профайл</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-red-600"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Гарах</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
