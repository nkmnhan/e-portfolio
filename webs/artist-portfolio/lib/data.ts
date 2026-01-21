/**
 * @deprecated This file is deprecated and will be removed in a future version.
 *
 * Please update your imports to use the new module structure:
 *
 * - Types: import { Profile, Project, Showreel } from "@/lib/types"
 * - Data: import { profile, projects, showreels } from "@/lib/data" (points to lib/data/index.ts)
 * - Services: import { getProfile, getProjects, getShowreels } from "@/lib/services"
 *
 * The new structure provides:
 * - Better separation of concerns
 * - Cleaner imports
 * - Easier to swap data sources in the future
 */

// Re-export types for backwards compatibility
export type {
  Profile,
  Skill,
  SkillCategory,
  SkillLevel,
  Experience,
  Education,
  Award,
  SocialLinks,
  Specialization,
  Project,
  ProjectCategory,
  Category,
  MediaItem,
  ImageMedia,
  VideoMedia,
  CarouselMedia,
  Model3DMedia,
  EmbedMedia,
  Showreel,
  ShowreelBreakdown,
} from "./types";

// Re-export data for backwards compatibility
export { profile, projects, showreels, categories } from "./data/index";

// Re-export service functions for backwards compatibility
export {
  getProjectBySlug,
  getFeaturedProjects,
  getProjectsByCategory,
  getFeaturedShowreels,
  getAllTags,
  getAllTools,
} from "./services";
