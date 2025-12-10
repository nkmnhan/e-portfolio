"use client";

import Link from "next/link";
import { useState } from "react";
import { Popover } from "flowbite-react";
import SnapEdgeMenu from "../components/snap-edge";
import { clsxMerge } from "@/app/components/themes/utils";
import Image from "next/image";

const components = [
  { slug: "skeletons", name: "Skeleton Components", icon: "💀" },
  { slug: "model-viewer", name: "3D Model Viewer", icon: "🎨" },
  { slug: "brand-gallery", name: "Brand Gallery", icon: "🏢" },
  { slug: "galaxy", name: "Galaxy Animation", icon: "🌌" },
  { slug: "masonry-layout", name: "Masonry Layout", icon: "📱" },
  { slug: "image-placeholder", name: "Image Placeholder", icon: "🖼️" },
  { slug: "video-placeholder", name: "Video Placeholder", icon: "🎥" },
  { slug: "testimonial", name: "Testimonial", icon: "💬" },
];

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Floating Menu Button with Popover */}
      <SnapEdgeMenu onDragStart={() => setIsMenuOpen(false)}>
        <Popover
          open={isMenuOpen}
          onOpenChange={setIsMenuOpen}
          content={
            <div className="min-w-[280px] max-w-[90vw] bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-gray-700/50">
              {/* Component List */}
              <nav className="space-y-2">
                {components.map((component) => (
                  <Link
                    key={component.slug}
                    href={`/test/${component.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsxMerge(
                      "flex items-center gap-3 p-3 rounded-xl transition-all",
                      "hover:bg-white/10 active:bg-white/20",
                      "border border-transparent hover:border-white/20",
                      "group"
                    )}
                  >
                    <span className="text-2xl">{component.icon}</span>
                    <span className="text-white/90 group-hover:text-white font-medium">
                      {component.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          }
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full h-full rounded-full flex items-center justify-center bg-transparent"
          >
            <Image
              src="/ufo.svg"
              alt="Menu"
              width={40}
              height={40}
              className="pointer-events-none"
              draggable={false}
            />
          </button>
        </Popover>
      </SnapEdgeMenu>

      {/* Main Content */}
      {children}
    </div>
  );
}
