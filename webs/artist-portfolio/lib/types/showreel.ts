// Showreel Types - Video Demo Reels

export interface ShowreelBreakdown {
  timestamp: string;
  title: string;
  role: string;
}

export interface Showreel {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  year: number;
  featured: boolean;
  breakdown?: ShowreelBreakdown[];
}
