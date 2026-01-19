// Profile Service
// Data access layer for profile information
// Currently uses static mock data - can be swapped for API calls later

import { profile } from "@/lib/data";
import type { Profile, Skill, SkillCategory } from "@/lib/types";

/**
 * Get the artist profile
 */
export function getProfile(): Profile {
  return profile;
}

/**
 * Get skills filtered by category
 */
export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return profile.skills.filter((s) => s.category === category);
}

/**
 * Get expert-level skills only
 */
export function getExpertSkills(): Skill[] {
  return profile.skills.filter((s) => s.level === "expert");
}

/**
 * Get skills grouped by category
 */
export function getSkillsGroupedByCategory(): Record<SkillCategory, Skill[]> {
  const grouped: Record<SkillCategory, Skill[]> = {
    "3d": [],
    animation: [],
    concept: [],
    engine: [],
    general: [],
  };

  profile.skills.forEach((skill) => {
    grouped[skill.category].push(skill);
  });

  return grouped;
}

/**
 * Check if artist is available for work
 */
export function isAvailableForWork(): boolean {
  return profile.availableForWork;
}
