import { useAuth } from "./use-auth";

export const useAuthRole = () => {
  const { user } = useAuth();

  const hasRole = (allowedRoles: Role | Role[]) => {
    if (!user) return false;

    const requestedRoles = Array.isArray(allowedRoles)
      ? allowedRoles
      : [allowedRoles];

    if (user.role === "superadmin" && requestedRoles.includes("admin")) {
      return true;
    }

    return requestedRoles.includes(user.role as Role);
  };

  const isAdmin = () => hasRole("admin");
  const isSuperAdmin = () => hasRole("superadmin");
  const isUser = () => hasRole("user");
  const isCitizen = () => hasRole("citizen");
  const isAdminOrUser = () => hasRole(["admin", "superadmin", "user"]);

  return {
    hasRole,
    isAdmin,
    isSuperAdmin,
    isUser,
    isCitizen,
    isAdminOrUser,
    role: user?.role as Role,
  };
};
