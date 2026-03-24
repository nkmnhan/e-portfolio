import path from "node:path";
import type { NextConfig } from "next";

const monorepoRoot = path.resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  compress: true,
  poweredByHeader: false,
  transpilePackages: ["@eportfolio/ui", "@eportfolio/theme"],
  outputFileTracingRoot: monorepoRoot,
  turbopack: {
    root: monorepoRoot,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
