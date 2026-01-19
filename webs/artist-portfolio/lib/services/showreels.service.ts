// Showreels Service
// Data access layer for demo reels
// Currently uses static mock data - can be swapped for API calls later

import { showreels } from "@/lib/data";
import type { Showreel } from "@/lib/types";

/**
 * Get all showreels
 */
export function getShowreels(): Showreel[] {
  return showreels;
}

/**
 * Get featured showreels
 */
export function getFeaturedShowreels(): Showreel[] {
  return showreels.filter((s) => s.featured);
}

/**
 * Get a single showreel by ID
 */
export function getShowreelById(id: string): Showreel | undefined {
  return showreels.find((s) => s.id === id);
}

/**
 * Get total breakdown clips count across all showreels
 */
export function getTotalBreakdownClips(): number {
  return showreels.reduce((acc, s) => acc + (s.breakdown?.length || 0), 0);
}

/**
 * Get showreels stats
 */
export function getShowreelStats(): {
  total: number;
  featured: number;
  totalClips: number;
} {
  return {
    total: showreels.length,
    featured: showreels.filter((s) => s.featured).length,
    totalClips: getTotalBreakdownClips(),
  };
}
