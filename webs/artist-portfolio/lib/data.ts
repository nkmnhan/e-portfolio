// Artist Portfolio Mock Data with External Placeholder Images

export interface Artist {
  id: string;
  name: string;
  slug: string;
  title: string;
  specialization: "3d-artist" | "animation-artist" | "concept-artist";
  location: string;
  email: string;
  avatar: string;
  coverImage: string;
  bio: string;
  shortBio: string;
  skills: string[];
  socialLinks: {
    artstation?: string;
    linkedin?: string;
    instagram?: string;
    vimeo?: string;
    youtube?: string;
  };
  availableForWork: boolean;
  featured: boolean;
}

export interface Artwork {
  id: string;
  artistId: string;
  title: string;
  slug: string;
  category: "character" | "environment" | "concept-art" | "animation" | "vfx";
  description: string;
  thumbnail: string;
  images: string[];
  videoUrl: string | null;
  tools: string[];
  tags: string[];
  client: string;
  year: number;
  featured: boolean;
}

export interface Showreel {
  id: string;
  artistId: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  year: number;
  featured: boolean;
}

// Mock Artists with external placeholder images
export const artists: Artist[] = [
  {
    id: "artist-001",
    name: "Maya Chen",
    slug: "maya-chen",
    title: "Senior 3D Character Artist",
    specialization: "3d-artist",
    location: "Los Angeles, CA",
    email: "maya.chen@example.com",
    avatar: "https://i.pravatar.cc/150?u=maya-chen",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=400&fit=crop",
    bio: "Senior 3D Character Artist with 8+ years of experience in AAA game development. Specialized in realistic human characters and creature design. Previously worked at Naughty Dog and Blizzard Entertainment.",
    shortBio: "Creating believable characters that tell stories through their design.",
    skills: ["ZBrush", "Maya", "Substance Painter", "Marvelous Designer", "Unreal Engine"],
    socialLinks: {
      artstation: "https://artstation.com/mayachen",
      linkedin: "https://linkedin.com/in/mayachen",
      instagram: "https://instagram.com/mayachen.art",
    },
    availableForWork: true,
    featured: true,
  },
  {
    id: "artist-002",
    name: "Alex Rivera",
    slug: "alex-rivera",
    title: "Lead Animator",
    specialization: "animation-artist",
    location: "Vancouver, BC",
    email: "alex.rivera@example.com",
    avatar: "https://i.pravatar.cc/150?u=alex-rivera",
    coverImage: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=400&fit=crop",
    bio: "Lead Animator specializing in character performance and creature animation. 10+ years in film and games, with credits on major Marvel and Disney productions.",
    shortBio: "Bringing characters to life through motion and emotion.",
    skills: ["Maya", "MotionBuilder", "Houdini", "Unreal Engine", "Motion Capture"],
    socialLinks: {
      vimeo: "https://vimeo.com/alexrivera",
      linkedin: "https://linkedin.com/in/alexrivera",
      youtube: "https://youtube.com/@alexrivera",
    },
    availableForWork: false,
    featured: true,
  },
  {
    id: "artist-003",
    name: "Sophie Laurent",
    slug: "sophie-laurent",
    title: "Senior Concept Artist",
    specialization: "concept-artist",
    location: "Montreal, QC",
    email: "sophie.laurent@example.com",
    avatar: "https://i.pravatar.cc/150?u=sophie-laurent",
    coverImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=400&fit=crop",
    bio: "Senior Concept Artist with a passion for world-building and environmental storytelling. Experienced in both stylized and realistic art directions for games and film.",
    shortBio: "Visualizing worlds that haven't been built yet.",
    skills: ["Photoshop", "Procreate", "Blender", "KeyShot", "Traditional Drawing"],
    socialLinks: {
      artstation: "https://artstation.com/sophielaurent",
      instagram: "https://instagram.com/sophie.concept",
    },
    availableForWork: true,
    featured: true,
  },
  {
    id: "artist-004",
    name: "James Park",
    slug: "james-park",
    title: "Environment Artist",
    specialization: "3d-artist",
    location: "Seattle, WA",
    email: "james.park@example.com",
    avatar: "https://i.pravatar.cc/150?u=james-park",
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=400&fit=crop",
    bio: "Environment Artist focused on creating immersive game worlds. Expertise in modular environment design and real-time rendering optimization.",
    shortBio: "Building worlds players want to explore.",
    skills: ["Unreal Engine 5", "3ds Max", "Substance Designer", "World Machine", "SpeedTree"],
    socialLinks: {
      artstation: "https://artstation.com/jamespark",
      linkedin: "https://linkedin.com/in/jamespark3d",
    },
    availableForWork: true,
    featured: false,
  },
  {
    id: "artist-005",
    name: "Elena Volkov",
    slug: "elena-volkov",
    title: "VFX Artist",
    specialization: "animation-artist",
    location: "London, UK",
    email: "elena.volkov@example.com",
    avatar: "https://i.pravatar.cc/150?u=elena-volkov",
    coverImage: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&h=400&fit=crop",
    bio: "VFX Artist specializing in particle systems, fluid simulations, and real-time effects for film and games.",
    shortBio: "Making the impossible look real.",
    skills: ["Houdini", "Nuke", "Unreal Niagara", "EmberGen", "After Effects"],
    socialLinks: {
      artstation: "https://artstation.com/elenavolkov",
      vimeo: "https://vimeo.com/elenavolkov",
    },
    availableForWork: false,
    featured: false,
  },
];

