// Services Index - Re-export all services
// Usage: import { getProfile, getProjects, getShowreels } from "@/lib/services"

// Profile Service
export { getProfile } from "./profile.service";

// Projects Service
export {
  getProjects,
  getCategories,
  getProjectBySlug,
  getFeaturedProjects,
  getAllProjectSlugs,
  getAdjacentProjects,
} from "./projects.service";

// Showreels Service
export {
  getShowreels,
  getFeaturedShowreels,
  getShowreelById,
} from "./showreels.service";
