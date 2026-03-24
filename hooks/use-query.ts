import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./use-auth";

type QueryUtilParams = {
  queryKey: any[];
  endpoint: `/${string}`;
  params?: Record<string, string | null | undefined>;
  enabled?: boolean;
};

export function useQueryUtil<T>({
  queryKey,
  endpoint,
  params,
  enabled,
}: QueryUtilParams) {
  const { token } = useAuth();

  const cleanParams = params
    ? Object.fromEntries(
        Object.entries(params)
          .filter(
            ([_, value]) =>
              value !== null && value !== undefined && value !== ""
          )
          .map(([key, value]) => [key, String(value)])
      )
    : {};

  return useQuery({
    enabled:
      (params === undefined || Object.keys(cleanParams).length > 0) && enabled,
    queryKey,
    queryFn: async () => {
      let url = endpoint;
      if (Object.keys(cleanParams).length > 0) {
        const queryString = new URLSearchParams(
          cleanParams as Record<string, string>
        ).toString();
        url = `${endpoint}${queryString ? `?${queryString}` : ""}`;
      }

      const res = await api.get(url, {
        headers: {
          Authorization: `Bearer ${token || ""}`,
        },
      });
      return res.data as T;
    },
  });
}
