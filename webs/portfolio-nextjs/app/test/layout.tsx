"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Popover } from "flowbite-react";
import SnapEdge from "../components/snap-edge";
import { clsxMerge } from "@/app/components/themes/utils";
import HamburgerIcon from "../components/hamburger-btn/hamburger-icon";

export const DEMOs = [
  { slug: "skeletons", name: "Skeleton Components", icon: "💀" },
  { slug: "model-viewer", name: "3D Model Viewer", icon: "🎨" },
  { slug: "brand-gallery", name: "Brand Gallery", icon: "🏢" },
  { slug: "galaxy", name: "Galaxy Animation", icon: "🌌" },
  { slug: "masonry-layout", name: "Masonry Layout", icon: "📱" },
  { slug: "snap-edge", name: "Snap Edge Menu", icon: "🚀" },
];

export default function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuTrigger, setMenuTrigger] = useState<"click" | "hover" | undefined>(
    "click"
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // Ref for SnapEdge root
  const snapEdgeRef = useRef<HTMLDivElement>(null);
  const popoverContentRef = useRef<HTMLDivElement>(null);

  // Close popover on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const snapEdgeEl = snapEdgeRef.current;
      const popoverEl = popoverContentRef.current;
      if (!snapEdgeEl || !popoverEl) return;
      if (
        !snapEdgeEl.contains(e.target as Node) &&
        !popoverEl.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Floating Menu Button with Popover */}
      <div ref={snapEdgeRef}>
        <SnapEdge
          initialSide="right"
          onDragStart={() => {
            setMenuTrigger(undefined);
            setIsMenuOpen(false);
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onDragEnd={() =>
            setTimeout(() => {
              setMenuTrigger("click");
            }, 300)
          }
        >
          <Popover
            open={isMenuOpen}
            trigger={menuTrigger}
            content={
              <div
                ref={popoverContentRef}
                className="p-6 shadow-lg max-w-xs backdrop:backdrop-blur-2xl"
              >
                {/* Component List */}
                <nav>
                  {DEMOs.map((component) => (
                    <Link
                      key={component.slug}
                      href={`/test/${component.slug}`}
                      onClick={() => setMenuTrigger(undefined)}
                      className={clsxMerge(
                        "flex items-center p-2",
                        "hover:bg-gray-100 hover:rounded-lg active:bg-gray-200 focus-visible:outline-none"
                      )}
                    >
                      <span className="text-2xl">{component.icon}</span>
                      <span className="text-sm text-gray-900 group-hover:text-black font-medium">
                        {component.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            }
          >
            <div
              className={clsxMerge(
                "h-12 w-12 rounded p-3 shadow-lg border border-gray-300",
                "bg-black"
              )}
            >
              {menuTrigger !== "click" && (
                <span className="absolute flex size-3 top-0 right-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                </span>
              )}
              <HamburgerIcon
                active={isMenuOpen}
                className="pointer-events-none text-white"
              />
            </div>
          </Popover>
        </SnapEdge>
      </div>

      {/* Main Content */}
      {children}
    </div>
  );
}
