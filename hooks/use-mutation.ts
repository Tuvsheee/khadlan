import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "./use-auth";

type HttpMethod = "post" | "put" | "delete" | "patch";
type ContentType = "application/json" | "multipart/form-data";
// ssjsjsjsjjsj
export function useMutationUtil<TData, TInput>({
  endpoint,
  method = "post",
  queryKey,
  successMessage = null,
  onSuccessCallback = null,
  contentType = "application/json",
}: {
  endpoint: `/${string}`;
  method?: HttpMethod;
  queryKey: any[];
  successMessage?: string | null;
  onSuccessCallback?: ((res: TData) => void) | null;
  contentType?: ContentType;
}) {
  const queryClient = useQueryClient();
  const { token } = useAuth();

  return useMutation<TData, Error, TInput>({
    mutationFn: async (data: TInput) => {
      const headers: Record<string, string> = {
        Authorization: `Bearer ${token}`,
      };

      if (contentType !== "multipart/form-data") {
        headers["Content-Type"] = contentType;
      }

      const config: AxiosRequestConfig = {
        headers,
      };

      if (data instanceof FormData) {
        delete config.headers?.["Content-Type"];
      }

      let response;

      if (method === "delete") {
        response = await api.delete(endpoint, {
          headers: config.headers,
          data: data,
        });
      } else {
        response = await api[method](endpoint, data, config);
      }

      return response.data as TData;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey });
      if (successMessage) toast.success(successMessage);
      if (onSuccessCallback) onSuccessCallback(res);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Something went wrong");
    },
  });
}
