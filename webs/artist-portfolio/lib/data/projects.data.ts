// Projects Mock Data
// Edit this file to update your portfolio projects

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  // ============================================
  // 3D CHARACTER PROJECTS
  // ============================================
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
    thumbnailVideo: "https://cdn.coverr.co/videos/coverr-3d-abstract-shapes-7954/1080p.mp4",
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
        url: "https://cdn.coverr.co/videos/coverr-3d-abstract-shapes-7954/1080p.mp4",
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

  // ============================================
  // ANIMATION PROJECTS
  // ============================================
  {
    id: "proj-003",
    title: "Dragon Flight Cycle",
    slug: "dragon-flight-cycle",
    category: "animation",
    description: "Complete flight cycle animation with takeoff, soar, dive, and landing sequences.",
    longDescription: `A comprehensive dragon flight study covering all phases of aerial locomotion. This project focused on believable wing mechanics and weight distribution during flight.`,
    thumbnail: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: "https://cdn.coverr.co/videos/coverr-birds-flying-over-the-water-3593/1080p.mp4",
    thumbnailAspectRatio: 1.5,
    media: [
      {
        type: "video",
        url: "https://cdn.coverr.co/videos/coverr-birds-flying-over-the-water-3593/1080p.mp4",
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
    thumbnailVideo: "https://cdn.coverr.co/videos/coverr-woman-working-on-laptop-9832/1080p.mp4",
    media: [
      {
        type: "video",
        url: "https://cdn.coverr.co/videos/coverr-woman-working-on-laptop-9832/1080p.mp4",
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

  // ============================================
  // CONCEPT ART PROJECTS
  // ============================================
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
        url: "https://cdn.coverr.co/videos/coverr-calm-ocean-waves-1947/1080p.mp4",
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

  // ============================================
  // ENVIRONMENT PROJECTS
  // ============================================
  {
    id: "proj-007",
    title: "Neon District",
    slug: "neon-district",
    category: "environment",
    description: "Cyberpunk city environment built in Unreal Engine 5 with ray-traced lighting.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: "https://cdn.coverr.co/videos/coverr-night-city-traffic-1853/1080p.mp4",
    media: [
      {
        type: "video",
        url: "https://cdn.coverr.co/videos/coverr-night-city-traffic-1853/1080p.mp4",
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

  // ============================================
  // VFX PROJECTS
  // ============================================
  {
    id: "proj-008",
    title: "Elemental Magic System",
    slug: "elemental-magic",
    category: "vfx",
    description: "Real-time spell effects for fire, ice, lightning, and earth magic.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: "https://cdn.coverr.co/videos/coverr-fire-background-8261/1080p.mp4",
    media: [
      {
        type: "video",
        url: "https://cdn.coverr.co/videos/coverr-fire-background-8261/1080p.mp4",
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
