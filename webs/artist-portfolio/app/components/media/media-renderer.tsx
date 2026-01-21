"use client";

import dynamic from "next/dynamic";
import type { MediaItem } from "@/lib/types";
import { ImageViewer } from "./image-viewer";
import { VideoPlayer } from "./video-player";
import { ImageCarousel } from "./image-carousel";
import { EmbedPlayer } from "./embed-player";
import { MediaCarousel } from "./media-carousel";

// Dynamically import 3D viewer to avoid SSR issues
const Model3DViewer = dynamic(() => import("./model-3d-viewer").then(mod => mod.Model3DViewer), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-[var(--color-surface)] rounded-lg animate-pulse flex items-center justify-center">
      <span className="text-[var(--color-text-muted)]">Loading 3D Viewer...</span>
    </div>
  ),
});

interface MediaRendererProps {
  media: MediaItem;
  priority?: boolean;
}

export function MediaRenderer({ media, priority = false }: Readonly<MediaRendererProps>) {
  switch (media.type) {
    case "image":
      return <ImageViewer media={media} priority={priority} />;

    case "video":
      return <VideoPlayer media={media} />;

    case "carousel":
      return <ImageCarousel media={media} />;

    case "media-carousel":
      return <MediaCarousel media={media} />;

    case "embed":
      return <EmbedPlayer media={media} />;

    case "3d-model":
      return <Model3DViewer media={media} />;

    default:
      return null;
  }
}
