"use client";

import Image from "next/image";
import { useState } from "react";
import { clsxMerge } from "@/lib/utils";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import type { CarouselMedia } from "@/lib/data";

interface ImageCarouselProps {
  media: CarouselMedia;
  aspectRatio?: "video" | "square" | "portrait";
}

export function ImageCarousel({
  media,
  aspectRatio = "video",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images } = media;

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative group">
      {/* Main Image */}
      <div
        className={clsxMerge(
          "relative overflow-hidden rounded-lg",
          aspectClasses[aspectRatio]
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={clsxMerge(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={clsxMerge(
                "absolute left-4 top-1/2 -translate-y-1/2",
                "p-2 rounded-full",
                "bg-black/60 backdrop-blur-sm",
                "text-white hover:bg-black/80",
                "opacity-0 group-hover:opacity-100",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              )}
              aria-label="Previous image"
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className={clsxMerge(
                "absolute right-4 top-1/2 -translate-y-1/2",
                "p-2 rounded-full",
                "bg-black/60 backdrop-blur-sm",
                "text-white hover:bg-black/80",
                "opacity-0 group-hover:opacity-100",
                "transition-all duration-300",
                "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              )}
              aria-label="Next image"
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Slide Counter */}
        <div
          className={clsxMerge(
            "absolute top-4 right-4",
            "px-3 py-1 rounded-full",
            "bg-black/60 backdrop-blur-sm",
            "text-sm text-white"
          )}
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Caption */}
      {images[currentIndex]?.caption && (
        <p className="mt-3 text-sm text-[var(--color-text-muted)] text-center">
          {images[currentIndex].caption}
        </p>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsxMerge(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-[var(--color-primary)] w-6"
                  : "bg-[var(--color-border)] hover:bg-[var(--color-border-hover)]"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail Strip (for more than 3 images) */}
      {images.length > 3 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsxMerge(
                "relative flex-shrink-0 w-20 h-14 rounded overflow-hidden",
                "ring-2 transition-all duration-300",
                index === currentIndex
                  ? "ring-[var(--color-primary)]"
                  : "ring-transparent hover:ring-[var(--color-border-hover)]"
              )}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
