"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback, memo } from "react";
import { clsxMerge } from "@/lib/utils";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { MediaCarouselMedia, MediaCarouselItem } from "@/lib/types";
import { useTouchDevice } from "./hooks/use-touch-device";

interface MediaCarouselProps {
  media: MediaCarouselMedia;
  aspectRatio?: "video" | "square" | "portrait";
}

export function MediaCarousel({
  media,
  aspectRatio = "video",
}: Readonly<MediaCarouselProps>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(media.autoplay ?? true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [showCountdownWarning, setShowCountdownWarning] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  
  const isTouchDevice = useTouchDevice();
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const interactionResumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  
  const { items } = media;
  const currentItem = items[currentIndex];

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  // Get duration for current item
  const getCurrentDuration = useCallback(() => {
    if (currentItem.duration) return currentItem.duration * 1000;
    
    const baseInterval = media.interval ?? 5000;
    const timingMultiplier = isTouchDevice ? 1.5 : 1;
    
    if (currentItem.type === "video" || currentItem.type === "youtube" || 
        currentItem.type === "vimeo" || currentItem.type === "sketchfab") {
      return 10000 * timingMultiplier;
    }
    return baseInterval * timingMultiplier;
  }, [currentItem, media.interval, isTouchDevice]);

  // Check if first visit for swipe hint
  useEffect(() => {
    if (isTouchDevice && items.length > 1) {
      const hasSeenHint = localStorage.getItem("mediaCarouselSwipeHintSeen");
      if (!hasSeenHint) {
        setShowSwipeHint(true);
        setTimeout(() => {
          setShowSwipeHint(false);
          localStorage.setItem("mediaCarouselSwipeHintSeen", "true");
        }, 3000);
      }
    }
  }, [isTouchDevice, items.length]);

  // Preload adjacent images
  useEffect(() => {
    const preloadImage = (index: number) => {
      const item = items[index];
      if (item?.type === "image" && item.url) {
        const img = document.createElement("img");
        img.src = item.url;
      }
    };

    const nextIndex = (currentIndex + 1) % items.length;
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    
    preloadImage(nextIndex);
    preloadImage(prevIndex);
  }, [currentIndex, items]);

  // Auto-advance logic
  useEffect(() => {
    if (!isAutoPlaying || hasUserInteracted) return;

    const duration = getCurrentDuration();
    const warningThreshold = 3000; // Show countdown at 3s remaining
    
    setTimeRemaining(duration);
    setShowCountdownWarning(false);

    // Countdown timer
    countdownIntervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        const newTime = prev - 100;
        if (newTime <= warningThreshold && newTime > 0) {
          setShowCountdownWarning(true);
        }
        return newTime;
      });
    }, 100);

    // Auto-advance timer - inline to avoid stale closure and skip hasUserInteracted
    autoPlayTimerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setShowCountdownWarning(false);
    }, duration);

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, [currentIndex, isAutoPlaying, hasUserInteracted, getCurrentDuration, items.length]);

  // Page Visibility API - pause on tab switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoPlaying(false);
        pauseAllVideos();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Video cleanup on unmount
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        video.pause();
        video.currentTime = 0;
      });
      videoRefs.current.clear();
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
      if (interactionResumeTimerRef.current) clearTimeout(interactionResumeTimerRef.current);
    };
  }, []);

  const pauseAllVideos = useCallback(() => {
    videoRefs.current.forEach((video) => {
      video.pause();
      video.currentTime = 0; // Reset to beginning
    });
  }, []);

  // Handle user interaction - pause auto-play and resume after 10s
  const handleUserInteraction = useCallback(() => {
    // Clear any existing resume timer
    if (interactionResumeTimerRef.current) {
      clearTimeout(interactionResumeTimerRef.current);
    }

    setHasUserInteracted(true);
    setShowCountdownWarning(false);

    // Resume auto-play after 10 seconds of inactivity
    interactionResumeTimerRef.current = setTimeout(() => {
      setHasUserInteracted(false);
    }, 10000);
  }, []);

  const goToPrevious = useCallback(() => {
    if (items.length <= 1) return; // Ignore if only one item
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    handleUserInteraction();
    pauseAllVideos();
  }, [items.length, handleUserInteraction, pauseAllVideos]);

  const goToNext = useCallback(() => {
    if (items.length <= 1) return; // Ignore if only one item
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    handleUserInteraction();
    pauseAllVideos();
  }, [items.length, handleUserInteraction, pauseAllVideos]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    handleUserInteraction();
    pauseAllVideos();
  }, [handleUserInteraction, pauseAllVideos]);

  // Keyboard navigation (arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not inside an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Touch/Swipe gesture handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;

    // Long press for pause (500ms)
    longPressTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(false);
      handleUserInteraction();
      // Haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, 500);
  }, [handleUserInteraction]);

  const handleTouchMove = useCallback(() => {
    // Cancel long press if user moves finger
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    // Cancel long press timer
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartXRef.current - touchEndX;
    const deltaY = touchStartYRef.current - touchEndY;

    // Only trigger swipe if horizontal movement is greater than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  }, [goToNext, goToPrevious]);

  // Progress bar click handler
  const handleProgressBarClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetIndex = Math.floor(percentage * items.length);
    goToSlide(Math.min(targetIndex, items.length - 1));
  }, [items.length, goToSlide]);

  // Pause auto-play when interacting with embeds
  const handleEmbedInteraction = useCallback(() => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      handleUserInteraction();
    }
  }, [isAutoPlaying, handleUserInteraction]);

  // Get media type label
  const getMediaTypeLabel = (type: MediaCarouselItem["type"]): string => {
    switch (type) {
      case "image": return "Image";
      case "video": return "Video";
      case "youtube": return "YouTube";
      case "vimeo": return "Vimeo";
      case "sketchfab": return "3D Model";
      default: return "Media";
    }
  };

  return (
    <div className="relative group">
      {/* Main Carousel Container */}
      <div
        className={clsxMerge(
          "relative overflow-hidden rounded-lg",
          aspectClasses[aspectRatio]
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item: MediaCarouselItem, index: number) => (
          <div
            key={`slide-${index}-${item.type}`}
            className={clsxMerge(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <MediaSlide 
              item={item} 
              isActive={index === currentIndex}
              videoRef={(el) => {
                if (el) videoRefs.current.set(index, el);
                else videoRefs.current.delete(index);
              }}
              onEmbedInteraction={handleEmbedInteraction}
            />
          </div>
        ))}

        {/* Swipe Hint (First Visit on Touch Devices) */}
        {showSwipeHint && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <div className="flex items-center gap-4 text-white animate-fadeIn">
              <HiChevronLeft className="w-8 h-8 animate-bounce-x-reverse" />
              <span className="text-lg font-medium">Swipe to navigate</span>
              <HiChevronRight className="w-8 h-8 animate-bounce-x" />
            </div>
          </div>
        )}

        {/* Navigation Arrows - Always visible on touch at 60% opacity */}
        {items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={clsxMerge(
                "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10",
                "w-11 h-11 min-w-11 min-h-11 p-0 rounded-full",
                "bg-black/60 backdrop-blur-sm",
                "text-white hover:bg-black/80",
                "flex items-center justify-center",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                "[@media(hover:none)]:opacity-60",
                "[@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100"
              )}
              aria-label="Previous slide"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className={clsxMerge(
                "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10",
                "w-11 h-11 min-w-11 min-h-11 p-0 rounded-full",
                "bg-black/60 backdrop-blur-sm",
                "text-white hover:bg-black/80",
                "flex items-center justify-center",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]",
                "[@media(hover:none)]:opacity-60",
                "[@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100"
              )}
              aria-label="Next slide"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Countdown Warning */}
        {showCountdownWarning && isAutoPlaying && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm animate-fadeIn">
              {Math.ceil(timeRemaining / 1000)}s
            </div>
          </div>
        )}

        {/* Edge Gradient Indicators (Mobile) - Show when more content exists */}
        {isTouchDevice && items.length > 1 && currentIndex > 0 && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
        )}
        {isTouchDevice && items.length > 1 && currentIndex < items.length - 1 && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Caption */}
      {(currentItem.caption || media.caption) && (
        <p className="mt-3 text-sm text-[var(--color-text-muted)] text-center">
          {currentItem.caption || media.caption}
        </p>
      )}

      {/* Slide Counter + Progress Bar */}
      {items.length > 1 && (
        <div className="mt-4 flex items-center gap-3">
          {/* Slide Counter */}
          <span className="flex-shrink-0 text-sm text-[var(--color-text-muted)] tabular-nums">
            {currentIndex + 1}/{items.length}
          </span>

          {/* Progress Bar - Responsive height & clickable */}
          <div
            className="flex-1 relative cursor-pointer group/progress"
            onClick={handleProgressBarClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleProgressBarClick(e as unknown as React.MouseEvent<HTMLDivElement>);
              }
            }}
            tabIndex={0}
            role="slider"
            aria-label="Carousel progress"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={items.length}
          >
            {/* Touch target area - 32px tall */}
            <div className="absolute inset-0 -top-3 -bottom-3" />

            <div className="relative h-1.5 md:h-1 bg-[var(--color-border)] rounded-full overflow-hidden">
              {items.map((_: MediaCarouselItem, index: number) => {
                const segmentWidth = 100 / items.length;
                const isActive = index === currentIndex;
                const isPast = index < currentIndex;

                return (
                  <div
                    key={`progress-${index}`}
                    className="absolute top-0 h-full transition-colors duration-300"
                    style={{
                      left: `${index * segmentWidth}%`,
                      width: `${segmentWidth}%`,
                    }}
                  >
                    <div
                      className={clsxMerge(
                        "h-full transition-all duration-300",
                        isPast && "bg-[var(--color-primary)]",
                        isActive && isAutoPlaying && "bg-[var(--color-primary)] animate-progress",
                        !isPast && !isActive && "bg-transparent"
                      )}
                      style={
                        isActive && isAutoPlaying
                          ? { animationDuration: `${getCurrentDuration()}ms` }
                          : undefined
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Thumbnail Strip - Swipeable on mobile, always visible */}
      {items.length > 1 && (
        <div
          className={clsxMerge(
            "flex gap-2 mt-4 px-4 py-2 overflow-x-auto",
            "scrollbar-thin",
            "[@media(hover:none)]:snap-x [@media(hover:none)]:snap-mandatory"
          )}
        >
          {items.map((item: MediaCarouselItem, index: number) => (
            <button
              key={`thumb-${index}-${item.type}`}
              onClick={() => goToSlide(index)}
              className={clsxMerge(
                "relative flex-shrink-0 w-20 h-14 rounded overflow-hidden",
                "ring-2 transition-all duration-300",
                "[@media(hover:none)]:snap-center",
                index === currentIndex
                  ? "ring-[var(--color-primary)]"
                  : "ring-transparent hover:ring-[var(--color-border-hover)]"
              )}
              aria-label={`Go to slide ${index + 1}`}
            >
              <ThumbnailPreview item={item} />
              {/* Media Type Badge */}
              <div className="absolute bottom-1 left-1 z-10">
                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-medium bg-black/70 backdrop-blur-sm text-white">
                  {getMediaTypeLabel(item.type)}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ARIA Live Region for Screen Readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {currentIndex + 1} of {items.length}
        {currentItem.caption && `: ${currentItem.caption}`}
        {currentItem.type !== "image" && ` (${getMediaTypeLabel(currentItem.type)})`}
      </div>
    </div>
  );
}

// Memoized slide renderer
const MediaSlide = memo(({
  item,
  isActive,
  videoRef,
  onEmbedInteraction
}: {
  item: MediaCarouselItem;
  isActive: boolean;
  videoRef?: (el: HTMLVideoElement | null) => void;
  onEmbedInteraction?: () => void;
}) => {
  // Internal ref for video auto-play
  const internalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Auto-play video when slide becomes active
  useEffect(() => {
    if (item.type === "video" && internalVideoRef.current) {
      if (isActive) {
        // Auto-play muted when slide becomes active
        internalVideoRef.current.play().catch(() => {
          // Ignore autoplay errors (browser policy)
        });
      } else {
        // Pause and reset when slide becomes inactive
        internalVideoRef.current.pause();
        internalVideoRef.current.currentTime = 0;
      }
    }
  }, [isActive, item.type]);

  // Combined ref callback
  const handleVideoRef = useCallback((el: HTMLVideoElement | null) => {
    internalVideoRef.current = el;
    videoRef?.(el);
  }, [videoRef]);

  switch (item.type) {
    case "image":
      return (
        <Image
          src={item.url ?? ""}
          alt={item.alt || "Carousel image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={isActive}
        />
      );

    case "video":
      return (
        <video
          ref={handleVideoRef}
          src={item.videoUrl}
          poster={item.poster}
          loop={item.loop ?? false}
          muted
          playsInline
          preload="metadata"
          controls
          className="w-full h-full object-cover"
        >
          <track kind="captions" />
        </video>
      );

    case "youtube":
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      return (
        <section
          onMouseEnter={onEmbedInteraction}
          onMouseLeave={onEmbedInteraction}
          onClick={onEmbedInteraction}
          aria-label="YouTube video player"
          className="w-full h-full"
        >
          <iframe
            src={`https://www.youtube.com/embed/${item.embedId}?autoplay=0`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          />
        </section>
      );

    case "vimeo":
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      return (
        <section
          onMouseEnter={onEmbedInteraction}
          onMouseLeave={onEmbedInteraction}
          onClick={onEmbedInteraction}
          aria-label="Vimeo video player"
          className="w-full h-full"
        >
          <iframe
            src={`https://player.vimeo.com/video/${item.embedId}?autoplay=0`}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo video"
          />
        </section>
      );

    case "sketchfab":
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      return (
        <section
          onMouseEnter={onEmbedInteraction}
          onMouseLeave={onEmbedInteraction}
          onClick={onEmbedInteraction}
          aria-label="Sketchfab 3D model viewer"
          className="w-full h-full"
        >
          <iframe
            src={`https://sketchfab.com/models/${item.embedId}/embed?autostart=0&ui_controls=1&ui_infos=0`}
            className="w-full h-full"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            title="Sketchfab 3D model"
          />
        </section>
      );

    default:
      return null;
  }
});

MediaSlide.displayName = "MediaSlide";

// Memoized thumbnail preview
const ThumbnailPreview = memo(({ item }: { item: MediaCarouselItem }) => {
  if (item.type === "image" && item.url) {
    return (
      <Image
        src={item.url}
        alt={item.alt || "Thumbnail"}
        fill
        className="object-cover"
        sizes="80px"
      />
    );
  }

  if ((item.type === "video" || item.type === "youtube" || 
       item.type === "vimeo" || item.type === "sketchfab") && item.poster) {
    return (
      <Image
        src={item.poster}
        alt="Video thumbnail"
        fill
        className="object-cover"
        sizes="80px"
      />
    );
  }

  return (
    <div className="w-full h-full bg-[var(--color-surface)] flex items-center justify-center">
      <span className="text-xs text-[var(--color-text-muted)]">
        {item.type}
      </span>
    </div>
  );
});

ThumbnailPreview.displayName = "ThumbnailPreview";
