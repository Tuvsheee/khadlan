import { create } from "zustand";
import { api } from "@/lib/api";

type AuthUser = {
  userId: string;
  username: string;
  role: Role;
  token: string;
  [key: string]: any;
};

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isInitializing: boolean;
  initializeAuth: () => void;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  setAuth: (user: AuthUser | null) => void;
}

const STORAGE_KEY = "khadlan_auth";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isInitializing: true,
  initializeAuth: () => {
    if (typeof window === "undefined") {
      set({ isInitializing: false });
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as { user: AuthUser; token: string };
        set({ user: parsed.user, token: parsed.token, isInitializing: false });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
        set({ user: null, token: null, isInitializing: false });
      }
    } else {
      set({ user: null, token: null, isInitializing: false });
    }
  },
  login: async (username: string, password: string) => {
    const response = await api.post("/auth/login", {
      username,
      password,
    });

    if (!response.data?.success) {
      throw new Error(response.data?.message || "Authentication failed");
    }

    const { token, user } = response.data.data;
    const authUser: AuthUser = {
      ...user,
      token,
    };

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ user: authUser, token }),
      );
    }

    set({ user: authUser, token });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    set({ user: null, token: null });
  },
  setAuth: (user) => {
    if (!user) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(STORAGE_KEY);
      }
      set({ user: null, token: null });
      return;
    }

    const token = user.token;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    }

    set({ user, token });
  },
}));
