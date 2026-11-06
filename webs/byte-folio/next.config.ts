import path from "node:path";
import type { NextConfig } from "next";

const monorepoRoot = path.resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons", "three", "@react-three/drei"],
  },
  compress: true,
  poweredByHeader: false,
  transpilePackages: ["@eportfolio/ui", "@eportfolio/theme"],
  outputFileTracingRoot: monorepoRoot,
  turbopack: {
    root: monorepoRoot,
  },
  // Keep the optimizer to the one avatar and a few variants, so requests can't use up the
  // transformation quota. If the `?v=` in lib/data/about.ts changes, update `search` too.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/49507410",
        search: "?v=4",
      },
    ],
    deviceSizes: [640],
    imageSizes: [256, 384],
    qualities: [75],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;
