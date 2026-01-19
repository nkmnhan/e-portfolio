import Image from "next/image";
import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import type { Artist } from "@/lib/data";
import { HiLocationMarker, HiBadgeCheck } from "react-icons/hi";

interface ArtistCardProps {
  artist: Artist;
  priority?: boolean;
}

const specializationColors: Record<Artist["specialization"], string> = {
  "3d-artist": "bg-[var(--color-primary)]/20 text-[var(--color-primary)]",
  "animation-artist": "bg-[var(--color-accent)]/20 text-[var(--color-accent)]",
  "concept-artist": "bg-[var(--color-warm)]/20 text-[var(--color-warm)]",
};

const specializationLabels: Record<Artist["specialization"], string> = {
  "3d-artist": "3D Artist",
  "animation-artist": "Animator",
  "concept-artist": "Concept Artist",
};

export function ArtistCard({ artist, priority = false }: ArtistCardProps) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className={clsxMerge(
        "group relative block overflow-hidden rounded-xl",
        "bg-[var(--color-surface)]",
        "border border-[var(--color-border)]",
        "card-hover"
      )}
    >
      {/* Cover Image */}
      <div className="relative h-32 overflow-hidden">
        <Image
          src={artist.coverImage}
          alt={`${artist.name} cover`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative px-4 pb-4 -mt-10">
        {/* Avatar */}
        <div className="relative w-20 h-20 mb-3">
          <Image
            src={artist.avatar}
            alt={artist.name}
            fill
            sizes="80px"
            className={clsxMerge(
              "rounded-full object-cover",
              "border-4 border-[var(--color-surface)]"
            )}
          />
          {artist.availableForWork && (
            <div
              className={clsxMerge(
                "absolute -bottom-1 -right-1",
                "p-1 rounded-full",
                "bg-[var(--color-success)]"
              )}
              title="Available for work"
            >
              <HiBadgeCheck className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="font-semibold text-lg text-[var(--color-text)] mb-1">
          {artist.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-2">
          {artist.title}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] mb-3">
          <HiLocationMarker className="w-3.5 h-3.5" />
          <span>{artist.location}</span>
        </div>

        {/* Specialization badge */}
        <span
          className={clsxMerge(
            "inline-block px-2.5 py-1 text-xs font-medium rounded-full",
            specializationColors[artist.specialization]
          )}
        >
          {specializationLabels[artist.specialization]}
        </span>

        {/* Short bio */}
        <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-2">
          {artist.shortBio}
        </p>
      </div>
    </Link>
  );
}
