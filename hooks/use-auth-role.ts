import { useAuth } from "./use-auth";

export const useAuthRole = () => {
  const { user } = useAuth();

  const hasRole = (allowedRoles: Role | Role[]) => {
    if (!user) return false;

    if (Array.isArray(allowedRoles)) {
      return allowedRoles.includes(user.role as Role);
    }

    return user.role === allowedRoles;
  };

  const isAdmin = () => hasRole("admin");
  const isUser = () => hasRole("user");
  const isCitizen = () => hasRole("citizen");
  const isAdminOrUser = () => hasRole(["admin", "user"]);

  return {
    hasRole,
    isAdmin,
    isUser,
    isCitizen,
    isAdminOrUser,
    role: user?.role as Role,
  };
};
