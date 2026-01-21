// Concept Art Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const conceptArtProjects: Project[] = [
  {
    id: "proj-005",
    title: "Lost Atlantis",
    slug: "lost-atlantis",
    category: "concept-art",
    description: "Environment concept series depicting an ancient underwater civilization.",
    longDescription: `A series of environment concepts exploring the discovery of Atlantis. The goal was to blend ancient Greek architecture with bioluminescent deep-sea elements, creating a sense of wonder and mystery.`,
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    thumbnailType: "image",
    thumbnailAspectRatio: 1.78,
    media: [
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=800&fit=crop", alt: "Atlantis Entrance", caption: "The Grand Entrance" },
          { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&h=800&fit=crop", alt: "Throne Room", caption: "The Throne Room" },
          { url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1400&h=800&fit=crop", alt: "Temple District", caption: "Temple District" },
          { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=800&fit=crop", alt: "Gardens", caption: "Bioluminescent Gardens" },
        ],
        autoplay: true,
        interval: 5000,
      },
      {
        type: "video",
        url: SAMPLE_VIDEOS.cinematic,
        poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
        caption: "Concept Art Process Timelapse",
      },
    ],
    tools: ["Photoshop", "Blender", "KeyShot"],
    tags: ["concept-art", "environment", "underwater", "fantasy", "architecture"],
    client: "Ubisoft - Assassin's Creed",
    year: 2024,
    featured: true,
    order: 5,
  },
  {
    id: "proj-006",
    title: "Mech Warriors",
    slug: "mech-warriors",
    category: "concept-art",
    description: "Industrial mech designs for a sci-fi strategy game with functional silhouettes.",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=600&fit=crop",
    thumbnailType: "image",
    thumbnailAspectRatio: 1.0,
    media: [
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop", alt: "Heavy Mech", caption: "Heavy Assault Class" },
          { url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop", alt: "Scout Mech", caption: "Scout Class" },
          { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop", alt: "Support Mech", caption: "Support Class" },
        ],
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1400&h=900&fit=crop",
        alt: "Mech Lineup",
        caption: "Full Mech Lineup - Size Comparison",
      },
    ],
    tools: ["Photoshop", "Blender", "KeyShot"],
    tags: ["concept-art", "mech", "vehicle", "sci-fi", "industrial"],
    client: "Personal Project",
    year: 2024,
    featured: true,
    order: 6,
  },
];
