"use client";

import { Popover } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import SnapEdge from "../snap-edge";
import HamburgerIcon from "../hamburger-btn/hamburger-icon";
import { clsxMerge } from "../themes/utils";
import Link from "next/dist/client/link";
import { PLAY_GROUND_ITEMS } from "./sites";

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

  return (
    <div ref={snapEdgeRef}>
      <SnapEdge
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
              className="p-6 shadow-lg max-w-xs backdrop:backdrop-blur-2xl"
            >
              {/* Component List */}
              <nav>
                {PLAY_GROUND_ITEMS.map((component) => (
                  <Link
                    key={component.id}
                    href={component.href}
                    className={clsxMerge(
                      "flex items-center p-2",
                      "hover:bg-gray-100 hover:rounded-lg active:bg-gray-200 focus-visible:outline-none"
                    )}
                  >
                    <span className="text-sm text-gray-900 group-hover:text-black font-medium">
                      {component.label}
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
