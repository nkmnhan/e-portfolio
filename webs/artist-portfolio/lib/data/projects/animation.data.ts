// Animation Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const animationProjects: Project[] = [
  {
    id: "proj-003",
    title: "Dragon Flight Cycle",
    slug: "dragon-flight-cycle",
    category: "animation",
    description: "Complete flight cycle animation with takeoff, soar, dive, and landing sequences.",
    longDescription: `A comprehensive dragon flight study covering all phases of aerial locomotion. This project focused on believable wing mechanics and weight distribution during flight.`,
    thumbnail: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.nature,
    thumbnailAspectRatio: 1.5,
    media: [
      {
        type: "video",
        url: SAMPLE_VIDEOS.nature,
        poster: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1200&h=800&fit=crop",
        caption: "Full Flight Cycle Animation",
        autoplay: false,
        loop: true,
      },
      {
        type: "embed",
        platform: "vimeo",
        embedId: "123456789",
        poster: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&h=450&fit=crop",
        caption: "Breakdown Reel",
      },
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1200&h=600&fit=crop", alt: "Takeoff Phase", caption: "Takeoff - Key Poses" },
          { url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=600&fit=crop", alt: "Soar Phase", caption: "Soar - Wing Mechanics" },
          { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop", alt: "Dive Phase", caption: "Dive - Weight Shift" },
        ],
      },
    ],
    tools: ["Maya", "MotionBuilder", "After Effects"],
    tags: ["animation", "creature", "flight-cycle", "dragon", "vfx"],
    client: "DreamWorks Animation",
    year: 2024,
    featured: true,
    order: 3,
  },
  {
    id: "proj-004",
    title: "Character Performance Test",
    slug: "character-performance",
    category: "animation",
    description: "Emotional acting piece showcasing subtle facial expressions and body language.",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.animation,
    media: [
      {
        type: "video",
        url: SAMPLE_VIDEOS.animation,
        poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=800&fit=crop",
        caption: "Character Performance Animation",
        autoplay: false,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=600&fit=crop",
        alt: "Expression Sheet",
        caption: "Facial Expression Reference Sheet",
      },
    ],
    tools: ["Maya", "Facial Motion Capture", "After Effects"],
    tags: ["animation", "performance", "facial", "acting", "emotion"],
    client: "Animation Demo",
    year: 2024,
    featured: false,
    order: 4,
  },
];
