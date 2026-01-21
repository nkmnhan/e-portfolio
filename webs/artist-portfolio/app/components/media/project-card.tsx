"use client";

import Link from "next/link";
import { useState } from "react";
import { clsxMerge } from "@/lib/utils";
import type { Project } from "@/lib/types";
import { HiOutlineEye } from "react-icons/hi";
import { Badge } from "@/app/components/ui/badge";
import { VideoThumbnail, type AspectRatio } from "./video-thumbnail";

export type { AspectRatio };

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  showCategory?: boolean;
  aspectRatio?: AspectRatio;
}

/**
 * ProjectCard - Card component for displaying project previews
 *
 * Features:
 * - Video thumbnail with hover/autoplay support (via VideoThumbnail)
 * - Category and tools badges
 * - Hover overlay with project details
 */
export function ProjectCard({
  project,
  priority = false,
  showCategory = true,
  aspectRatio = "4/3",
}: ProjectCardProps) {
  const [isActive, setIsActive] = useState(false);

  const hasVideo = project.thumbnailType === "video" && project.thumbnailVideo;

  return (
    <div>
      <Link
        href={`/projects/${project.slug}`}
        className={clsxMerge(
          "group relative block overflow-hidden rounded-xl",
          "bg-[var(--color-surface)]",
          "border border-[var(--color-border)]",
          "hover:border-[var(--color-border-hover)]",
          "transition-all duration-300"
        )}
      >
        {/* Media Container */}
        <VideoThumbnail
          thumbnail={project.thumbnail}
          alt={project.title}
          video={hasVideo ? project.thumbnailVideo : undefined}
          aspectRatio={aspectRatio}
          customAspectRatio={project.thumbnailAspectRatio}
          priority={priority}
          onHoverChange={setIsActive}
          onPlayingChange={setIsActive}
        >
          {/* Gradient Overlay - pointer-events-none to allow play button clicks */}
          <div
            className={clsxMerge(
              "absolute inset-0 pointer-events-none",
              "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
              "transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Category Badge */}
          {showCategory && (
            <Badge
              variant="dark"
              size="sm"
              className="absolute top-3 left-3 capitalize"
            >
              {project.category.replace("-", " ")}
            </Badge>
          )}

          {/* Hover/Active Content */}
          <div
            className={clsxMerge(
              "absolute inset-x-0 bottom-0 p-5",
              "transition-all duration-300",
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            )}
          >
            <h3 className="text-lg font-semibold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-white/80 line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-1">
              {project.tools.slice(0, 3).map((tool) => (
                <Badge key={tool} variant="primary" size="sm">
                  {tool}
                </Badge>
              ))}
              {project.tools.length > 3 && (
                <span className="px-2 py-0.5 text-xs text-white/60">
                  +{project.tools.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* View Project Indicator - Desktop only */}
          <div
            className={clsxMerge(
              "absolute inset-0 flex items-center justify-center",
              "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-300",
              "pointer-events-none"
            )}
          >
            <div
              className={clsxMerge(
                "px-4 py-2 rounded-lg",
                "bg-[var(--color-primary)] text-white",
                "font-medium text-sm",
                "flex items-center gap-2",
                "transform scale-90 group-hover:scale-100",
                "transition-transform duration-300"
              )}
            >
              <HiOutlineEye className="w-4 h-4" />
              View Project
            </div>
          </div>
        </VideoThumbnail>

        {/* Card Footer */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[var(--color-text-muted)]">
              {project.client}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
