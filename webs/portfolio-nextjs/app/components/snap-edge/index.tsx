"use client";

import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { useState, useEffect, useRef, use } from "react";
import { clsxMerge } from "@/app/components/themes/utils";

interface SnapEdgeProps {
  id: string;
  children: React.ReactNode;
  size?: number;
  className?: string;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onClick?: () => void;
  defaultHorizontal?: "left" | "right";
  defaultVertical?: "top" | "bottom";
  disabled?: boolean;
  useParent?: boolean; // When true, uses parent container instead of window
}

const getContainerSize = (
  useParent: boolean,
  parentRef: React.RefObject<HTMLDivElement | null>
) => {
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

const storePosition = (id: string, posX: number, posY: number) => {
  if (typeof window !== "undefined" && id) {
    try {
      window.localStorage.setItem(
        `snapedge-pos-${id}`,
        JSON.stringify({ x: posX, y: posY })
      );
    } catch {}
  }
};

const getStoredPosition = (id: string): { x: number; y: number } | null => {
  if (typeof window !== "undefined" && id) {
    const stored = window.localStorage.getItem(`snapedge-pos-${id}`);
    if (stored) {
      try {
        const { x: storedX, y: storedY } = JSON.parse(stored);
        if (typeof storedX === "number" && typeof storedY === "number") {
          return { x: storedX, y: storedY };
        }
      } catch {}
    }
  }
  return null;
};

export default function SnapEdge({
  id,
  children,
  size = 60,
  className,
  onDragStart,
  onDragEnd,
  onClick,
  defaultHorizontal = "left",
  defaultVertical = "top",
  disabled = false,
  useParent = false,
}: SnapEdgeProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const margin = 20; // Margin from edges
  const x = useMotionValue(margin);
  const y = useMotionValue(margin);

  useEffect(() => {
    setIsMounted(true);
    setIsBouncing(true);
    const bounceTimeout = setTimeout(() => {
      setIsBouncing(false);
    }, 500);

    // Set initial position, restoring from localStorage if available
    const updateInitialPosition = () => {
      const { width: containerWidth, height: containerHeight } =
        getContainerSize(useParent, parentRef);
      if (containerWidth > 0 && containerHeight > 0) {
        let initialX, initialY;
        const storedPos = getStoredPosition(id);
        if (storedPos) {
          initialX = storedPos.x;
          initialY = storedPos.y;
        }

        if (typeof initialX !== "number") {
          initialX =
            defaultHorizontal === "left"
              ? margin
              : containerWidth - size - margin;
        }
        if (typeof initialY !== "number") {
          initialY =
            defaultVertical === "top"
              ? margin
              : containerHeight - size - margin;
        }
        x.set(initialX);
        y.set(initialY);
      }
    };

    updateInitialPosition();
    window.addEventListener("resize", updateInitialPosition);
    return () => {
      window.removeEventListener("resize", updateInitialPosition);
      clearTimeout(bounceTimeout);
    };
  }, [x, y, size, defaultHorizontal, defaultVertical, useParent, id]);

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
    const { width: containerWidth, height: containerHeight } = getContainerSize(
      useParent,
      parentRef
    );

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

    // Store the last position in localStorage
    storePosition(id, targetX, targetY);

    if (onDragEnd) {
      onDragEnd();
    }
  };

  const handleClick = () => {
    if (isDragging) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  if (!isMounted) return null;

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
            "absolute pointer-events-auto z-999",
            "flex items-center justify-center",
            isDragging && "cursor-grabbing",
            className
          )}
          animate={{
            scale: isDragging ? 1.1 : isBouncing ? [1, 1.2, 0.9, 1.1, 1] : 1,
          }}
          transition={{
            scale: isBouncing
              ? {
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "loop",
                }
              : {
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
          "fixed z-999",
          "flex items-center justify-center",
          isDragging && "cursor-grabbing",
          className
        )}
        animate={{
          scale: isDragging ? 1.1 : isBouncing ? [1, 1.2, 0.9, 1.1, 1] : 1,
        }}
        transition={{
          scale: isBouncing
            ? {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
              }
            : {
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
