import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function clsxMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generate placeholder image URL from picsum.photos
 */
export function getPlaceholderImage(
  width: number,
  height: number,
  seed?: string | number
): string {
  const seedParam = seed ? `?random=${seed}` : "";
  return `https://picsum.photos/${width}/${height}${seedParam}`;
}

/**
 * Generate avatar placeholder from pravatar
 */
export function getAvatarPlaceholder(seed: string | number): string {
  return `https://i.pravatar.cc/150?u=${seed}`;
}

/**
 * Format duration string (e.g., "2:30" -> "2 min 30 sec")
 */
export function formatDuration(duration: string): string {
  const [minutes, seconds] = duration.split(":").map(Number);
  if (seconds) {
    return `${minutes}m ${seconds}s`;
  }
  return `${minutes}m`;
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
