import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import type { ImageMedia } from "@/lib/data";

interface ImageViewerProps {
  media: ImageMedia;
  priority?: boolean;
}

export function ImageViewer({ media, priority = false }: ImageViewerProps) {
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={media.url}
          alt={media.alt}
          width={media.width || 1200}
          height={media.height || 800}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={priority}
        />
      </div>

      {/* Caption */}
      {media.caption && (
        <figcaption className="mt-3 text-sm text-[var(--color-text-muted)] text-center">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
