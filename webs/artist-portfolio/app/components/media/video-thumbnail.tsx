"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { clsxMerge } from "@/lib/utils";
import { HiPlay, HiPause } from "react-icons/hi";

export type AspectRatio = "4/3" | "16/9" | "1/1" | "3/4" | "auto";

interface VideoThumbnailProps {
  /** Static thumbnail image URL */
  thumbnail: string;
  /** Alt text for the image */
  alt: string;
  /** Optional video URL for animated preview */
  video?: string;
  /** Aspect ratio of the media */
  aspectRatio?: AspectRatio;
  /** Custom aspect ratio value (used when aspectRatio is "auto") */
  customAspectRatio?: number;
  /** Priority loading for LCP images */
  priority?: boolean;
  /** Image sizes for responsive loading */
  sizes?: string;
  /** Additional class names for the container */
  className?: string;
  /** Children rendered inside the media container (badges, overlays) */
  children?: React.ReactNode;
  /** Callback when hover state changes */
  onHoverChange?: (isHovered: boolean) => void;
  /** Callback when playing state changes */
  onPlayingChange?: (isPlaying: boolean) => void;
  /** Video buffering timeout in ms (default: 5000) for slow connections */
  videoBufferTimeout?: number;
}

const aspectRatioClasses: Record<AspectRatio, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "auto": "", // Uses customAspectRatio via style
};

/**
 * VideoThumbnail - Reusable media component with video preview support
 *
 * Features:
 * - Static image with optional video overlay
 * - Desktop: Video plays on hover
 * - Mobile: Video autoplays when 50% visible (Intersection Observer)
 * - Mobile: Manual play/pause button
 */
export function VideoThumbnail({
  thumbnail,
  alt,
  video,
  aspectRatio = "16/9",
  customAspectRatio,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className,
  children,
  onHoverChange,
  onPlayingChange,
  videoBufferTimeout = 5000,
}: Readonly<VideoThumbnailProps>) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bufferTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasVideo = Boolean(video);

  // Detect if device lacks hover capability (true mobile/tablet)
  useEffect(() => {
    const hoverQuery = globalThis.matchMedia("(hover: hover)");

    const checkHoverCapability = () => {
      setIsTouchDevice(!hoverQuery.matches);
    };

    checkHoverCapability();
    hoverQuery.addEventListener("change", checkHoverCapability);

    return () => {
      hoverQuery.removeEventListener("change", checkHoverCapability);
    };
  }, []);

  // Intersection Observer for auto-play on scroll (mobile only)
  useEffect(() => {
    if (!hasVideo || !containerRef.current || !isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
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
      onPlayingChange?.(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      onPlayingChange?.(false);
    }
  }, [isInView, hasVideo, isTouchDevice, onPlayingChange]);

  // Video readiness and buffering detection
  useEffect(() => {
    const video = videoRef.current;
    if (!hasVideo || !video) return;

    const handleWaiting = () => {
      // Clear existing timeout to prevent stacking
      if (bufferTimeoutRef.current) {
        clearTimeout(bufferTimeoutRef.current);
      }
      bufferTimeoutRef.current = setTimeout(() => {
        setIsBuffering(true);
      }, videoBufferTimeout);
    };

    const handleCanPlay = () => {
      if (bufferTimeoutRef.current) {
        clearTimeout(bufferTimeoutRef.current);
        bufferTimeoutRef.current = null;
      }
      setIsBuffering(false);
    };

    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handleCanPlay);

    return () => {
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handleCanPlay);
      if (bufferTimeoutRef.current) {
        clearTimeout(bufferTimeoutRef.current);
      }
    };
  }, [hasVideo, videoBufferTimeout]);

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    setIsHovered(true);
    onHoverChange?.(true);
    if (hasVideo && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      onPlayingChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setIsHovered(false);
    onHoverChange?.(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      onPlayingChange?.(false);
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
        onPlayingChange?.(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
        onPlayingChange?.(true);
      }
    },
    [hasVideo, isPlaying, onPlayingChange]
  );

  // For "auto" aspect ratio, calculate padding-bottom from customAspectRatio
  const getAutoAspectStyle = () => {
    if (aspectRatio === "auto" && customAspectRatio) {
      return { paddingBottom: `${(1 / customAspectRatio) * 100}%` };
    }
    if (aspectRatio === "auto") {
      return { paddingBottom: "75%" }; // Default to 4:3 if no ratio specified
    }
    return undefined;
  };

  const autoAspectStyle = getAutoAspectStyle();

  const showVideo = isHovered || isPlaying;

  return (
    <div
      ref={containerRef}
      className={clsxMerge(
        "relative overflow-hidden",
        aspectRatioClasses[aspectRatio],
        className
      )}
      style={autoAspectStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={alt}
    >
      {/* Static Thumbnail Image */}
      <Image
        src={thumbnail}
        alt={alt}
        fill
        sizes={sizes}
        className={clsxMerge(
          "object-cover transition-all duration-500",
          "group-hover:scale-105",
          hasVideo && showVideo ? "opacity-0" : "opacity-100"
        )}
        priority={priority}
      />

      {/* Video - only render if it's being shown or preloading */}
      {hasVideo && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          className={clsxMerge(
            "absolute inset-0 w-full h-full object-cover",
            "transition-opacity duration-300",
            showVideo ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Buffering Indicator - shows during video load/buffering */}
      {hasVideo && isBuffering && showVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            <p className="text-xs text-white/70">Loading...</p>
          </div>
        </div>
      )}

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
            "min-w-11 min-h-11"
          )}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          disabled={isBuffering && !isPlaying}
        >
          {isPlaying ? <HiPause className="w-5 h-5" /> : null}
          {!isPlaying && isBuffering ? (
            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          ) : null}
          {!isPlaying && !isBuffering ? <HiPlay className="w-5 h-5" /> : null}
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
            isHovered && !isBuffering ? "scale-110" : "scale-100"
          )}
          aria-label={isBuffering ? "Video loading" : "Video available"}
        >
          {isBuffering ? (
            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          ) : (
            <HiPlay className="w-4 h-4" />
          )}
        </div>
      )}

      {/* Children (badges, overlays, etc.) */}
      {children}
    </div>
  );
}
