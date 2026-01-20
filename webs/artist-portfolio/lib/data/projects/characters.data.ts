// Character Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const characterProjects: Project[] = [
  {
    id: "proj-001",
    title: "Cyber Ronin",
    slug: "cyber-ronin",
    category: "character",
    description: "Real-time game character for a cyberpunk action RPG. Fully rigged with 65k triangles.",
    longDescription: `This project was a personal exploration of neo-Japanese aesthetics merged with cyberpunk elements. The character went through multiple design iterations before settling on this final look that balances traditional samurai armor with futuristic technology.

Technical breakdown:
- 65,000 triangles (game-ready)
- 4K PBR textures (Albedo, Normal, Roughness, Metallic, Emissive)
- Fully rigged with facial blendshapes
- Cloth simulation setup for the cape

The design process started with quick sketches, moved to a detailed concept, and then into ZBrush for high-poly sculpting. The final game-ready mesh was created in Maya with hand-painted details in Substance Painter.`,
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=800&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.abstract3d,
    thumbnailAspectRatio: 0.75,
    media: [
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=1600&fit=crop", alt: "Cyber Ronin - Front View", caption: "Front View - Final Render" },
          { url: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=1600&fit=crop", alt: "Cyber Ronin - Back View", caption: "Back View" },
          { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1600&fit=crop", alt: "Cyber Ronin - Detail", caption: "Armor Detail" },
          { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=1600&fit=crop", alt: "Cyber Ronin - Wireframe", caption: "Wireframe View" },
        ],
        autoplay: true,
        interval: 4000,
      },
      {
        type: "video",
        url: SAMPLE_VIDEOS.abstract3d,
        poster: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=800&fit=crop",
        caption: "360° Turntable Animation",
        autoplay: false,
        loop: true,
      },
      {
        type: "3d-model",
        modelUrl: "/models/cyber-ronin.glb",
        poster: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=600&fit=crop",
        caption: "Interactive 3D Viewer",
        settings: {
          autoRotate: true,
          background: "#1a1a1a",
          cameraPosition: [0, 1.5, 3],
        },
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=800&fit=crop",
        alt: "Texture Breakdown",
        caption: "PBR Texture Maps Breakdown",
      },
    ],
    tools: ["ZBrush", "Maya", "Substance Painter", "Marvelous Designer", "Unreal Engine 5"],
    tags: ["character", "cyberpunk", "game-ready", "sci-fi", "realtime"],
    client: "Personal Project",
    year: 2024,
    featured: true,
    order: 1,
  },
  {
    id: "proj-002",
    title: "Forest Spirit",
    slug: "forest-spirit",
    category: "character",
    description: "Mystical creature design for an animated short film. Organic sculpting with ethereal materials.",
    longDescription: `The Forest Spirit was designed for an indie animated short exploring themes of nature and technology. The character needed to feel ancient yet alive, with bioluminescent elements that would animate beautifully.`,
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=800&fit=crop",
    thumbnailType: "image",
    thumbnailAspectRatio: 0.75,
    media: [
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=1600&fit=crop", alt: "Forest Spirit - Hero", caption: "Final Render" },
          { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop", alt: "Forest Spirit - Environment", caption: "In Environment" },
          { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop", alt: "Forest Spirit - Concept", caption: "Original Concept" },
        ],
      },
      {
        type: "embed",
        platform: "sketchfab",
        embedId: "abc123",
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop",
        caption: "View on Sketchfab",
      },
    ],
    tools: ["ZBrush", "KeyShot", "Photoshop", "Blender"],
    tags: ["creature", "fantasy", "organic", "film", "sculpt"],
    client: "Indie Film Studio",
    year: 2024,
    featured: true,
    order: 2,
  },
];
