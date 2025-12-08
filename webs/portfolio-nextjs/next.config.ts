import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mindbender.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hailuoai.video",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hailuoai.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "walt-disney-studios.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default withFlowbiteReact(nextConfig);
