"use client";

import { useAuthRole } from "@/hooks/use-auth-role";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: Role | Role[];
  fallback?: React.ReactNode;
}

export const RoleGate = ({
  children,
  allowedRoles,
  fallback = null,
}: RoleGateProps) => {
  const { hasRole } = useAuthRole();

  if (!hasRole(allowedRoles)) {
    return fallback;
  }

  return <>{children}</>;
};
