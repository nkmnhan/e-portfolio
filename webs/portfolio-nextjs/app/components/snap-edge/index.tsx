"use client";

import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { clsxMerge } from "@/app/components/themes/utils";
import Image from "next/image";

interface SnapEdgeProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onClick?: () => void;
  initialSide?: "left" | "right";
  disabled?: boolean;
}

export default function SnapEdge({
  children,
  size = 60,
  className,
  onDragStart,
  onDragEnd,
  onClick,
  initialSide = "left",
  disabled = false,
}: SnapEdgeProps) {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(20);
  const y = useMotionValue(20);

  useEffect(() => {
    // Set initial position
    const updateInitialPosition = () => {
      if (typeof window !== "undefined") {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const initialX = initialSide === "left" ? 20 : windowWidth - size - 20;
        x.set(initialX);
      }
    };

    updateInitialPosition();
    window.addEventListener("resize", updateInitialPosition);
    return () => window.removeEventListener("resize", updateInitialPosition);
  }, [x, y, size, initialSide]);

  const dragStartPos = useRef({ x: 0, y: 0 });

  const handleDragStart = () => {
    setIsDragging(true);
    dragStartPos.current = { x: x.get(), y: y.get() };
    if (onDragStart) {
      onDragStart();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    const currentX = x.get();
    const currentY = y.get();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate center of the button
    const buttonCenterX = currentX + size / 2;
    const buttonCenterY = currentY + size / 2;

    // Determine which corner to snap to based on position
    let targetX: number;
    let targetY: number;

    // Determine horizontal side (left or right)
    if (buttonCenterX < windowWidth / 2) {
      // Snap to left
      targetX = 20;
    } else {
      // Snap to right
      targetX = windowWidth - size - 20;
    }

    // Determine vertical side (top or bottom)
    if (buttonCenterY < windowHeight / 2) {
      // Snap to top
      targetY = 20;
    } else {
      // Snap to bottom
      targetY = windowHeight - size - 20;
    }

    // Animate to target position with spring
    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
    animate(y, targetY, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });

    if (onDragEnd) {
      onDragEnd();
    }
  };

  const handleClick = () => {
    if (isDragging) {
      debugger;
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      {/* Constraints container */}
      <div
        ref={constraintsRef}
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* Floating draggable container */}
      <motion.div
        style={{
          x,
          y,
          width: size,
          height: size,
          cursor: isDragging ? "grabbing" : "pointer",
        }}
        drag={!disabled}
        dragConstraints={constraintsRef}
        dragElastic={0.5}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleClick}
        className={clsxMerge(
          "fixed z-50",
          "flex items-center justify-center",
          isDragging && "cursor-grabbing",
          className
        )}
        animate={{
          scale: isDragging ? 1.1 : 1,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
