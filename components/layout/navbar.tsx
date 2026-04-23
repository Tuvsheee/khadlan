"use client";

import { MENU_ITEMS } from "@/constants/data";
import { useAuth } from "@/hooks/use-auth";
import { useQueryUtil } from "@/hooks/use-query";
import { HomeContentResponse } from "@/types/home";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { UserNav } from "./user-nav";

export default function Navbar() {
  const { user } = useAuth();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { data: homeData } = useQueryUtil<HomeContentResponse>({
    queryKey: ["home-content"],
    endpoint: "/home/content",
    enabled: true,
  });
  const logoUrl = homeData?.data?.logoUrl;

  const filteredMenuItems = MENU_ITEMS.filter((item) =>
    item.roles.includes(user?.role as any),
  );

  const renderMenuItem = (item: (typeof MENU_ITEMS)[0]) => {
    if (item.type === "dropdown") {
      const isActive = item.items?.some((subItem) => subItem.url === pathname);

      return (
        <DropdownMenu key={item.text}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "group h-9 gap-1.5 px-3 text-sm font-medium",
                isActive
                  ? "text-[#1f2937]"
                  : "text-[#6b7280] hover:text-[#374151]",
              )}
            >
              {item.text}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  "group-data-[state=open]:rotate-180",
                )}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-56 p-1.5 animate-in fade-in-0 zoom-in-95"
          >
            {item.items?.map((subItem) => (
              <DropdownMenuItem
                key={subItem.url}
                asChild
                className={cn(
                  "py-2.5 px-3 rounded-md cursor-pointer transition-colors duration-200",
                  "focus:bg-accent focus:text-accent-foreground",
                  "data-[highlighted]:bg-accent/50",
                  pathname === subItem.url && "bg-primary/5",
                )}
              >
                <a
                  href={subItem.url}
                  className={cn(
                    "w-full font-medium flex items-center gap-2 text-sm",
                    pathname === subItem.url
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-200",
                      pathname === subItem.url
                        ? "bg-primary"
                        : "bg-muted-foreground/30",
                    )}
                  />
                  {subItem.text}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.url}
        href={item.url!}
        className={cn(
          "px-3 py-1.5 text-sm font-medium transition-colors duration-200",
          pathname === item.url
            ? "text-[#1f2937]"
            : "text-[#6b7280] hover:text-[#374151]",
        )}
      >
        {item.text}
      </Link>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#e5e7eb] bg-[#f3f4f6]">
      <div className="mx-auto flex h-[74px] w-full max-w-[1280px] items-center justify-between px-3 md:px-6">
        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTitle className="sr-only">Mobile Menu Button</SheetTitle>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
            <nav className="flex flex-col space-y-6">
              {filteredMenuItems.map((item) => {
                if (item.type === "dropdown") {
                  return (
                    <div key={item.text} className="space-y-3">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
                        {item.text}
                      </h4>
                      <div className="pl-1 space-y-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.url}
                            href={subItem.url}
                            className={cn(
                              "block text-sm py-1 transition-colors duration-200",
                              pathname === subItem.url
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.url}
                    href={item.url!}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      pathname === item.url
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>

        <Link
          href="/dashboard"
          className="mr-6 flex shrink-0 items-center gap-2"
        >
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt="Khadlan.mn logo"
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
            />
          ) : (
            <>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Settings className="h-3.5 w-3.5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-emerald-700 transition-colors">
                Khadlan.mn
              </span>
            </>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-6 hidden flex-1 items-center justify-center gap-4 lg:flex">
          {filteredMenuItems.map(renderMenuItem)}
        </nav>

        {/* Settings Button for SuperAdmin */}
        {user?.role === "superadmin" && (
          <Link
            href="/"
            className={cn(
              "mr-3 hidden items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 lg:flex",
              pathname === "/"
                ? "bg-emerald-100 text-emerald-700"
                : "text-[#6b7280] hover:bg-white/60 hover:text-[#374151]",
            )}
          >
            <Settings className="h-4 w-4" />
            <span>Тохиргоо</span>
          </Link>
        )}

        {/* User Navigation */}
        <UserNav />
      </div>
    </div>
  );
}
