"use client";

import Link from "next/link";
import { useState } from "react";
import SnapEdgeMenu from "../components/snap-edge";
import { clsxMerge } from "@/app/components/themes/utils";

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
      {/* Floating Menu Button */}
      <SnapEdgeMenu onTap={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Components
                </h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Component List */}
              <nav className="space-y-2">
                {components.map((component) => (
                  <Link
                    key={component.slug}
                    href={`/test/${component.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={clsxMerge(
                      "flex items-center gap-4 p-4 rounded-xl transition-all",
                      "hover:bg-linear-0-to-r hover:from-blue-50 hover:to-purple-50",
                      "dark:hover:from-blue-900/20 dark:hover:to-purple-900/20",
                      "border border-transparent hover:border-blue-200 dark:hover:border-blue-700",
                      "group"
                    )}
                  >
                    <span className="text-3xl">{component.icon}</span>
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white font-medium">
                      {component.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      {children}
    </div>
  );
}
