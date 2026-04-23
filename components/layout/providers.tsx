"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as SonnerToaster } from "sonner";
import WithAuth from "./with-auth";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60, // 1 minute
          },
        },
      }),
  );
  return (
    <>
      <SonnerToaster
        position="top-center"
        richColors
        duration={3000}
        theme="light"
      />
      <QueryClientProvider client={client}>
        <WithAuth>{children}</WithAuth>
      </QueryClientProvider>
    </>
  );
}
