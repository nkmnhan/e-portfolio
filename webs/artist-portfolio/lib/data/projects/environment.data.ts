// Environment Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const environmentProjects: Project[] = [
  {
    id: "proj-007",
    title: "Neon District",
    slug: "neon-district",
    category: "environment",
    description: "Cyberpunk city environment built in Unreal Engine 5 with ray-traced lighting.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.scifi,
    media: [
      {
        type: "video",
        url: SAMPLE_VIDEOS.scifi,
        poster: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&h=800&fit=crop",
        caption: "Environment Flythrough",
        autoplay: false,
        loop: true,
      },
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1400&h=800&fit=crop", alt: "Street Level", caption: "Street Level - Night" },
          { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&h=800&fit=crop", alt: "Rooftop", caption: "Rooftop View" },
          { url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1400&h=800&fit=crop", alt: "Alley", caption: "Back Alley" },
        ],
      },
      {
        type: "3d-model",
        modelUrl: "/models/neon-district.glb",
        poster: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&h=600&fit=crop",
        caption: "Explore the Environment",
        settings: {
          autoRotate: false,
          background: "#0a0a0a",
        },
      },
    ],
    tools: ["Unreal Engine 5", "3ds Max", "Substance Designer", "World Machine"],
    tags: ["environment", "cyberpunk", "game-ready", "UE5", "raytracing"],
    client: "AAA Game Studio",
    year: 2024,
    featured: true,
    order: 7,
  },
];
