import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.khadlan.mn",
      },
    ],
  },
};

export default nextConfig;
