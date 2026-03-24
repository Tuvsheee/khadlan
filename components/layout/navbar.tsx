"use client";

import { MENU_ITEMS } from "@/constants/data";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
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

  const filteredMenuItems = MENU_ITEMS.filter((item) =>
    item.roles.includes(user?.role as any)
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
                "h-9 px-3 gap-1.5 font-medium relative group",
                isActive && "text-primary",
                "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                isActive && "after:scale-x-100"
              )}
            >
              {item.text}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  "group-data-[state=open]:rotate-180"
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
                  pathname === subItem.url && "bg-primary/5"
                )}
              >
                <a
                  href={subItem.url}
                  className={cn(
                    "w-full font-medium flex items-center gap-2 text-sm",
                    pathname === subItem.url
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-200",
                      pathname === subItem.url
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
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
          "relative px-3 py-1.5 font-medium transition-colors duration-200",
          "after:absolute after:bottom-0 after:left-2 after:right-2 after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform hover:after:scale-x-100",
          pathname === item.url
            ? "text-primary after:scale-x-100"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {item.text}
      </Link>
    );
  };

  return (
    <div className="border-b fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex px-3 justify-between md:px-0 md:justify-start h-16 items-center container mx-auto">
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
                                : "text-muted-foreground hover:text-foreground"
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
                        : "text-muted-foreground hover:text-foreground"
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
          href="/"
          className="font-semibold text-lg tracking-tight hover:text-primary transition-colors mr-6"
        >
          Khadlan.mn
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 mx-6 flex-1">
          {filteredMenuItems.map(renderMenuItem)}
        </nav>

        {/* User Navigation */}
        <UserNav />
      </div>
    </div>
  );
}
