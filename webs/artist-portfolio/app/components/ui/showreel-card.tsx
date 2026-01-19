import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import type { Showreel, Artist } from "@/lib/data";
import { HiPlay, HiClock } from "react-icons/hi";

interface ShowreelCardProps {
  showreel: Showreel;
  artist: Artist;
  priority?: boolean;
}

export function ShowreelCard({ showreel, artist, priority = false }: ShowreelCardProps) {
  return (
    <div
      className={clsxMerge(
        "group relative overflow-hidden rounded-xl",
        "bg-[var(--color-surface)]",
        "border border-[var(--color-border)]",
        "card-hover"
      )}
    >
      {/* Thumbnail with play overlay */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={showreel.thumbnail}
          alt={showreel.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

        {/* Play button */}
        <div
          className={clsxMerge(
            "absolute inset-0 flex items-center justify-center"
          )}
        >
          <div
            className={clsxMerge(
              "p-4 rounded-full",
              "bg-[var(--color-primary)] text-white",
              "transform group-hover:scale-110 transition-transform",
              "shadow-lg"
            )}
          >
            <HiPlay className="w-8 h-8 ml-1" />
          </div>
        </div>

        {/* Duration badge */}
        <div
          className={clsxMerge(
            "absolute bottom-3 right-3",
            "flex items-center gap-1 px-2 py-1 rounded",
            "bg-black/70 text-white text-sm"
          )}
        >
          <HiClock className="w-4 h-4" />
          <span>{showreel.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Artist avatar */}
          <Image
            src={artist.avatar}
            alt={artist.name}
            width={40}
            height={40}
            className="rounded-full object-cover flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[var(--color-text)] truncate">
              {showreel.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              {artist.name}
            </p>
          </div>
        </div>

        <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-2">
          {showreel.description}
        </p>

        <div className="mt-3 text-xs text-[var(--color-text-muted)]">
          {showreel.year}
        </div>
      </div>
    </div>
  );
}
