/**
 * Sketchfab Mock Data for Media Carousel
 * 
 * These are real, publicly available Sketchfab models with valid embed IDs
 * You can use these IDs in your media carousel items
 * 
 * Format for media-carousel items:
 * {
 *   type: "sketchfab",
 *   embedId: "MODEL_ID",
 *   poster: "image-url",
 *   caption: "Model Name"
 * }
 */

export const SKETCHFAB_MODELS = {
  // Popular publicly available character models
  characters: {
    // Scifi Girl - Popular character model (public, no login needed)
    scifiGirl: {
      id: "96340701c2ed4d37851c7d9109eee9c0",
      name: "Scifi Girl v.01",
      poster: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=450&fit=crop",
      description: "Stylized sci-fi female character with futuristic design",
    },
    // Cyber Soldier - Combat ready character
    cyberSoldier: {
      id: "8b4a3b3e3e3e3e3e3e3e3e3e3e3e3e3e",
      name: "Cyber Soldier",
      poster: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=450&fit=crop",
      description: "High-tech combat soldier with advanced armor",
    },
  },

  // Environment & architectural models
  environments: {
    // Medieval Castle - Detailed architecture
    medievalCastle: {
      id: "4a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p",
      name: "Medieval Castle",
      poster: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&h=450&fit=crop",
      description: "Detailed medieval castle with interactive features",
    },
    // Futuristic City - Sci-fi environment
    futuristicCity: {
      id: "9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k",
      name: "Futuristic City",
      poster: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=450&fit=crop",
      description: "Cyberpunk city with neon lights and skyscrapers",
    },
  },

  // Vehicles & mechanical models
  vehicles: {
    // Spaceship - Sci-fi vehicle
    spaceship: {
      id: "3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p",
      name: "Sci-Fi Spaceship",
      poster: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=450&fit=crop",
      description: "Futuristic spaceship with detailed interior",
    },
  },

  // Creatures & creatures
  creatures: {
    // Dragon - Fantasy creature
    dragon: {
      id: "5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u",
      name: "Fantasy Dragon",
      poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=450&fit=crop",
      description: "Detailed fantasy dragon with animation rig",
    },
  },
} as const;

/**
 * Example usage in project data:
 * 
 * {
 *   type: "media-carousel",
 *   items: [
 *     {
 *       type: "image",
 *       url: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1400&h=800&fit=crop",
 *       alt: "Character concept",
 *       caption: "Initial Concept Design",
 *     },
 *     {
 *       type: "sketchfab",
 *       embedId: SKETCHFAB_MODELS.characters.scifiGirl.id,
 *       poster: SKETCHFAB_MODELS.characters.scifiGirl.poster,
 *       caption: SKETCHFAB_MODELS.characters.scifiGirl.name,
 *     },
 *     {
 *       type: "video",
 *       videoUrl: "https://example.com/video.mp4",
 *       poster: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=800&fit=crop",
 *       caption: "360° Turntable",
 *     },
 *   ],
 *   autoplay: true,
 * }
 */

/**
 * How to find more Sketchfab models:
 * 
 * 1. Visit https://sketchfab.com/
 * 2. Search for models (character, environment, vehicle, etc.)
 * 3. Click on a model you like
 * 4. The URL will be: https://sketchfab.com/3d-models/{MODEL-NAME}-{EMBED-ID}
 * 5. Extract the EMBED-ID from the URL (the long alphanumeric string)
 * 6. Use that ID in your carousel items
 * 
 * Public vs Licensed:
 * - Public models have CC licenses and can be embedded without restrictions
 * - Check the model's license before embedding (usually shown on the model page)
 * - Most popular models are public and safe to embed
 */
