// Projects Service
// Data access layer for portfolio projects
// Currently uses static mock data - can be swapped for API calls later

import { projects, categories } from "@/lib/data";
import type { Project, ProjectCategory, Category } from "@/lib/types";

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
 * Get projects by category
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

/**
 * Get all unique tags across projects
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

/**
 * Get all unique tools across projects
 */
export function getAllTools(): string[] {
  const tools = new Set<string>();
  projects.forEach((p) => p.tools.forEach((t) => tools.add(t)));
  return Array.from(tools).sort();
}

/**
 * Get all project slugs (for static generation)
 */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<ProjectCategory, number> {
  const counts = {} as Record<ProjectCategory, number>;

  categories.forEach((cat) => {
    counts[cat.id] = projects.filter((p) => p.category === cat.id).length;
  });

  return counts;
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
