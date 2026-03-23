"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import type { Points } from "three";

function RotatingStars({ count }: { count: number }) {
  const starsRef = useRef<Points>(null);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= delta * 0.02;
      starsRef.current.rotation.y -= delta * 0.01;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={count}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export function Starfield({ count = 2000 }: { count?: number }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars count={count} />
      </Canvas>
    </div>
  );
}
