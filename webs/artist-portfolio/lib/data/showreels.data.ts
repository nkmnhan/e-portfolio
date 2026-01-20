// Showreels Mock Data
// Edit this file to update your demo reels

import type { Showreel } from "@/lib/types";
import { SAMPLE_VIDEOS } from "./videos";

export const showreels: Showreel[] = [
  {
    id: "reel-001",
    title: "Character Art Reel 2024",
    description: "Compilation of 3D character work from games and personal projects.",
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.abstract3d,
    duration: "2:30",
    year: 2024,
    featured: true,
    breakdown: [
      { timestamp: "0:00", title: "Cyber Ronin", role: "Character Artist" },
      { timestamp: "0:30", title: "Forest Spirit", role: "Creature Designer" },
      { timestamp: "1:00", title: "Post-Apocalyptic Survivor", role: "Character Artist" },
      { timestamp: "1:30", title: "Stylized Heroes", role: "Character Artist" },
      { timestamp: "2:00", title: "Creature Designs", role: "Creature Designer" },
    ],
  },
  {
    id: "reel-002",
    title: "Animation Demo Reel 2024",
    description: "Character and creature animation work from film and games.",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.nature,
    duration: "3:00",
    year: 2024,
    featured: true,
    breakdown: [
      { timestamp: "0:00", title: "Dragon Flight Cycle", role: "Lead Animator" },
      { timestamp: "0:45", title: "Character Performance", role: "Animator" },
      { timestamp: "1:30", title: "Combat Sequence", role: "Animation Director" },
      { timestamp: "2:15", title: "Creature Locomotion", role: "Creature Animator" },
    ],
  },
  {
    id: "reel-003",
    title: "Environment & VFX Reel",
    description: "Environment art and visual effects work.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.action,
    duration: "2:00",
    year: 2024,
    featured: false,
  },
];
