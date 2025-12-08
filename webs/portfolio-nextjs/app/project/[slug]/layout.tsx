"use client";

import { useState, createContext, useContext, useEffect, use } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImageCard from "@/app/components/images/image-card";
import IMAGE_URLS from "@/app/work/data";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";

interface ProjectContextType {
  projectId: string;
  isCinematicMode: boolean;
  setProjectId: (id: string) => void;
  setIsCinematicMode: (mode: boolean) => void;
}

const ProjectContext = createContext<ProjectContextType>({
  projectId: "0",
  isCinematicMode: false,
  setProjectId: () => {},
  setIsCinematicMode: () => {},
});

export const useProjectContext = () => useContext(ProjectContext);

const arrowBtn = "p-4 hover:opacity-70 transition-all hover:scale-110";
const arrowContainer = "fixed z-50 flex items-center";
const previewCard = "w-64 shadow-lg";
const iconSize = "text-2xl";
const iconLight = "text-white";
const iconDark = "text-gray-800";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [projectId, setProjectId] = useState("0");
  const [isCinematicMode, setIsCinematicMode] = useState(true);
  const [showPrevPreview, setShowPrevPreview] = useState(false);
  const [showNextPreview, setShowNextPreview] = useState(false);
  const [iconClass, setIconClass] = useState("text-2xl text-gray-800");

  useEffect(() => {
    setIconClass(clsxMerge(iconSize, isCinematicMode ? iconLight : iconDark));
  }, [isCinematicMode]);

  // Calculate previous and next project IDs
  const currentIndex = IMAGE_URLS.findIndex((img) => img.id === projectId);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : IMAGE_URLS.length - 1;
  const nextIndex = currentIndex < IMAGE_URLS.length - 1 ? currentIndex + 1 : 0;

  const prevProject = IMAGE_URLS[prevIndex];
  const nextProject = IMAGE_URLS[nextIndex];

  return (
    <div className={clsxMerge("relative min-h-screen", bgPrimary)}>
      {/* Left Arrow - Middle Left */}
      <div
        className={clsxMerge(arrowContainer, "left-4 top-1/2 -translate-y-1/2")}
        onMouseEnter={() => setShowPrevPreview(true)}
        onMouseLeave={() => setShowPrevPreview(false)}
      >
        <Link href={`/project/${prevProject.id}`} className={arrowBtn}>
          <AiOutlineCaretLeft className={iconClass} />
        </Link>
        {showPrevPreview && (
          <div className={clsxMerge("ml-2", previewCard, "animate-slide-in-left")}>
            <ImageCard
              className="w-full"
              style={{ height: 180, position: "relative" }}
              key={prevProject.id}
              src={prevProject.poster}
              alt={`Work image ${prevProject.id}`}
              loading="lazy"
              title={prevProject.title || `Project number ${prevProject.id}`}
              description={prevProject.description || "No description available."}
              forceHover={true}
            />
          </div>
        )}
      </div>

      {/* Right Arrow - Middle Right */}
      <div
        className={clsxMerge(arrowContainer, "right-4 top-1/2 -translate-y-1/2")}
        onMouseEnter={() => setShowNextPreview(true)}
        onMouseLeave={() => setShowNextPreview(false)}
      >
        {showNextPreview && (
          <div className={clsxMerge("mr-2", previewCard, "animate-slide-in-right")}>
            <ImageCard
              className="w-full"
              style={{ height: 180, position: "relative" }}
              key={nextProject.id}
              src={nextProject.poster}
              alt={`Work image ${nextProject.id}`}
              loading="lazy"
              title={nextProject.title || `Project number ${nextProject.id}`}
              description={nextProject.description || "No description available."}
              forceHover={true}
            />
          </div>
        )}
        <Link href={`/project/${nextProject.id}`} className={arrowBtn}>
          <AiOutlineCaretRight className={iconClass} />
        </Link>
      </div>

      {/* Main Content */}
      <ProjectContext.Provider
        value={{
          projectId,
          isCinematicMode,
          setProjectId,
          setIsCinematicMode,
        }}
      >
        {children}
      </ProjectContext.Provider>
    </div>
  );
}
