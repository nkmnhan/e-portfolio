"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ImageCard from "@/app/components/image-card";
import IMAGE_URLS from "@/app/work/data";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

interface ProjectContextType {
  projectId: string;
  setProjectId: (id: string) => void;
}

const ProjectContext = createContext<ProjectContextType>({
  projectId: "0",
  setProjectId: () => {},
});

export const useProjectContext = () => useContext(ProjectContext);

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const [projectId, setProjectId] = useState("0");
  const [showPrevPreview, setShowPrevPreview] = useState(false);
  const [showNextPreview, setShowNextPreview] = useState(false);

  useEffect(() => {
    if (params && params.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      setProjectId(slug);
    }
  }, [params]);

  // Calculate previous and next project IDs
  const currentIndex = IMAGE_URLS.findIndex((img) => img.id === projectId);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : IMAGE_URLS.length - 1;
  const nextIndex = currentIndex < IMAGE_URLS.length - 1 ? currentIndex + 1 : 0;

  const prevProject = IMAGE_URLS[prevIndex];
  const nextProject = IMAGE_URLS[nextIndex];

  return (
    <>
      <div className="relative min-h-screen">
        {/* Left Arrow - Middle Left */}
        <div
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex items-center"
          onMouseEnter={() => setShowPrevPreview(true)}
          onMouseLeave={() => setShowPrevPreview(false)}
        >
          <Link
            href={`/project/${prevProject.id}`}
            className="p-4 hover:opacity-70 transition-all hover:scale-110"
          >
            <AiOutlineCaretLeft className="text-2xl" />
          </Link>
          {showPrevPreview && (
            <div className="ml-2 w-64 shadow-lg animate-slide-in-left">
              <ImageCard
                className="w-full"
                style={{ height: 180, position: 'relative' }}
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
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex items-center"
          onMouseEnter={() => setShowNextPreview(true)}
          onMouseLeave={() => setShowNextPreview(false)}
        >
          {showNextPreview && (
            <div className="mr-2 w-64 shadow-lg animate-slide-in-right">
              <ImageCard
                className="w-full"
                style={{ height: 180, position: 'relative' }}
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
          <Link
            href={`/project/${nextProject.id}`}
            className="p-4 hover:opacity-70 transition-all hover:scale-110"
          >
            <AiOutlineCaretRight className="text-2xl" />
          </Link>
        </div>

        {/* Main Content */}
        <ProjectContext.Provider value={{ projectId, setProjectId }}>
          {children}
        </ProjectContext.Provider>
      </div>
    </>
  );
}
