"use client";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { MENU_ITEMS } from "@/constants/data";

const login = "/auth/login";
const signup = "/auth/signup";

// Public routes that don't require authentication
const PUBLIC_ROUTES = [login, signup];

// Routes that all authenticated users can access
const ALLOWED_ROUTES = ["/profile", "/profile/edit"] as const;

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const routerNav = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        axios.defaults.headers.common["Authorization"] = "";

        // Check if current path is a public route
        if (PUBLIC_ROUTES.includes(pathname)) {
          setLoading(false);
          return;
        }

        // Redirect to login for protected routes
        routerNav.push(login);
      } else {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${session?.user?.token}`;

        // Check role-based access
        const userRole = session.user?.role as Role;

        // Skip auth check for public routes
        if (PUBLIC_ROUTES.includes(pathname)) {
          setLoading(false);
          return;
        }

        // Check if the current path is in allowed routes
        const isAllowedRoute = ALLOWED_ROUTES.some(
          (route) => pathname === route || pathname.startsWith(route + "/")
        );

        // Allow access to permitted routes for all authenticated users
        if (isAllowedRoute) {
          setLoading(false);
          return;
        }

        // Find all menu items the user has access to
        const allowedMenuItems = MENU_ITEMS.filter((item) =>
          item.roles.includes(userRole)
        );

        // Check if the current path is allowed for the user
        const hasAccess = allowedMenuItems.some((item) => {
          // For exact match like /users
          if (pathname === item.url) return true;
          // For nested routes like /users/123
          if (pathname.startsWith(item.url + "/")) return true;
          return false;
        });

        // If user doesn't have access to this path, redirect to home
        if (!hasAccess && pathname !== "/") {
          routerNav.push("/");
          return;
        }

        setLoading(false);
      }
    });
  }, [pathname, routerNav]);

  return loading ? (
    <div className="grid h-screen w-full place-items-center">
      <Loader2 className="animate-spin" />
    </div>
  ) : (
    children
  );
};

export default WithAuth;
