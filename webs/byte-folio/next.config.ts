import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@eportfolio/ui", "@eportfolio/theme"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
