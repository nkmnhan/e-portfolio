import Image from "next/image";
import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import type { Artwork } from "@/lib/data";
import { HiPlay } from "react-icons/hi";

interface ArtworkCardProps {
  artwork: Artwork;
  artistSlug: string;
  priority?: boolean;
}

export function ArtworkCard({ artwork, artistSlug, priority = false }: ArtworkCardProps) {
  const hasVideo = !!artwork.videoUrl;

  return (
    <Link
      href={`/artists/${artistSlug}/${artwork.slug}`}
      className={clsxMerge(
        "group relative block overflow-hidden rounded-lg",
        "bg-[var(--color-surface)]",
        "card-hover artwork-card"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={artwork.thumbnail}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />

        {/* Overlay */}
        <div className="artwork-overlay" />

        {/* Video indicator */}
        {hasVideo && (
          <div
            className={clsxMerge(
              "absolute top-3 right-3",
              "p-2 rounded-full",
              "bg-[var(--color-bg)]/80 backdrop-blur-sm",
              "text-[var(--color-primary)]"
            )}
          >
            <HiPlay className="w-4 h-4" />
          </div>
        )}

        {/* Content overlay */}
        <div
          className={clsxMerge(
            "absolute inset-x-0 bottom-0 p-4",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300"
          )}
        >
          <h3 className="font-semibold text-white mb-1">{artwork.title}</h3>
          <p className="text-sm text-white/70 line-clamp-2">
            {artwork.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {artwork.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={clsxMerge(
                  "px-2 py-0.5 text-xs rounded-full",
                  "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
