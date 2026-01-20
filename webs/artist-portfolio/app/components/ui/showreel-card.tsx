import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import type { Showreel } from "@/lib/types";
import { HiPlay } from "react-icons/hi";
import { Badge } from "./badge";

interface ShowreelCardProps {
  showreel: Showreel;
  priority?: boolean;
}

export function ShowreelCard({ showreel, priority = false }: ShowreelCardProps) {
  return (
    <div
      className={clsxMerge(
        "group relative overflow-hidden rounded-xl",
        "bg-[var(--color-surface)]",
        "border border-[var(--color-border)]",
        "hover:border-[var(--color-border-hover)]",
        "transition-all duration-300"
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={showreel.thumbnail}
          alt={showreel.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />

        {/* Overlay */}
        <div
          className={clsxMerge(
            "absolute inset-0",
            "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
            "opacity-60 group-hover:opacity-80",
            "transition-opacity duration-300"
          )}
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={clsxMerge(
              "rounded-full",
              "bg-[var(--color-primary)] text-white",
              "transform group-hover:scale-110",
              "transition-transform duration-300",
              "shadow-lg shadow-[var(--color-primary)]/30"
            )}
          >
            <HiPlay className="w-8 h-8" />
          </div>
        </div>

        {/* Duration */}
        <Badge
          variant="dark"
          size="sm"
          rounded="md"
          className="absolute bottom-3 right-3"
        >
          {showreel.duration}
        </Badge>

        {/* Year Badge */}
        <Badge
          variant="primary"
          size="sm"
          rounded="md"
          className="absolute top-3 left-3 backdrop-blur-sm"
        >
          {showreel.year}
        </Badge>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors">
          {showreel.title}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
          {showreel.description}
        </p>

        {/* Breakdown Preview */}
        {showreel.breakdown && showreel.breakdown.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-muted)] mb-2">
              {showreel.breakdown.length} clips included
            </p>
            <div className="flex flex-wrap gap-1.5">
              {showreel.breakdown.slice(0, 3).map((item, index) => (
                <Badge key={index} variant="surface" size="sm" rounded="md">
                  {item.role}
                </Badge>
              ))}
              {showreel.breakdown.length > 3 && (
                <span className="px-2 py-1 text-xs text-[var(--color-text-muted)]">
                  +{showreel.breakdown.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
