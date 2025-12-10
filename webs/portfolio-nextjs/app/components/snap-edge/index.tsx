"use client";

import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { clsxMerge } from "@/app/components/themes/utils";
import Image from "next/image";

interface SnapEdgeMenuProps {
  children?: React.ReactNode;
  size?: number;
  className?: string;
  onTap?: () => void;
  initialSide?: "left" | "right";
}

// Default iOS-style Home Button Component
const DefaultHomeButton = ({ size = 40 }: { size?: number }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center rounded-full overflow-hidden pointer-events-none">
      <Image
        src="/ufo.svg"
        alt="Menu"
        width={size}
        height={size}
        className="object-cover pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

export default function SnapEdgeMenu({
  children,
  size = 40,
  className,
  onTap,
  initialSide = "right",
}: SnapEdgeMenuProps) {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const hasDragged = useRef(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Set initial position
    const updateInitialPosition = () => {
      if (typeof window !== "undefined") {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const initialX = initialSide === "left" ? 20 : windowWidth - size - 20;
        x.set(initialX);
        y.set(windowHeight / 2 - size / 2);
      }
    };

    updateInitialPosition();
    window.addEventListener("resize", updateInitialPosition);
    return () => window.removeEventListener("resize", updateInitialPosition);
  }, [x, y, size, initialSide]);

  const handleDragStart = () => {
    setIsDragging(true);
    hasDragged.current = false;
  };

  const handleDrag = () => {
    hasDragged.current = true;
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
  };

  const handleTap = () => {
    // Reset hasDragged after a short delay to allow onTap to work
    setTimeout(() => {
      if (!hasDragged.current && onTap) {
        onTap();
      }
      // Reset for next interaction
      hasDragged.current = false;
    }, 10);
  };

  return (
    <>
      {/* Constraints container */}
      <div
        ref={constraintsRef}
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* Floating bubble */}
      <motion.button
        style={{
          x,
          y,
          width: size,
          height: size,
          cursor: isDragging ? "grabbing" : "pointer",
        }}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onTap={handleTap}
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -5, 5, -5, 0],
          transition: { 
            rotate: { 
              repeat: Infinity, 
              duration: 0.5,
              ease: "easeInOut" 
            },
            scale: { duration: 0.2 }
          }
        }}
        className={clsxMerge(
          "fixed z-50",
          "rounded-full",
          "flex items-center justify-center",
          "transition-shadow duration-200",
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
        {children || <DefaultHomeButton size={size} />}
      </motion.button>
    </>
  );
}
