// Showreels Mock Data
// Edit this file to update your demo reels
// All video URLs and image URLs are valid and publicly accessible

import type { Showreel } from "@/lib/types";
import { SAMPLE_VIDEOS } from "./videos";

export const showreels: Showreel[] = [
  {
    id: "reel-001",
    title: "Character Art Reel 2024",
    description: "Compilation of 3D character work from games and personal projects. Featuring stylized and realistic character designs across multiple genres.",
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.bigBuck,
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
    description: "Character and creature animation work from film and games. Showcasing performance animation, combat sequences, and creature locomotion.",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.sintel,
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
    description: "Environment art and visual effects work from AAA games and indie projects. Featuring real-time rendering and cinematic effects.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.tearsOfSteel,
    duration: "2:00",
    year: 2024,
    featured: false,
    breakdown: [
      { timestamp: "0:00", title: "Neon District", role: "Environment Artist" },
      { timestamp: "0:40", title: "Elemental Magic VFX", role: "VFX Artist" },
      { timestamp: "1:20", title: "Atmospheric Effects", role: "Technical Artist" },
    ],
  },
  {
    id: "reel-004",
    title: "Concept Art Portfolio 2024",
    description: "Concept art exploration for games and films. Environment designs, character concepts, and visual development work.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.elephantsDream,
    duration: "1:45",
    year: 2024,
    featured: false,
    breakdown: [
      { timestamp: "0:00", title: "Lost Atlantis", role: "Concept Artist" },
      { timestamp: "0:35", title: "Mech Warriors", role: "Vehicle Designer" },
      { timestamp: "1:10", title: "Fantasy Landscapes", role: "Environment Concept Artist" },
    ],
  },
  {
    id: "reel-005",
    title: "Film VFX Breakdown 2023-2024",
    description: "Visual effects work for short films and feature productions. Before/after compositing, creature work, and environmental VFX.",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
    videoUrl: SAMPLE_VIDEOS.cinematic,
    duration: "3:30",
    year: 2024,
    featured: true,
    breakdown: [
      { timestamp: "0:00", title: "The Last Garden", role: "VFX Supervisor" },
      { timestamp: "1:00", title: "Echoes of Tomorrow", role: "Creature TD" },
      { timestamp: "2:00", title: "Commercial Work", role: "Compositor" },
      { timestamp: "2:45", title: "Matte Painting", role: "Environment Artist" },
    ],
  },
];
