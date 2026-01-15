"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { clsxMerge } from "@/app/components/themes/utils";
import AdaptiveImage from "./adaptive-image";

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  // Reset index when opening with new initialIndex
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Mount portal only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goToPrevious, goToNext]);

  if (!mounted || !isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  const lightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={clsxMerge(
            "fixed inset-0 z-[9999]",
            "flex items-center justify-center",
            "bg-black/95"
          )}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button - Always visible */}
          <button
            onClick={onClose}
            className={clsxMerge(
              "absolute top-4 right-4 z-10",
              "p-2 rounded-full",
              "bg-white/10 hover:bg-white/20",
              "text-white",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-white/50"
            )}
            aria-label="Close lightbox (Escape)"
          >
            <IoClose className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          {hasMultipleImages && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className={clsxMerge(
                "absolute left-4 top-1/2 -translate-y-1/2 z-10",
                "p-3 rounded-full",
                "bg-white/10 hover:bg-white/20",
                "text-white",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-white/50"
              )}
              aria-label="Previous image (Left Arrow)"
            >
              <IoChevronBack className="w-8 h-8" />
            </button>
          )}

          {/* Next Button */}
          {hasMultipleImages && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className={clsxMerge(
                "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                "p-3 rounded-full",
                "bg-white/10 hover:bg-white/20",
                "text-white",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-white/50"
              )}
              aria-label="Next image (Right Arrow)"
            >
              <IoChevronForward className="w-8 h-8" />
            </button>
          )}

          {/* Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={clsxMerge(
              "relative",
              "w-full h-full max-w-[90vw] max-h-[85vh]",
              "flex items-center justify-center"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <AdaptiveImage
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>

          {/* Image Info & Counter */}
          <div
            className={clsxMerge(
              "absolute bottom-4 left-1/2 -translate-x-1/2",
              "flex flex-col items-center gap-2",
              "text-white text-center"
            )}
          >
            {/* Title & Description */}
            {(currentImage.title || currentImage.description) && (
              <div className="max-w-lg px-4">
                {currentImage.title && (
                  <h3 className="text-lg font-semibold">{currentImage.title}</h3>
                )}
                {currentImage.description && (
                  <p className="text-sm text-white/80">{currentImage.description}</p>
                )}
              </div>
            )}

            {/* Counter */}
            {hasMultipleImages && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/60">
                  {currentIndex + 1} / {images.length}
                </span>
                {/* Dot indicators */}
                <div className="flex gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={clsxMerge(
                        "w-2 h-2 rounded-full",
                        "transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-white/50",
                        idx === currentIndex
                          ? "bg-white"
                          : "bg-white/30 hover:bg-white/50"
                      )}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Keyboard hints */}
            <div className="text-xs text-white/40 mt-2">
              ESC to close • Arrow keys to navigate
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(lightboxContent, document.body);
}
