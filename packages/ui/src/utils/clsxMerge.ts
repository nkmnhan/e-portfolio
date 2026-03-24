import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function clsxMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
