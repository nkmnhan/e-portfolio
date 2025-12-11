"use client";

import { Popover } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import SnapEdge from "../snap-edge";
import HamburgerIcon from "../hamburger-btn/hamburger-icon";
import { clsxMerge } from "../themes/utils";
import Link from "next/dist/client/link";
import { PLAY_GROUND_ITEMS } from "./sites";
import Image from "next/image";

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
                        <Image
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
          <div
            className={clsxMerge(
              "h-12 w-12 rounded p-3 shadow-lg border border-gray-300",
              menuTrigger !== "click" && "animate-bounce",
              "bg-black"
            )}
          >
            {menuTrigger !== "click" && (
              <span className="absolute flex size-3 -top-1 -right-1">
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
  );
}
