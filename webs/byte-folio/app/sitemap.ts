import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site-config";
import { projectsData } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const featuredProjects = projectsData
    .filter((p) => p.isFeatured)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const secondaryProjects = projectsData
    .filter((p) => !p.isFeatured)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...featuredProjects,
    ...secondaryProjects,
  ];
}
