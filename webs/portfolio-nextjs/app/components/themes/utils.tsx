import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

/**
 * Combines class names using clsx and merges Tailwind classes using tailwind-merge.
 * @param classes - Class values to combine and merge.
 * @returns A single string of merged class names.
 */
export function clsxMerge(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}