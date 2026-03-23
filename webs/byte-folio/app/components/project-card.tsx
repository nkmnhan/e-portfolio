"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltTransform, setTiltTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((event.clientX - centerX) / (rect.width / 2)) * 8;
    const rotateX = ((centerY - event.clientY) / (rect.height / 2)) * 8;
    setTiltTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  }

  function handleMouseLeave() {
    setTiltTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
  }

  const primaryLink = project.liveUrl
    ? { href: project.liveUrl, label: "Live" }
    : project.docsUrl
      ? { href: project.docsUrl, label: "Docs" }
      : null;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: tiltTransform, transition: "transform 0.15s ease-out" }}
      className="glass rounded-xl overflow-hidden group"
    >
      {project.thumbnail && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mt-1">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {primaryLink && (
            <a
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-hover transition-colors"
            >
              <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
              {primaryLink.label}
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
