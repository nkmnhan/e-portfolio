// Character Projects
import type { Project } from "@/lib/types";
import { SAMPLE_VIDEOS, SAMPLE_YOUTUBE, SAMPLE_VIMEO } from "../videos";
import { SKETCHFAB_MODELS } from "../sketchfab-models";

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

The design process started with quick sketches, moved to a detailed concept, and then into ZBrush for high-poly sculpting. The final game-ready mesh was created in Maya with hand-painted details in Substance Painter.

This character has been featured in multiple industry publications and won the 'Best Character Design' award at the 2024 Digital Artist Awards.`,
    thumbnail: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=800&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.abstract3d,
    thumbnailAspectRatio: 0.75,
    media: [
      {
        type: "media-carousel",
        items: [
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=1600&fit=crop", 
            alt: "Cyber Ronin - Front View", 
            caption: "Front View - Final Render",
            duration: 6
          },
          { 
            type: "sketchfab",
            embedId: SKETCHFAB_MODELS.characters.scifiGirl.id,
            poster: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=675&fit=crop",
            caption: "Interactive 3D Model - Rotate & Zoom"
          },
          { 
            type: "video",
            videoUrl: SAMPLE_VIDEOS.abstract3d,
            poster: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=1600&fit=crop",
            caption: "360° Turntable Animation",
            loop: true
          },
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1600&fit=crop", 
            alt: "Cyber Ronin - Detail", 
            caption: "Close-up - Cybernetic Components",
            duration: 5
          },
          { 
            type: "youtube",
            embedId: SAMPLE_YOUTUBE.blender,
            poster: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=675&fit=crop",
            caption: "Creation Process Timelapse"
          },
        ],
        autoplay: true,
        caption: "Swipe to explore all angles and details"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1400&h=900&fit=crop",
        alt: "Texture Breakdown",
        caption: "PBR Texture Maps Breakdown - Albedo, Normal, Roughness, Metallic, Emissive",
      },
      {
        type: "carousel",
        images: [
          { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop", alt: "Wireframe View", caption: "Topology - 65k Tris" },
          { url: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=800&fit=crop", alt: "Concept Art", caption: "Initial Concept Design" },
          { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop", alt: "Sculpt Detail", caption: "High-Poly ZBrush Sculpt" },
        ],
        autoplay: true,
        interval: 4000,
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
    longDescription: `The Forest Spirit was designed for an indie animated short exploring themes of nature and technology. The character needed to feel ancient yet alive, with bioluminescent elements that would animate beautifully.

Design Philosophy:
The spirit embodies the forest itself - roots for legs, branches for arms, and a face that shifts between human and tree-like qualities. The bioluminescence serves both as a lighting source in dark forest scenes and as an emotional indicator.

Technical Details:
- Organic ZBrush sculpting workflow
- Custom bioluminescent shader in Arnold
- Real-time subsurface scattering for translucent elements
- Procedural moss and lichen textures

The character was rendered at 4K resolution for cinema projection and received praise for its innovative design at multiple film festivals.`,
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=800&fit=crop",
    thumbnailType: "image",
    thumbnailAspectRatio: 0.75,
    media: [
      {
        type: "media-carousel",
        items: [
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=1600&fit=crop", 
            alt: "Forest Spirit - Hero Shot", 
            caption: "Final Hero Render - 4K",
            duration: 7
          },
          { 
            type: "vimeo",
            embedId: SAMPLE_VIMEO.cosmos,
            poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=675&fit=crop",
            caption: "Animation Test - Bioluminescent Sequence"
          },
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=800&fit=crop", 
            alt: "Forest Spirit - Environment", 
            caption: "In Natural Environment",
            duration: 6
          },
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop", 
            alt: "Forest Spirit - Concept", 
            caption: "Original Concept Art",
            duration: 5
          },
        ],
        autoplay: true,
        caption: "Mystical creature design with interactive elements"
      },
      {
        type: "video",
        url: SAMPLE_VIDEOS.nature,
        poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=800&fit=crop",
        caption: "Lighting & Shader Breakdown",
        autoplay: false,
        loop: true,
      },
    ],
    tools: ["ZBrush", "KeyShot", "Photoshop", "Blender", "Arnold"],
    tags: ["creature", "fantasy", "organic", "film", "sculpt"],
    client: "Indie Film Studio - Moonlight Tales",
    year: 2024,
    featured: true,
    order: 2,
  },
  {
    id: "proj-013",
    title: "Sci-Fi Soldier Squad",
    slug: "scifi-soldier-squad",
    category: "character",
    description: "Complete character lineup for a military sci-fi shooter. 6 distinct character classes with modular armor systems.",
    longDescription: `Created a complete cast of playable characters for "Orbital Strike," a tactical sci-fi shooter. Each character represents a different combat role with unique silhouettes and equipment loadouts.

The modular armor system allows for 100+ customization combinations per character while maintaining visual cohesion across the squad. All characters share the same base rig for animation efficiency.

Character Classes:
- Heavy Assault: Tank role with powered exoskeleton
- Infiltrator: Stealth specialist with active camo
- Medic: Support role with healing drones
- Engineer: Tech specialist with deployable turrets
- Sniper: Long-range precision with tactical visor
- Commander: Leadership buff with holographic displays

Technical Achievements:
- Shared modular rig system across all characters
- LOD system: 80k, 40k, 20k, 10k triangle versions
- Real-time cloth simulation for capes and belts
- Weapon attachment system with 50+ weapons`,
    thumbnail: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=600&h=400&fit=crop",
    thumbnailType: "video",
    thumbnailVideo: SAMPLE_VIDEOS.scifi,
    thumbnailAspectRatio: 1.5,
    media: [
      {
        type: "media-carousel",
        items: [
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1400&h=800&fit=crop", 
            alt: "Full Squad Lineup", 
            caption: "All 6 Character Classes - Size Comparison",
            duration: 8
          },
          { 
            type: "video",
            videoUrl: SAMPLE_VIDEOS.scifi,
            poster: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1400&h=800&fit=crop",
            caption: "Gameplay Showcase - All Classes in Action",
            loop: true
          },
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1400&h=800&fit=crop", 
            alt: "Heavy Assault", 
            caption: "Heavy Assault Class - Tank Role",
            duration: 4
          },
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1400&h=800&fit=crop", 
            alt: "Infiltrator", 
            caption: "Infiltrator Class - Stealth Specialist",
            duration: 4
          },
          { 
            type: "image",
            url: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?w=1400&h=800&fit=crop", 
            alt: "Modular System", 
            caption: "Modular Armor System - 100+ Combinations",
            duration: 6
          },
          { 
            type: "youtube",
            embedId: SAMPLE_YOUTUBE.agent327,
            poster: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1200&h=675&fit=crop",
            caption: "Character Creation Pipeline Documentary"
          },
        ],
        autoplay: true,
        caption: "Complete tactical shooter character lineup"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=1400&h=900&fit=crop",
        alt: "Customization Options",
        caption: "Armor Customization System - Helmet, Chest, Arms, Legs Variants",
      },
    ],
    tools: ["Maya", "ZBrush", "Substance Painter", "Marmoset Toolbag", "Unreal Engine 5"],
    tags: ["character", "sci-fi", "game-ready", "modular", "squad"],
    client: "Apex Interactive Studios",
    year: 2024,
    featured: true,
    order: 13,
  },
];
