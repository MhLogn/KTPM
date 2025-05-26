import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c5ys7u5tnj.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
