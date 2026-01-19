// Project Types - Rich Media Portfolio Items

export type ProjectCategory =
  | "character"
  | "environment"
  | "concept-art"
  | "animation"
  | "vfx"
  | "game-art"
  | "film";

// Media Types (Discriminated Union)
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

export type MediaItem =
  | ImageMedia
  | VideoMedia
  | CarouselMedia
  | Model3DMedia
  | EmbedMedia;

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  thumbnail: string;
  thumbnailType: "image" | "video";
  thumbnailVideo?: string;
  thumbnailAspectRatio?: number; // Width/Height ratio for masonry grids
  media: MediaItem[];
  tools: string[];
  tags: string[];
  client: string;
  year: number;
  featured: boolean;
  order: number;
}

// Category reference for filters
export interface Category {
  id: ProjectCategory;
  name: string;
  icon: string;
}
