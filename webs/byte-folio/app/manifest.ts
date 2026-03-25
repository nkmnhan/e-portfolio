import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tony Nguyen (Nhan Nguyen) — Senior Fullstack Developer",
    short_name: "Tony Nguyen",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#020614",
    theme_color: "#43e0f7",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
