"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { clsxMerge } from "@/lib/utils";
import type { Showreel } from "@/lib/types";
import { Badge } from "./badge";
import { VideoThumbnail } from "@/app/components/media/video-thumbnail";

interface ShowreelCardProps {
  showreel: Showreel;
  priority?: boolean;
}

/**
 * ShowreelCard - Card component for displaying showreel previews
 *
 * Features:
 * - Video thumbnail with hover/autoplay support (via VideoThumbnail)
 * - Duration and year badges
 * - Breakdown preview
 * - Clickable to showreel detail page
 * - Video play button for mobile (non-blocking)
 */
export function ShowreelCard({ showreel, priority = false }: Readonly<ShowreelCardProps>) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/showreels/${showreel.id}`);
  };

  return (
    <div
      className={clsxMerge(
        "group relative overflow-hidden rounded-xl",
        "bg-[var(--color-surface)]",
        "border border-[var(--color-border)]",
        "hover:border-[var(--color-border-hover)]",
        "transition-all duration-300 cursor-pointer"
      )}
      onClick={navigateToDetail}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigateToDetail();
        }
      }}
    >
      {/* Thumbnail with Video Preview */}
      <VideoThumbnail
        thumbnail={showreel.thumbnail}
        alt={showreel.title}
        video={showreel.videoUrl}
        aspectRatio="16/9"
        priority={priority}
        onHoverChange={setIsActive}
        onPlayingChange={setIsActive}
      >
        {/* Overlay - pointer-events-none to allow play button clicks */}
        <div
          className={clsxMerge(
            "absolute inset-0 pointer-events-none",
            "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
            "transition-opacity duration-300",
            isActive ? "opacity-80" : "opacity-60"
          )}
        />

        {/* Duration Badge */}
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
      </VideoThumbnail>

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