// Mock Artworks with Unsplash placeholder images
export const artworks: Artwork[] = [
  {
    id: "artwork-001",
    artistId: "artist-001",
    title: "Cyber Samurai",
    slug: "cyber-samurai",
    category: "character",
    description: "Real-time game character designed for a cyberpunk action RPG. Fully rigged with 60k triangles, PBR textures at 4K resolution.",
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    ],
    videoUrl: null,
    tools: ["ZBrush", "Maya", "Substance Painter"],
    tags: ["character", "cyberpunk", "game-ready", "sci-fi"],
    client: "Personal Project",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-002",
    artistId: "artist-001",
    title: "Forest Guardian",
    slug: "forest-guardian",
    category: "character",
    description: "Mystical creature design combining organic and ethereal elements for a fantasy game pitch.",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=1600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
    ],
    videoUrl: null,
    tools: ["ZBrush", "KeyShot", "Photoshop"],
    tags: ["creature", "fantasy", "organic", "sculpt"],
    client: "Concept Pitch",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-003",
    artistId: "artist-002",
    title: "Dragon Flight Cycle",
    slug: "dragon-flight",
    category: "animation",
    description: "Full flight cycle animation for a dragon character including takeoff, soar, dive, and landing sequences.",
    thumbnail: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tools: ["Maya", "MotionBuilder"],
    tags: ["animation", "creature", "flight-cycle", "dragon"],
    client: "DreamWorks Animation",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-004",
    artistId: "artist-002",
    title: "Character Performance",
    slug: "character-performance",
    category: "animation",
    description: "Character acting piece showcasing subtle facial expressions and body language for emotional storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tools: ["Maya", "Facial Motion Capture"],
    tags: ["animation", "performance", "facial", "acting"],
    client: "Animation Demo",
    year: 2024,
    featured: false,
  },
  {
    id: "artwork-005",
    artistId: "artist-003",
    title: "Lost Civilization",
    slug: "lost-civilization",
    category: "concept-art",
    description: "Environment concept series depicting an ancient underwater civilization being discovered.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=800&fit=crop",
    ],
    videoUrl: null,
    tools: ["Photoshop", "Blender", "KeyShot"],
    tags: ["concept-art", "environment", "underwater", "fantasy"],
    client: "Ubisoft - Assassin's Creed",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-006",
    artistId: "artist-003",
    title: "Mech Design Series",
    slug: "mech-design",
    category: "concept-art",
    description: "Industrial mech designs for a sci-fi strategy game with focus on functional design.",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=800&fit=crop",
    ],
    videoUrl: null,
    tools: ["Photoshop", "Blender"],
    tags: ["concept-art", "mech", "vehicle", "sci-fi"],
    client: "Personal Project",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-007",
    artistId: "artist-004",
    title: "Alien Jungle",
    slug: "alien-jungle",
    category: "environment",
    description: "Fully playable alien jungle environment for Unreal Engine 5 with bioluminescent flora.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tools: ["Unreal Engine 5", "3ds Max", "Substance Designer"],
    tags: ["environment", "sci-fi", "alien", "game-ready"],
    client: "AAA Game Studio",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-008",
    artistId: "artist-004",
    title: "Medieval Village",
    slug: "medieval-village",
    category: "environment",
    description: "Modular medieval village kit with over 100 assets optimized for real-time rendering.",
    thumbnail: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&h=800&fit=crop",
    ],
    videoUrl: null,
    tools: ["3ds Max", "Substance Painter", "Unreal Engine 5"],
    tags: ["environment", "medieval", "modular", "game-ready"],
    client: "Asset Store Release",
    year: 2023,
    featured: false,
  },
  {
    id: "artwork-009",
    artistId: "artist-005",
    title: "Elemental Magic FX",
    slug: "elemental-magic",
    category: "vfx",
    description: "Real-time spell effects for fire, ice, lightning, and earth magic optimized for mobile.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tools: ["Unreal Niagara", "EmberGen", "After Effects"],
    tags: ["vfx", "game-fx", "magic", "particles"],
    client: "Mobile RPG",
    year: 2024,
    featured: true,
  },
  {
    id: "artwork-010",
    artistId: "artist-005",
    title: "Ocean Storm",
    slug: "ocean-storm",
    category: "vfx",
    description: "Large-scale ocean storm simulation for film including ship destruction and massive waves.",
    thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tools: ["Houdini", "Nuke", "Arnold"],
    tags: ["vfx", "film-fx", "simulation", "ocean"],
    client: "Major Film Production",
    year: 2023,
    featured: true,
  },
];

