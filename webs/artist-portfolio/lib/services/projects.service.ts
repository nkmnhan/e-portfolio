// Projects Service
// Data access layer for portfolio projects
// Currently uses static mock data - can be swapped for API calls later

import { projects, categories } from "@/lib/data";
import type { Project, Category } from "@/lib/types";

/**
 * Get all projects
 */
export function getProjects(): Project[] {
  return projects;
}

/**
 * Get all categories
 */
export function getCategories(): Category[] {
  return categories;
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Get featured projects (sorted by order)
 */
export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all project slugs (for static generation)
 */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/**
 * Get adjacent projects for navigation (prev/next)
 */
export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}
