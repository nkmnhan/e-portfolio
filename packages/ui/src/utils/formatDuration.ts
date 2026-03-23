/**
 * Format duration string (e.g., "2:30" -> "2m 30s")
 */
export function formatDuration(duration: string): string {
  const [minutes, seconds] = duration.split(":").map(Number);
  if (seconds) {
    return `${minutes}m ${seconds}s`;
  }
  return `${minutes}m`;
}
