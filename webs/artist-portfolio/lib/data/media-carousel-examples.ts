/**
 * MEDIA CAROUSEL USAGE EXAMPLES
 * 
 * This file demonstrates how to use the new MediaCarousel component
 * with different media types in project data.
 */

import type { Project } from "@/lib/types";

// Example 1: Mixed media carousel with images and videos
export const exampleProject1: Project = {
  id: "example-1",
  title: "Character Animation Reel",
  slug: "character-animation-reel",
  category: "animation",
  description: "Mixed media showcase of character work",
  thumbnail: "/projects/example-1/thumb.jpg",
  thumbnailType: "image",
  media: [
    {
      type: "media-carousel",
      items: [
        {
          type: "image",
          url: "/projects/example-1/concept-art.jpg",
          alt: "Character concept art",
          caption: "Initial concept design",
        },
        {
          type: "video",
          videoUrl: "/projects/example-1/animation.mp4",
          poster: "/projects/example-1/animation-poster.jpg",
          loop: false,
          caption: "Final animation sequence",
        },
        {
          type: "youtube",
          embedId: "dQw4w9WgXcQ",
          poster: "/projects/example-1/yt-thumb.jpg",
          caption: "Behind the scenes",
        },
        {
          type: "image",
          url: "/projects/example-1/final-render.jpg",
          alt: "Final character render",
          caption: "Final high-res render",
        },
      ],
      autoplay: true,
      interval: 5000, // 5 seconds for images (videos get 10s automatically)
    },
  ],
  tools: ["Maya", "ZBrush", "Substance Painter"],
  tags: ["character", "animation", "3d"],
  client: "Example Studio",
  year: 2026,
  featured: true,
  order: 1,
};

// Example 2: Carousel with custom durations
export const exampleProject2: Project = {
  id: "example-2",
  title: "Environment Breakdown",
  slug: "environment-breakdown",
  category: "environment",
  description: "Step-by-step environment creation",
  thumbnail: "/projects/example-2/thumb.jpg",
  thumbnailType: "image",
  media: [
    {
      type: "media-carousel",
      items: [
        {
          type: "image",
          url: "/projects/example-2/blockout.jpg",
          alt: "Initial blockout",
          caption: "Stage 1: Blockout",
          duration: 3, // Show for 3 seconds
        },
        {
          type: "image",
          url: "/projects/example-2/modeling.jpg",
          alt: "Detailed modeling",
          caption: "Stage 2: Modeling",
          duration: 3,
        },
        {
          type: "image",
          url: "/projects/example-2/texturing.jpg",
          alt: "Texturing phase",
          caption: "Stage 3: Texturing",
          duration: 3,
        },
        {
          type: "sketchfab",
          embedId: "abc123def456",
          poster: "/projects/example-2/sketchfab-thumb.jpg",
          caption: "Interactive 3D model",
          duration: 15, // Give users more time with 3D viewer
        },
        {
          type: "image",
          url: "/projects/example-2/final.jpg",
          alt: "Final render",
          caption: "Final Result",
          duration: 8, // Show final image longer
        },
      ],
      autoplay: true,
      caption: "Click and drag in 3D viewer to explore",
    },
  ],
  tools: ["Unreal Engine", "Blender", "Quixel"],
  tags: ["environment", "3d", "game-art"],
  client: "Game Studio",
  year: 2026,
  featured: false,
  order: 2,
};

// Example 3: Video-focused carousel
export const exampleProject3: Project = {
  id: "example-3",
  title: "VFX Showreel",
  slug: "vfx-showreel",
  category: "vfx",
  description: "Collection of visual effects work",
  thumbnail: "/projects/example-3/thumb.jpg",
  thumbnailType: "video",
  thumbnailVideo: "/projects/example-3/thumb-video.mp4",
  media: [
    {
      type: "media-carousel",
      items: [
        {
          type: "youtube",
          embedId: "dQw4w9WgXcQ",
          poster: "/projects/example-3/yt1-thumb.jpg",
          caption: "Explosion sequence",
        },
        {
          type: "vimeo",
          embedId: "123456789",
          poster: "/projects/example-3/vimeo1-thumb.jpg",
          caption: "Particle effects breakdown",
        },
        {
          type: "video",
          videoUrl: "/projects/example-3/compositing.mp4",
          poster: "/projects/example-3/comp-poster.jpg",
          loop: true,
          caption: "Compositing demo",
        },
      ],
      autoplay: false, // Don't auto-play videos by default
    },
  ],
  tools: ["Houdini", "Nuke", "After Effects"],
  tags: ["vfx", "effects", "compositing"],
  client: "Film Production",
  year: 2026,
  featured: true,
  order: 3,
};

// Example 4: Simple image carousel (old format still works)
export const exampleProject4: Project = {
  id: "example-4",
  title: "Character Design Series",
  slug: "character-design-series",
  category: "concept-art",
  description: "Series of character concept designs",
  thumbnail: "/projects/example-4/thumb.jpg",
  thumbnailType: "image",
  media: [
    {
      type: "carousel", // Old carousel format still supported
      images: [
        {
          url: "/projects/example-4/char1.jpg",
          alt: "Character design 1",
          caption: "Warrior concept",
        },
        {
          url: "/projects/example-4/char2.jpg",
          alt: "Character design 2",
          caption: "Mage concept",
        },
        {
          url: "/projects/example-4/char3.jpg",
          alt: "Character design 3",
          caption: "Archer concept",
        },
      ],
      autoplay: true,
      interval: 4000,
    },
  ],
  tools: ["Photoshop", "Procreate"],
  tags: ["concept-art", "character", "design"],
  client: "Indie Game Dev",
  year: 2026,
  featured: false,
  order: 4,
};

/**
 * MIGRATION GUIDE: Converting old carousel to new media-carousel
 * 
 * OLD FORMAT:
 * {
 *   type: "carousel",
 *   images: [
 *     { url: "...", alt: "...", caption: "..." }
 *   ],
 *   autoplay: true,
 *   interval: 5000
 * }
 * 
 * NEW FORMAT:
 * {
 *   type: "media-carousel",
 *   items: [
 *     { type: "image", url: "...", alt: "...", caption: "..." }
 *   ],
 *   autoplay: true,
 *   interval: 5000
 * }
 * 
 * KEY DIFFERENCES:
 * - Use "media-carousel" instead of "carousel"
 * - Change "images" array to "items" array
 * - Each item needs a "type" field
 * - Can mix different media types in items array
 * - Optional "duration" per item for custom timing
 */
