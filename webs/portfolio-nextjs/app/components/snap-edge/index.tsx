"use client";

import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

interface SnapEdgeProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onClick?: () => void;
  initialSide?: "left" | "right";
  disabled?: boolean;
  useParent?: boolean; // When true, uses parent container instead of window
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
  useParent = false,
}: SnapEdgeProps) {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const margin = 20; // Margin from edges
  const x = useMotionValue(margin);
  const y = useMotionValue(margin);

  const getContainerSize = () => {
    if (useParent && parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      return {
        width: parentRect.width,
        height: parentRect.height,
      };
    } else if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    return { width: 0, height: 0 };
  };

  useEffect(() => {
    // Set initial position
    const updateInitialPosition = () => {
      const { width: containerWidth } = getContainerSize();
      if (containerWidth > 0) {
        const initialX =
          initialSide === "left" ? margin : containerWidth - size - margin;
        const initialY = margin; // Start at top
        x.set(initialX);
        y.set(initialY);
      }
    };

    updateInitialPosition();
    window.addEventListener("resize", updateInitialPosition);
    return () => window.removeEventListener("resize", updateInitialPosition);
  }, [x, y, size, initialSide, useParent]);

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
    const { width: containerWidth, height: containerHeight } =
      getContainerSize();

    // Calculate center of the button
    const buttonCenterX = currentX + size / 2;
    const buttonCenterY = currentY + size / 2;

    // Determine which corner to snap to based on position
    let targetX: number;
    let targetY: number;

    // Determine horizontal side (left or right)
    if (buttonCenterX < containerWidth / 2) {
      // Snap to left
      targetX = margin;
    } else {
      // Snap to right
      targetX = containerWidth - size - margin;
    }

    // Determine vertical side (top or bottom)
    if (buttonCenterY < containerHeight / 2) {
      // Snap to top
      targetY = margin;
    } else {
      // Snap to bottom
      targetY = containerHeight - size - margin;
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

  if (useParent) {
    return (
      <div ref={parentRef} className="absolute inset-0 pointer-events-none">
        {/* Constraints container */}
        <div
          ref={constraintsRef}
          className="absolute inset-0 pointer-events-none"
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
            "absolute pointer-events-auto z-50",
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
      </div>
    );
  }

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
