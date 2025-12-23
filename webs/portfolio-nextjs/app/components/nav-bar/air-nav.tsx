"use client";

import { Button, Popover } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { clsxMerge } from "../themes/utils";
import Link from "next/dist/client/link";
import { PLAY_GROUND_ITEMS } from "./sites";
import AdaptiveImage from "../images/adaptive-image";
import { SnapEdge } from "../snap-edge";
import { IoIosShareAlt } from "react-icons/io";

export default function AirNav() {
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

  // Helper to chunk array
  function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  return (
    <div ref={snapEdgeRef}>
      <SnapEdge
        id="air-nav"
        defaultHorizontal="right"
        defaultVertical="bottom"
        onDragStart={() => {
          setMenuTrigger(undefined);
          setIsMenuOpen(false);
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        onDragEnd={() => setMenuTrigger("click")}
        useParent={true}
      >
        <Popover
          open={isMenuOpen}
          trigger={menuTrigger}
          content={
            <div
              ref={popoverContentRef}
              className="p-6 shadow-lg max-w-2l backdrop:backdrop-blur-2xl"
            >
              {/* Component List as columns */}
              <nav className="flex gap-4">
                {chunkArray(PLAY_GROUND_ITEMS, 4).map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col">
                    {column.map((component) => (
                      <Link
                        key={component.id}
                        href={component.href}
                        className={clsxMerge(
                          "flex items-center p-2",
                          "hover:bg-gray-100 hover:rounded-lg active:bg-gray-200 focus-visible:outline-none"
                        )}
                      >
                        <AdaptiveImage
                          src={component.imageUrl || ""}
                          alt={component.label}
                          width={16}
                          height={16}
                          className="mr-3 w-4 h-4 object-contain"
                        />
                        <span className="text-sm text-gray-500 hover:text-sky-600 font-medium">
                          {component.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          }
        >
          <Button className="rounded-full w-12 h-12 p-3 bg-linear-to-br from-pink-500 to-orange-400 text-white hover:bg-linear-to-bl focus:ring-pink-200 dark:focus:ring-pink-800">
            {menuTrigger === undefined && (
              <span className="absolute flex size-3 top-0 right-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
              </span>
            )}
            <IoIosShareAlt className="h-8 w-8" />
          </Button>
        </Popover>
      </SnapEdge>
    </div>
  );
}
