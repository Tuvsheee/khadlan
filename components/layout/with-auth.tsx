"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { MENU_ITEMS } from "@/constants/data";
import { useAuthStore } from "@/hooks/use-auth-store";

const login = "/auth/login";
const signup = "/auth/signup";

// Public routes that don't require authentication
const PUBLIC_ROUTES = [login, signup];

// Routes that all authenticated users can access
const ALLOWED_ROUTES = ["/profile", "/profile/edit"] as const;

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const routerNav = useRouter();
  const user = useAuthStore((state) => state.user);
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    if (isInitializing) return;

    if (!user) {
      axios.defaults.headers.common["Authorization"] = "";

      if (PUBLIC_ROUTES.includes(pathname)) {
        setLoading(false);
        return;
      }

      routerNav.push(login);
      return;
    }

    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

    if (PUBLIC_ROUTES.includes(pathname)) {
      setLoading(false);
      return;
    }

    const userRole = user.role as Role;
    const isAllowedRoute = ALLOWED_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(route + "/"),
    );

    if (isAllowedRoute) {
      setLoading(false);
      return;
    }

    const allowedMenuItems = MENU_ITEMS.filter((item) =>
      item.roles.includes(userRole),
    );

    const hasAccess = allowedMenuItems.some((item) => {
      if (pathname === item.url) return true;
      if (pathname.startsWith(item.url + "/")) return true;
      return false;
    });

    if (!hasAccess && pathname !== "/") {
      routerNav.push("/");
      return;
    }

    setLoading(false);
  }, [pathname, routerNav, user, isInitializing]);

  return loading ? (
    <div className="grid h-screen w-full place-items-center">
      <Loader2 className="animate-spin" />
    </div>
  ) : (
    children
  );
};

export default WithAuth;
