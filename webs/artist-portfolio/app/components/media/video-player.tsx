"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import { HiPlay, HiPause, HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import type { VideoMedia } from "@/lib/types";

interface VideoPlayerProps {
  media: VideoMedia;
  aspectRatio?: "video" | "square" | "portrait";
  videoBufferTimeout?: number;
}

export function VideoPlayer({
  media,
  aspectRatio = "video",
  videoBufferTimeout = 5000,
}: Readonly<VideoPlayerProps>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(media.muted ?? true);
  const [showPoster, setShowPoster] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bufferTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  // Video buffering detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleWaiting = () => {
      // Clear existing timeout to prevent stacking
      if (bufferTimeoutRef.current) {
        clearTimeout(bufferTimeoutRef.current);
      }
      bufferTimeoutRef.current = setTimeout(() => {
        setIsBuffering(true);
      }, videoBufferTimeout);
    };

    const handleBufferingComplete = () => {
      if (bufferTimeoutRef.current) {
        clearTimeout(bufferTimeoutRef.current);
        bufferTimeoutRef.current = null;
      }
      setIsBuffering(false);
    };

    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleBufferingComplete);
    video.addEventListener("playing", handleBufferingComplete);

    return () => {
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleBufferingComplete);
      video.removeEventListener("playing", handleBufferingComplete);
      if (bufferTimeoutRef.current) {
        clearTimeout(bufferTimeoutRef.current);
      }
    };
  }, [videoBufferTimeout]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
      setIsPlaying(true);
      setShowPoster(false);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group">
      <div
        className={clsxMerge(
          "relative overflow-hidden rounded-lg bg-black",
          aspectClasses[aspectRatio]
        )}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          src={media.url}
          loop={media.loop}
          muted={isMuted}
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => !media.loop && setIsPlaying(false)}
        >
          <track kind="captions" />
        </video>

        {/* Poster Overlay */}
        {showPoster && (
          <div className="absolute inset-0">
            <Image
              src={media.poster}
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        )}

        {/* Play Button (centered, visible when not playing) */}
        {!isPlaying && !isBuffering && (
          <button
            onClick={handlePlay}
            className={clsxMerge(
              "absolute inset-0 flex items-center justify-center",
              "focus:outline-none"
            )}
            aria-label="Play video"
          >
            <div
              className={clsxMerge(
                "p-4 rounded-full",
                "bg-[var(--color-primary)] text-white",
                "transform hover:scale-110",
                "transition-transform duration-300",
                "shadow-lg shadow-[var(--color-primary)]/30"
              )}
            >
              <HiPlay className="w-8 h-8" />
            </div>
          </button>
        )}

        {/* Buffering Indicator */}
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              <p className="text-white text-sm font-medium">Loading video...</p>
            </div>
          </div>
        )}

        {/* Controls Bar */}
        <div
          className={clsxMerge(
            "absolute bottom-0 inset-x-0",
            "p-4 flex items-center justify-between",
            "bg-gradient-to-t from-black/80 to-transparent",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-300"
          )}
        >
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className={clsxMerge(
              "p-2 rounded-full",
              "bg-white/10 backdrop-blur-sm",
              "text-white hover:bg-white/20",
              "transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            )}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <HiPause className="w-5 h-5" />
            ) : (
              <HiPlay className="w-5 h-5" />
            )}
          </button>

          {/* Volume */}
          <button
            onClick={toggleMute}
            className={clsxMerge(
              "p-2 rounded-full",
              "bg-white/10 backdrop-blur-sm",
              "text-white hover:bg-white/20",
              "transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            )}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <HiVolumeOff className="w-5 h-5" />
            ) : (
              <HiVolumeUp className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Caption */}
      {media.caption && (
        <p className="mt-3 text-sm text-[var(--color-text-muted)] text-center">
          {media.caption}
        </p>
      )}
    </div>
  );
}
