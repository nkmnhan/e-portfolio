"use client";

import { ProjectInfo } from "@/app/work/data";
import IMAGE_URLS from "@/app/work/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { useProjectContext } from "./layout";
import BrandGallery from "@/app/components/brand-gallery";
import { clsxMerge } from "@/app/components/themes/utils";
import { textPrimary, textBody, textMuted, textWhite } from "@/app/components/themes/default-text";
import { bgPrimary } from "@/app/components/themes/default-bg";

const posterContainer = "relative z-10 transition-all duration-700 ease-in-out w-full mx-auto flex flex-col items-center justify-center rounded-xl overflow-hidden";
const posterImage = "object-cover rounded-xl transition-all duration-700 shadow-2xl";
const posterTitle = clsxMerge(
  "mt-6 text-2xl sm:text-3xl font-bold text-center transition-opacity duration-700 z-20 relative",
  textWhite
);
const scrollBtn = "absolute bottom-8 p-4 left-1/2 bg-black/50 backdrop-blur-sm rounded-full text-white transform -translate-x-1/2 transition-all duration-500 animate-bounce";
const closeBtn = "fixed bottom-8 right-8 z-10 p-4 bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-500 hover:bg-black/70 animate-bounce";

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { setProjectId, isCinematicMode, setIsCinematicMode } = useProjectContext();
  const [project, setProject] = useState<ProjectInfo | null>(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      const currentIndex = IMAGE_URLS.findIndex(
        (item) => item.id === resolvedParams.slug
      );

      if (currentIndex !== -1) {
        setProjectId(IMAGE_URLS[currentIndex].id);
        setProject(IMAGE_URLS[currentIndex]);
      }
    };
    getParams();
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsCinematicMode(false);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  if (!project) {
    return (
      <div className={clsxMerge("p-8 text-center", textMuted)}>
        Project not found.
      </div>
    );
  }

  return (
    <div className={clsxMerge("relative w-full overflow-x-hidden", bgPrimary)}>
      {/* Full Screen Poster Section */}
      <div
        className={clsxMerge(
          "relative transition-all duration-700 ease-in-out flex items-center justify-center overflow-hidden",
          isCinematicMode ? "h-screen bg-black" : "h-[60vh] min-h-[400px]"
        )}
      >
        {/* Cinema mode background overlay */}
        <div
          className={clsxMerge(
            "absolute inset-0 transition-all duration-700 pointer-events-none z-0",
            isCinematicMode ? "bg-black" : ""
          )}
        />
        <div
          className={clsxMerge(
            posterContainer,
            isCinematicMode ? "max-w-3xl aspect-[16/7]" : "max-w-5xl aspect-video"
          )}
        >
          <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden z-0">
            <Image
              src={project.poster}
              alt={project.title || `Project image ${project.id}`}
              fill
              className={posterImage}
              sizes="(max-width: 768px) 100vw, 100vw"
              priority
            />
          </div>
          {/* Project Title below poster in cinema mode */}
          <h2
            className={clsxMerge(
              posterTitle,
              isCinematicMode
                ? "opacity-100"
                : "opacity-0 pointer-events-none select-none"
            )}
          >
            {project.title}
          </h2>
        </div>

        {/* Scroll Down Icon */}
        {isCinematicMode && (
          <button
            className={scrollBtn}
            onClick={() => setIsCinematicMode(false)}
            aria-label="Scroll down"
          >
            <AiFillDownCircle className="w-8 h-8" />
          </button>
        )}

        {/* Close Icon */}
        {!isCinematicMode && (
          <button
            className={closeBtn}
            onClick={() => setIsCinematicMode(true)}
            aria-label="Scroll up"
          >
            <AiFillUpCircle className="w-8 h-8" />
          </button>
        )}
      </div>
      {/* Project Details Section */}
      <div className="w-full">
        <div className={clsxMerge("container mx-auto px-4 sm:px-8 py-8 sm:py-16 max-w-4xl")}>
          <div className="text-center space-y-4 sm:space-y-8">
            <h1 className={clsxMerge("text-2xl sm:text-4xl font-bold px-2", textPrimary)}>
              {project.title}
            </h1>
            <div className={clsxMerge("text-xs sm:text-sm space-x-2 sm:space-x-4", textMuted)}>
              <span>ID: {project.id}</span>
              <span>•</span>
              <span>Type: {project.type}</span>
            </div>
            <p className={clsxMerge("text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2", textBody)}>
              {project.description}
            </p>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <BrandGallery src={[]} />
            </div>
            <div className={clsxMerge("flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-xs sm:text-sm pt-4", textMuted)}>
              <span>Created: {project.createddate}</span>
              <span>Updated: {project.updateddate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
