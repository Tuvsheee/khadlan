import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:8080",
      },
      {
        protocol: "https",
        hostname: "hadlan.tanusoft.mn",
      },
    ],
  },
};

export default nextConfig;
