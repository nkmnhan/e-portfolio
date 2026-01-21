// Film Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS } from "../videos";

export const filmProjects: Project[] = [
  {
    id: "proj-011",
    title: "The Last Garden",
    slug: "the-last-garden",
    category: "film",
    description: "Short film VFX and environment work for an award-winning sci-fi drama.",
    longDescription: `VFX Supervisor and Environment Artist for "The Last Garden," a 15-minute sci-fi short film that premiered at Sundance 2024. The film tells the story of humanity's last botanical preserve in a post-climate world.

VFX breakdown:
- 120+ VFX shots across the film
- Full CG environments for 3 major sequences
- Digital matte paintings for establishing shots
- Particle simulations for atmospheric effects
- Seamless green screen compositing

The project was completed with a small team of 5 artists over 8 months, demonstrating efficient pipeline management and creative problem-solving.`,
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.cinematic,
    thumbnailAspectRatio: 2.35,
    media: [
      {
        type: "video",
        url: SAMPLE_VIDEOS.cinematic,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=512&fit=crop",
        caption: "Official Trailer",
        autoplay: false,
        loop: false,
      },
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1400&h=600&fit=crop", alt: "Film Still 1", caption: "The Garden Dome - Final Shot" },
          { url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400&h=600&fit=crop", alt: "Film Still 2", caption: "Establishing Shot - Before/After" },
          { url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1400&h=600&fit=crop", alt: "VFX Breakdown", caption: "VFX Breakdown Composite" },
          { url: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1400&h=600&fit=crop", alt: "Behind the Scenes", caption: "On-Set Reference" },
        ],
        autoplay: true,
        interval: 5000,
      },
      {
        type: "embed",
        platform: "vimeo",
        embedId: "987654321",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
        caption: "VFX Breakdown Reel",
      },
    ],
    tools: ["Nuke", "Houdini", "Maya", "Substance Painter", "DaVinci Resolve"],
    tags: ["film", "vfx", "compositing", "environment", "sci-fi"],
    client: "Lunar Pictures",
    year: 2024,
    featured: true,
    order: 11,
  },
  {
    id: "proj-012",
    title: "Echoes of Tomorrow",
    slug: "echoes-of-tomorrow",
    category: "film",
    description: "Creature design and animation for a feature film's dream sequence.",
    longDescription: `Creature Technical Director for a pivotal dream sequence in "Echoes of Tomorrow," a psychological thriller feature film. Responsible for bringing surreal, otherworldly beings to life through design, modeling, and animation.

The sequence required creatures that felt both familiar and deeply unsettling, drawing from deep sea life and insect anatomy while maintaining an ethereal quality.

Technical achievements:
- Procedural tentacle system with 100+ independent appendages
- Bioluminescent shader development
- Real-time performance capture integration
- Seamless transition effects between creature forms`,
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.dramatic,
    thumbnailAspectRatio: 1.78,
    media: [
      {
        type: "video",
        url: SAMPLE_VIDEOS.dramatic,
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=675&fit=crop",
        caption: "Creature Animation Test",
        autoplay: false,
        loop: true,
      },
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&h=788&fit=crop", alt: "Creature Design", caption: "Final Creature Design" },
          { url: "https://images.unsplash.com/photo-1559583109-3e7968136c99?w=1400&h=788&fit=crop", alt: "Concept Sketches", caption: "Early Concept Exploration" },
          { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=788&fit=crop", alt: "Wireframe", caption: "Topology and Rigging" },
        ],
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1400&h=900&fit=crop",
        alt: "Final Frame",
        caption: "Final Composite Frame from Dream Sequence",
      },
    ],
    tools: ["ZBrush", "Maya", "Houdini", "Nuke", "Arnold"],
    tags: ["film", "creature", "animation", "vfx", "feature-film"],
    client: "Warner Bros. Pictures",
    year: 2024,
    featured: true,
    order: 12,
  },
];
