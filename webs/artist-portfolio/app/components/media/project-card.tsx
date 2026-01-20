"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { clsxMerge } from "@/lib/utils";
import type { Project } from "@/lib/types";
import { HiPlay, HiPause, HiOutlineEye } from "react-icons/hi";
import { Badge } from "@/app/components/ui/badge";

export type AspectRatio = "4/3" | "16/9" | "1/1" | "3/4" | "auto";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  showCategory?: boolean;
  aspectRatio?: AspectRatio;
}

const aspectRatioClasses: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "auto": "", // No fixed aspect ratio - for masonry
};

export function ProjectCard({
  project,
  priority = false,
  showCategory = true,
  aspectRatio = "4/3",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const hasVideo = project.thumbnailType === "video" && project.thumbnailVideo;

  // Detect touch/mobile device on mount
  useEffect(() => {
    const checkMobile = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isNarrowScreen = window.innerWidth < 1024; // lg breakpoint
      setIsTouchDevice(hasTouch || isNarrowScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for auto-play on scroll (mobile)
  useEffect(() => {
    if (!hasVideo || !cardRef.current || !isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% visible
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [hasVideo, isTouchDevice]);

  // Auto-play/pause based on viewport visibility (mobile only)
  useEffect(() => {
    if (!hasVideo || !videoRef.current || !isTouchDevice) return;

    if (isInView) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked - user needs to tap play button
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isInView, hasVideo, isTouchDevice]);

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
    if (hasVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // Mobile play/pause toggle
  const handlePlayToggle = useCallback(
    (e: React.MouseEvent) => {
      if (!hasVideo || !videoRef.current) return;
      e.preventDefault();
      e.stopPropagation();

      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    },
    [hasVideo, isPlaying]
  );

  // For "auto" aspect ratio, calculate padding-bottom from project's thumbnailAspectRatio
  const autoAspectStyle =
    aspectRatio === "auto" && project.thumbnailAspectRatio
      ? { paddingBottom: `${(1 / project.thumbnailAspectRatio) * 100}%` }
      : aspectRatio === "auto"
        ? { paddingBottom: "75%" } // Default to 4:3 if no ratio specified
        : undefined;

  // Show overlay when hovered (desktop) or playing (mobile)
  const showOverlay = isHovered || (isTouchDevice && isPlaying);

  return (
    <div ref={cardRef}>
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
        <div
          className={clsxMerge(
            "relative overflow-hidden",
            aspectRatioClasses[aspectRatio]
          )}
          style={autoAspectStyle}
        >
          {/* Static Thumbnail Image */}
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={clsxMerge(
              "object-cover transition-all duration-500",
              "group-hover:scale-105",
              hasVideo && (isHovered || isPlaying) ? "opacity-0" : "opacity-100"
            )}
            priority={priority}
          />

          {/* Video */}
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
                isHovered || isPlaying ? "opacity-100" : "opacity-0"
              )}
            />
          )}

          {/* Gradient Overlay */}
          <div
            className={clsxMerge(
              "absolute inset-0",
              "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
              "transition-opacity duration-300",
              showOverlay ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Mobile Play/Pause Button */}
          {hasVideo && isTouchDevice && (
            <button
              onClick={handlePlayToggle}
              className={clsxMerge(
                "absolute top-3 right-3 z-10",
                "w-10 h-10 rounded-full",
                "flex items-center justify-center",
                "bg-black/60 backdrop-blur-sm",
                "text-white",
                "transition-all duration-300",
                "active:scale-95",
                // Larger touch target
                "min-w-11 min-h-11"
              )}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <HiPause className="w-5 h-5" />
              ) : (
                <HiPlay className="w-5 h-5 ml-0.5" />
              )}
            </button>
          )}

          {/* Desktop Video Indicator (non-touch only) */}
          {hasVideo && !isTouchDevice && (
            <div
              className={clsxMerge(
                "absolute top-3 right-3",
                "w-8 h-8 rounded-full",
                "flex items-center justify-center",
                "bg-[var(--color-primary)] text-white",
                "transition-all duration-300",
                isHovered ? "scale-110" : "scale-100"
              )}
            >
              <HiPlay className="w-4 h-4 ml-0.5" />
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

          {/* Hover/Active Content */}
          <div
            className={clsxMerge(
              "absolute inset-x-0 bottom-0 p-5",
              "transition-all duration-300",
              showOverlay
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
          {!isTouchDevice && (
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
          )}
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
    </div>
  );
}
