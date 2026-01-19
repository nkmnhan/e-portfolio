// Personal Artist Portfolio - Mock Data with Rich Media Types

// ============================================
// PROFILE - Single Artist Personal Portfolio
// ============================================

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  avatar: string;
  coverImage: string;
  bio: string;
  shortBio: string;
  specializations: Specialization[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
  socialLinks: SocialLinks;
  availableForWork: boolean;
}

export type Specialization = "3d-artist" | "animation-artist" | "concept-artist";

export interface Skill {
  name: string;
  category: "3d" | "animation" | "concept" | "engine" | "general";
  level: "expert" | "advanced" | "intermediate";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface Award {
  title: string;
  category: string;
  year: string;
}

export interface SocialLinks {
  artstation?: string;
  linkedin?: string;
  instagram?: string;
  vimeo?: string;
  youtube?: string;
  github?: string;
  twitter?: string;
}

// ============================================
// PROJECTS - Rich Media Types
// ============================================

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  thumbnail: string;
  thumbnailType: "image" | "video"; // For hover autoplay
  thumbnailVideo?: string; // Video URL for hover autoplay
  media: MediaItem[];
  tools: string[];
  tags: string[];
  client: string;
  year: number;
  featured: boolean;
  order: number;
}

export type ProjectCategory =
  | "character"
  | "environment"
  | "concept-art"
  | "animation"
  | "vfx"
  | "game-art"
  | "film";

export type MediaItem =
  | ImageMedia
  | VideoMedia
  | CarouselMedia
  | Model3DMedia
  | EmbedMedia;

export interface ImageMedia {
  type: "image";
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface VideoMedia {
  type: "video";
  url: string;
  poster: string;
  caption?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface CarouselMedia {
  type: "carousel";
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  autoplay?: boolean;
  interval?: number;
}

export interface Model3DMedia {
  type: "3d-model";
  modelUrl: string;
  poster: string;
  caption?: string;
  settings?: {
    autoRotate?: boolean;
    background?: string;
    cameraPosition?: [number, number, number];
  };
}

export interface EmbedMedia {
  type: "embed";
  platform: "youtube" | "vimeo" | "sketchfab";
  embedId: string;
  poster: string;
  caption?: string;
}

// ============================================
// SHOWREELS
// ============================================

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

export interface ShowreelBreakdown {
  timestamp: string;
  title: string;
  role: string;
}

// ============================================
// MOCK DATA
// ============================================

export const profile: Profile = {
  name: "Alex Chen",
  title: "3D Artist & Animator",
  tagline: "Creating characters and worlds that tell stories",
  location: "Los Angeles, CA",
  email: "alex.chen@example.com",
  avatar: "https://i.pravatar.cc/300?u=alex-chen-artist",
  coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&h=600&fit=crop",
  shortBio: "Bringing imagination to life through 3D art, animation, and visual storytelling.",
  bio: `I'm a multi-disciplinary artist with 8+ years of experience spanning 3D character art, animation, and concept design. My work has been featured in AAA games, animated films, and award-winning short films.

I specialize in creating believable characters that resonate with audiences, whether they're realistic humans for next-gen games or stylized creatures for animated features. My background in traditional art informs my digital work, bringing a sense of craftsmanship to every project.

Currently available for freelance projects, film collaborations, and studio positions.`,
  specializations: ["3d-artist", "animation-artist", "concept-artist"],
  skills: [
    { name: "ZBrush", category: "3d", level: "expert" },
    { name: "Maya", category: "3d", level: "expert" },
    { name: "Blender", category: "3d", level: "advanced" },
    { name: "Substance Painter", category: "3d", level: "expert" },
    { name: "Marvelous Designer", category: "3d", level: "advanced" },
    { name: "Houdini", category: "animation", level: "intermediate" },
    { name: "After Effects", category: "animation", level: "advanced" },
    { name: "Photoshop", category: "concept", level: "expert" },
    { name: "Procreate", category: "concept", level: "advanced" },
    { name: "Unreal Engine 5", category: "engine", level: "advanced" },
    { name: "Unity", category: "engine", level: "intermediate" },
  ],
  experience: [
    {
      company: "Naughty Dog",
      role: "Senior Character Artist",
      period: "2021 - Present",
      description: "Lead character development for unannounced AAA title. Mentoring junior artists.",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
    },
    {
      company: "Blizzard Entertainment",
      role: "3D Character Artist",
      period: "2018 - 2021",
      description: "Created hero characters for Overwatch 2. Collaborated with concept artists.",
    },
    {
      company: "Freelance",
      role: "3D Artist & Animator",
      period: "2016 - 2018",
      description: "Worked with indie studios and advertising agencies on various projects.",
    },
  ],
  education: [
    {
      school: "Gnomon School of VFX",
      degree: "Digital Production Certificate",
      year: "2016",
    },
    {
      school: "Art Center College of Design",
      degree: "BFA Entertainment Design",
      year: "2014",
    },
  ],
  awards: [
    { title: "ArtStation Challenge Winner", category: "Character Design", year: "2023" },
    { title: "CGSociety Choice Award", category: "3D Art", year: "2022" },
    { title: "Rookie Awards Finalist", category: "Game Art", year: "2019" },
  ],
  socialLinks: {
    artstation: "https://artstation.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    instagram: "https://instagram.com/alexchen.art",
    youtube: "https://youtube.com/@alexchenart",
    vimeo: "https://vimeo.com/alexchen",
  },
  availableForWork: true,
};

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
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    thumbnailType: "image",
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

export const showreels: Showreel[] = [
  {
    id: "reel-001",
    title: "Character Art Reel 2024",
    description: "Compilation of 3D character work from games and personal projects.",
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=450&fit=crop",
    videoUrl: "https://cdn.coverr.co/videos/coverr-3d-abstract-shapes-7954/1080p.mp4",
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
    videoUrl: "https://cdn.coverr.co/videos/coverr-birds-flying-over-the-water-3593/1080p.mp4",
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
    videoUrl: "https://cdn.coverr.co/videos/coverr-night-city-traffic-1853/1080p.mp4",
    duration: "2:00",
    year: 2024,
    featured: false,
  },
];

// ============================================
// CATEGORIES & FILTERS
// ============================================

export const categories: { id: ProjectCategory; name: string; icon: string }[] = [
  { id: "character", name: "Characters", icon: "user" },
  { id: "environment", name: "Environments", icon: "globe" },
  { id: "concept-art", name: "Concept Art", icon: "pencil" },
  { id: "animation", name: "Animation", icon: "film" },
  { id: "vfx", name: "VFX", icon: "sparkles" },
  { id: "game-art", name: "Game Art", icon: "gamepad" },
  { id: "film", name: "Film", icon: "video" },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedShowreels(): Showreel[] {
  return showreels.filter((s) => s.featured);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}

export function getAllTools(): string[] {
  const tools = new Set<string>();
  projects.forEach((p) => p.tools.forEach((t) => tools.add(t)));
  return Array.from(tools).sort();
}
