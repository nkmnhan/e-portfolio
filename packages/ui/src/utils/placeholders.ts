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
