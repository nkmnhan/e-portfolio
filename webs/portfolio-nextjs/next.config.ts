import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mindbender.com",
        port: "",
        pathname: "/content/images/**",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
