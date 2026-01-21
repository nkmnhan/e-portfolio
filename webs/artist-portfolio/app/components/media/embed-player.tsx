"use client";

import { useState } from "react";
import Image from "next/image";
import { clsxMerge } from "@/lib/utils";
import { HiPlay, HiExternalLink } from "react-icons/hi";
import { SiYoutube, SiVimeo, SiSketchfab } from "react-icons/si";
import type { EmbedMedia } from "@/lib/types";

interface EmbedPlayerProps {
  media: EmbedMedia;
  aspectRatio?: "video" | "square";
}

export function EmbedPlayer({ media, aspectRatio = "video" }: EmbedPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
  };

  const getEmbedUrl = () => {
    switch (media.platform) {
      case "youtube":
        return `https://www.youtube.com/embed/${media.embedId}?autoplay=1`;
      case "vimeo":
        return `https://player.vimeo.com/video/${media.embedId}?autoplay=1`;
      case "sketchfab":
        return `https://sketchfab.com/models/${media.embedId}/embed?autoplay=1&ui_controls=1&ui_infos=0`;
      default:
        return "";
    }
  };

  const getPlatformIcon = () => {
    switch (media.platform) {
      case "youtube":
        return <SiYoutube className="w-8 h-8" />;
      case "vimeo":
        return <SiVimeo className="w-8 h-8" />;
      case "sketchfab":
        return <SiSketchfab className="w-8 h-8" />;
    }
  };

  const getPlatformColor = () => {
    switch (media.platform) {
      case "youtube":
        return "bg-red-600 hover:bg-red-700";
      case "vimeo":
        return "bg-blue-500 hover:bg-blue-600";
      case "sketchfab":
        return "bg-[#1caad9] hover:bg-[#0e8ebe]";
    }
  };

  const getPlatformUrl = () => {
    switch (media.platform) {
      case "youtube":
        return `https://www.youtube.com/watch?v=${media.embedId}`;
      case "vimeo":
        return `https://vimeo.com/${media.embedId}`;
      case "sketchfab":
        return `https://sketchfab.com/3d-models/${media.embedId}`;
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
        {!isLoaded ? (
          <>
            {/* Poster Image */}
            <Image
              src={media.poster}
              alt={`${media.platform} embed thumbnail`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/30" />

            {/* Play Button */}
            <button
              onClick={() => setIsLoaded(true)}
              className={clsxMerge(
                "absolute inset-0 flex items-center justify-center",
                "focus:outline-none"
              )}
              aria-label={`Play ${media.platform} embed`}
            >
              <div
                className={clsxMerge(
                  "p-4 rounded-full text-white",
                  "transform hover:scale-110",
                  "transition-transform duration-300",
                  "shadow-lg",
                  getPlatformColor()
                )}
              >
                {getPlatformIcon()}
              </div>
            </button>

            {/* Platform Badge */}
            <div
              className={clsxMerge(
                "absolute top-4 left-4",
                "px-3 py-1.5 rounded-full",
                "bg-black/60 backdrop-blur-sm",
                "text-white text-sm font-medium",
                "flex items-center gap-2"
              )}
            >
              {getPlatformIcon()}
              <span className="capitalize">{media.platform}</span>
            </div>

            {/* External Link */}
            <a
              href={getPlatformUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={clsxMerge(
                "absolute top-4 right-4",
                "p-2 rounded-full",
                "bg-black/60 backdrop-blur-sm",
                "text-white hover:text-[var(--color-primary)]",
                "opacity-0 group-hover:opacity-100",
                "transition-all duration-300"
              )}
              aria-label={`Open in ${media.platform}`}
            >
              <HiExternalLink className="w-5 h-5" />
            </a>
          </>
        ) : (
          /* Embedded iframe */
          <iframe
            src={getEmbedUrl()}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={`${media.platform} embed`}
          />
        )}
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
