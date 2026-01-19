// Types Index - Re-export all types for clean imports
// Usage: import { Profile, Project, Showreel } from "@/lib/types"

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
} from "./profile";

export type {
  Project,
  ProjectCategory,
  Category,
  MediaItem,
  ImageMedia,
  VideoMedia,
  CarouselMedia,
  Model3DMedia,
  EmbedMedia,
} from "./project";

export type {
  Showreel,
  ShowreelBreakdown,
} from "./showreel";