// Mock Showreels
export const showreels: Showreel[] = [
  {
    id: "reel-001",
    artistId: "artist-002",
    title: "Animation Demo Reel 2024",
    description: "Compilation of character animation work from film and game projects.",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:30",
    year: 2024,
    featured: true,
  },
  {
    id: "reel-002",
    artistId: "artist-002",
    title: "Creature Animation Reel",
    description: "Focused reel showcasing creature and non-human character animation.",
    thumbnail: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "1:45",
    year: 2024,
    featured: false,
  },
  {
    id: "reel-003",
    artistId: "artist-005",
    title: "VFX Showreel 2024",
    description: "Visual effects work from film and real-time projects.",
    thumbnail: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&h=450&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "2:00",
    year: 2024,
    featured: true,
  },
];

// Category data
export const categories = [
  { id: "character", name: "Character", icon: "user" },
  { id: "environment", name: "Environment", icon: "mountain" },
  { id: "concept-art", name: "Concept Art", icon: "paintbrush" },
  { id: "animation", name: "Animation", icon: "film" },
  { id: "vfx", name: "VFX", icon: "sparkles" },
];

export const specializations = [
  { id: "3d-artist", name: "3D Artist", description: "3D modeling, sculpting, texturing" },
  { id: "animation-artist", name: "Animator", description: "Character and creature animation" },
  { id: "concept-artist", name: "Concept Artist", description: "Visual development and design" },
];

// Helper functions
export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((artist) => artist.slug === slug);
}

export function getArtworksByArtist(artistId: string): Artwork[] {
  return artworks.filter((artwork) => artwork.artistId === artistId);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((artwork) => artwork.featured);
}

export function getFeaturedArtists(): Artist[] {
  return artists.filter((artist) => artist.featured);
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getShowreelsByArtist(artistId: string): Showreel[] {
  return showreels.filter((reel) => reel.artistId === artistId);
}

export function getFeaturedShowreels(): Showreel[] {
  return showreels.filter((reel) => reel.featured);
}

export function getArtworksByCategory(category: Artwork["category"]): Artwork[] {
  return artworks.filter((artwork) => artwork.category === category);
}
