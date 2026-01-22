import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 * Handles conditional classes and prevents conflicts
 */
export function clsxMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
