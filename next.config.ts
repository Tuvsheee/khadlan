import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hadlan.tanusoft.mn",
      },
    ],
  },
};

export default nextConfig;
