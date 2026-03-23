import path from "node:path";
import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const monorepoRoot = path.resolve(__dirname, "../..");

const nextConfig: NextConfig = {
  transpilePackages: ['three', '@eportfolio/ui', '@eportfolio/theme'],
  outputFileTracingRoot: monorepoRoot,
  turbopack: {
    root: monorepoRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
  experimental: {
    optimizePackageImports: ["@google/model-viewer", "framer-motion"],
  },
};

// Conditionally wrap with bundle analyzer
const config = process.env.ANALYZE === "true"
  ? require("@next/bundle-analyzer")({
      enabled: true,
    })(withFlowbiteReact(nextConfig))
  : withFlowbiteReact(nextConfig);

export default config;
