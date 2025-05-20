import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "isiksoft-app-space.fra1.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
