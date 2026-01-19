"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { clsxMerge } from "@/lib/utils";
import type { Project } from "@/lib/data";
import { HiPlay, HiOutlineEye } from "react-icons/hi";
import { Badge } from "@/app/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  showCategory?: boolean;
}

export function ProjectCard({
  project,
  priority = false,
  showCategory = true,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.thumbnailType === "video" && project.thumbnailVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked - silently fail
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const hasVideo = project.thumbnailType === "video" && project.thumbnailVideo;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={clsxMerge(
        "group relative block overflow-hidden rounded-xl",
        "bg-[var(--color-surface)]",
        "border border-[var(--color-border)]",
        "hover:border-[var(--color-border-hover)]",
        "transition-all duration-300"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Static Thumbnail Image */}
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={clsxMerge(
            "object-cover transition-all duration-500",
            "group-hover:scale-105",
            hasVideo && isHovered ? "opacity-0" : "opacity-100"
          )}
          priority={priority}
        />

        {/* Hover Video */}
        {hasVideo && (
          <video
            ref={videoRef}
            src={project.thumbnailVideo}
            muted
            loop
            playsInline
            className={clsxMerge(
              "absolute inset-0 w-full h-full object-cover",
              "transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Gradient Overlay */}
        <div
          className={clsxMerge(
            "absolute inset-0",
            "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300"
          )}
        />

        {/* Video Indicator */}
        {hasVideo && (
          <div
            className={clsxMerge(
              "absolute top-3 right-3",
              "p-2 rounded-full",
              "bg-black/60 backdrop-blur-sm",
              "text-[var(--color-primary)]",
              "transition-all duration-300",
              isHovered ? "scale-110" : "scale-100"
            )}
          >
            <HiPlay className="w-4 h-4" />
          </div>
        )}

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

        {/* Hover Content */}
        <div
          className={clsxMerge(
            "absolute inset-x-0 bottom-0 p-5",
            "opacity-0 group-hover:opacity-100",
            "translate-y-2 group-hover:translate-y-0",
            "transition-all duration-300"
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

        {/* View Project Indicator */}
        <div
          className={clsxMerge(
            "absolute inset-0 flex items-center justify-center",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300"
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
      </div>

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
  );
}
