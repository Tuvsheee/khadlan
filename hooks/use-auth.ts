import { useAuthStore } from "@/hooks/use-auth-store";

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);

  return { user, token, logout };
}
