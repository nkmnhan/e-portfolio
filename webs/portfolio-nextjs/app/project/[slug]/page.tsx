"use client";

import IMAGE_URLS from "@/app/work/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

export default function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      const foundProject = IMAGE_URLS.find(
        (item) => item.id === resolvedParams.slug
      );
      setProject(foundProject);
    };
    getParams();
  }, [params]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  if (!project) {
    return (
      <div className="p-8 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Full Screen Poster Section */}
      <div
        className={`relative transition-all duration-700 ease-in-out flex items-center justify-center overflow-hidden ${
          isScrolled
            ? "h-[60vh] min-h-[400px]"
            : "h-screen bg-black"
        }`}
      >
        {/* Cinema mode background overlay */}
        <div
          className={`absolute inset-0 transition-all duration-700 pointer-events-none z-0 ${
            isScrolled ? "" : "bg-black"
          }`}
        />
        <div
          className={`relative z-10 transition-all duration-700 ease-in-out w-full ${
            isScrolled ? "max-w-3xl aspect-[16/7]" : "max-w-5xl aspect-[16/9]"
          } mx-auto flex flex-col items-center justify-center rounded-xl overflow-hidden`}
        >
          <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden z-0">
            <Image
              src={project.poster}
              alt={project.title || `Project image ${project.id}`}
              fill
              className="object-cover rounded-xl transition-all duration-700 shadow-2xl"
              sizes="(max-width: 768px) 100vw, 100vw"
              priority
            />
          </div>
          {/* Project Title below poster in cinema mode */}
          <h2
            className={`mt-6 text-2xl sm:text-3xl font-bold text-white text-center transition-opacity duration-700 z-20 relative ${
              isScrolled
                ? "opacity-0 pointer-events-none select-none"
                : "opacity-100"
            }`}
          >
            {project.title}
          </h2>
        </div>

        {/* Scroll Down Icon */}
        {!isScrolled && (
          <button
            className={
              "absolute bottom-8 p-3 left-1/2 bg-black/50 backdrop-blur-sm rounded-full text-white transform -translate-x-1/2 transition-all duration-500 animate-bounce"
            }
            onClick={() => setIsScrolled(true)}
            aria-label="Scroll down"
          >
            <AiFillDownCircle className="w-8 h-8" />
          </button>
        )}

        {/* Close Icon */}
        {isScrolled && (
          <button
            className={
              "fixed bottom-6 right-6 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white transition-all duration-500 hover:bg-black/70 animate-bounce"
            }
            onClick={() => setIsScrolled(false)}
            aria-label="Scroll up"
          >
            <AiFillUpCircle className="w-8 h-8" />
          </button>
        )}
      </div>
      {/* Project Details Section */}
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 px-2">
              {project.title}
            </h1>
            <div className="text-xs sm:text-sm text-gray-500 space-x-2 sm:space-x-4">
              <span>ID: {project.id}</span>
              <span>•</span>
              <span>Type: {project.type}</span>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto px-2">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 text-xs sm:text-sm text-gray-400 pt-4">
              <span>Created: {project.createddate}</span>
              <span>Updated: {project.updateddate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
