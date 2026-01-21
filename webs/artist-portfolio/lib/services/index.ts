// Services Index - Re-export all services
// Usage: import { getProfile, getProjects, getShowreels } from "@/lib/services"

// Profile Service
export {
  getProfile,
  getSkillsByCategory,
  getExpertSkills,
  getSkillsGroupedByCategory,
  isAvailableForWork,
} from "./profile.service";

// Projects Service
export {
  getProjects,
  getCategories,
  getProjectBySlug,
  getFeaturedProjects,
  getProjectsByCategory,
  getAllTags,
  getAllTools,
  getAllProjectSlugs,
  getProjectCountByCategory,
  getAdjacentProjects,
} from "./projects.service";

// Showreels Service
export {
  getShowreels,
  getFeaturedShowreels,
  getShowreelById,
  getTotalBreakdownClips,
  getShowreelStats,
} from "./showreels.service";
