// Game Art Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const gameArtProjects: Project[] = [
  {
    id: "proj-009",
    title: "Starfall Chronicles",
    slug: "starfall-chronicles",
    category: "game-art",
    description: "Complete art direction for a mobile sci-fi RPG including UI, characters, and environments.",
    longDescription: `Lead artist on Starfall Chronicles, a mobile sci-fi RPG featuring stylized character designs and immersive space environments. Responsible for establishing the visual language and creating key art assets.

Key contributions:
- Art direction and style guide creation
- 15+ playable character designs
- 30+ enemy creature designs
- UI/UX design for all game menus
- Marketing key art and promotional materials

The project required balancing high visual quality with mobile performance constraints, resulting in optimized yet striking visuals.`,
    thumbnail: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.scifi,
    thumbnailAspectRatio: 1.5,
    media: [
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1400&h=800&fit=crop", alt: "Starfall Chronicles - Key Art", caption: "Game Key Art" },
          { url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1400&h=800&fit=crop", alt: "Character Lineup", caption: "Playable Characters" },
          { url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1400&h=800&fit=crop", alt: "UI Design", caption: "Game UI Design" },
          { url: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=1400&h=800&fit=crop", alt: "Environment Art", caption: "Space Station Environment" },
        ],
        autoplay: true,
        interval: 4000,
      },
      {
        type: "video",
        url: SAMPLE_VIDEOS.scifi,
        poster: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=800&fit=crop",
        caption: "Gameplay Trailer",
        autoplay: false,
        loop: false,
      },
    ],
    tools: ["Photoshop", "Illustrator", "Blender", "Unity", "Figma"],
    tags: ["game-art", "mobile", "sci-fi", "ui-design", "character-design"],
    client: "Nebula Games Studio",
    year: 2024,
    featured: true,
    order: 9,
  },
  {
    id: "proj-010",
    title: "Dungeon Delvers",
    slug: "dungeon-delvers",
    category: "game-art",
    description: "Stylized fantasy dungeon crawler with hand-painted textures and modular assets.",
    longDescription: `Created a complete art package for Dungeon Delvers, a roguelike dungeon crawler with a distinctive hand-painted aesthetic. The project focused on creating modular, reusable assets that maintain visual coherence.

Deliverables:
- 50+ modular dungeon pieces
- 25 unique enemy designs
- 100+ item and weapon icons
- Particle effects and environmental VFX
- Promotional art and Steam assets`,
    thumbnail: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&h=400&fit=crop",
    thumbnailType: "image",
    thumbnailAspectRatio: 1.5,
    media: [
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1400&h=800&fit=crop", alt: "Dungeon Environment", caption: "Dungeon Tileset" },
          { url: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1400&h=800&fit=crop", alt: "Monster Designs", caption: "Enemy Lineup" },
          { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=800&fit=crop", alt: "Item Icons", caption: "Equipment Icons" },
        ],
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1400&h=900&fit=crop",
        alt: "Dungeon Overview",
        caption: "Full Dungeon Layout Preview",
      },
    ],
    tools: ["Photoshop", "Aseprite", "Blender", "Unity"],
    tags: ["game-art", "fantasy", "stylized", "indie", "roguelike"],
    client: "Indie Development Team",
    year: 2024,
    featured: false,
    order: 10,
  },
];
