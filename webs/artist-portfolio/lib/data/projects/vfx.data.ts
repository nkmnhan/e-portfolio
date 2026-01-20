// VFX Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const vfxProjects: Project[] = [
  {
    id: "proj-008",
    title: "Elemental Magic System",
    slug: "elemental-magic",
    category: "vfx",
    description: "Real-time spell effects for fire, ice, lightning, and earth magic.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.vfx,
    media: [
      {
        type: "video",
        url: SAMPLE_VIDEOS.vfx,
        poster: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&h=800&fit=crop",
        caption: "Fire Magic Effects",
        autoplay: false,
        loop: true,
      },
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&h=600&fit=crop", alt: "Fire Magic", caption: "Fire Element" },
          { url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=600&fit=crop", alt: "Ice Magic", caption: "Ice Element" },
          { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop", alt: "Lightning", caption: "Lightning Element" },
        ],
      },
    ],
    tools: ["Unreal Niagara", "EmberGen", "After Effects", "Houdini"],
    tags: ["vfx", "game-fx", "magic", "particles", "realtime"],
    client: "Mobile RPG Studio",
    year: 2024,
    featured: true,
    order: 8,
  },
];
