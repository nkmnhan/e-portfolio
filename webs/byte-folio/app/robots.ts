import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Never disallow /_next/ — it serves the CSS/JS/images Google needs to render pages
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
