// Profile Service
// Data access layer for profile information
// Currently uses static mock data - can be swapped for API calls later

import { profile } from "@/lib/data";
import type { Profile } from "@/lib/types";

/**
 * Get the artist profile
 */
export function getProfile(): Profile {
  return profile;
}
