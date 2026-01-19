"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Center, PresentationControls } from "@react-three/drei";
import { clsxMerge } from "@/lib/utils";
import { HiCube, HiRefresh, HiZoomIn, HiZoomOut } from "react-icons/hi";
import type { Model3DMedia } from "@/lib/data";

interface Model3DViewerProps {
  media: Model3DMedia;
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function ModelPlaceholder() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#06b6d4" wireframe />
    </mesh>
  );
}

export function Model3DViewer({ media }: Model3DViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const settings = media.settings || {};
  const autoRotate = settings.autoRotate ?? true;
  const background = settings.background || "#1a1a1a";
  const cameraPosition = settings.cameraPosition || [0, 1.5, 3];

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="relative group">
      <div
        className={clsxMerge(
          "relative overflow-hidden rounded-lg",
          "aspect-video"
        )}
        style={{ backgroundColor: background }}
      >
        {!isLoaded ? (
          <>
            {/* Poster/Loading State */}
            <Image
              src={media.poster}
              alt="3D model preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Load 3D Button */}
            <button
              onClick={handleLoad}
              className={clsxMerge(
                "absolute inset-0 flex flex-col items-center justify-center gap-3",
                "focus:outline-none"
              )}
              aria-label="Load 3D model"
            >
              <div
                className={clsxMerge(
                  "p-5 rounded-full",
                  "bg-[var(--color-accent)] text-white",
                  "transform hover:scale-110",
                  "transition-transform duration-300",
                  "shadow-lg shadow-[var(--color-accent)]/30"
                )}
              >
                <HiCube className="w-8 h-8" />
              </div>
              <span className="text-white font-medium">View in 3D</span>
            </button>

            {/* 3D Badge */}
            <div
              className={clsxMerge(
                "absolute top-4 left-4",
                "px-3 py-1.5 rounded-full",
                "bg-[var(--color-accent)] text-white",
                "text-sm font-medium",
                "flex items-center gap-2"
              )}
            >
              <HiCube className="w-4 h-4" />
              <span>3D Model</span>
            </div>
          </>
        ) : hasError ? (
          /* Error State */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[var(--color-text-muted)]">
            <HiCube className="w-12 h-12 opacity-50" />
            <p>Failed to load 3D model</p>
            <button
              onClick={() => {
                setHasError(false);
                setIsLoaded(false);
              }}
              className={clsxMerge(
                "px-4 py-2 rounded-lg",
                "bg-[var(--color-surface)] text-[var(--color-text)]",
                "hover:bg-[var(--color-surface-hover)]",
                "transition-colors"
              )}
            >
              <HiRefresh className="w-4 h-4 inline mr-2" />
              Retry
            </button>
          </div>
        ) : (
          /* 3D Canvas */
          <>
            <Canvas
              camera={{
                position: cameraPosition as [number, number, number],
                fov: 45,
              }}
              className="touch-none"
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={<ModelPlaceholder />}>
                <Center>
                  <PresentationControls
                    global
                    snap
                    speed={1}
                    zoom={0.8}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                  >
                    <Model url={media.modelUrl} />
                  </PresentationControls>
                </Center>
                <Environment preset="studio" />
              </Suspense>
              <OrbitControls
                autoRotate={autoRotate}
                autoRotateSpeed={2}
                enablePan={false}
                minDistance={2}
                maxDistance={10}
              />
            </Canvas>

            {/* Controls Hint */}
            <div
              className={clsxMerge(
                "absolute bottom-4 left-4",
                "px-3 py-2 rounded-lg",
                "bg-black/60 backdrop-blur-sm",
                "text-xs text-white",
                "opacity-0 group-hover:opacity-100",
                "transition-opacity duration-300"
              )}
            >
              <p>🖱️ Drag to rotate • Scroll to zoom</p>
            </div>

            {/* 3D Badge */}
            <div
              className={clsxMerge(
                "absolute top-4 left-4",
                "px-3 py-1.5 rounded-full",
                "bg-[var(--color-accent)] text-white",
                "text-sm font-medium",
                "flex items-center gap-2"
              )}
            >
              <HiCube className="w-4 h-4" />
              <span>Interactive 3D</span>
            </div>
          </>
        )}
      </div>

      {/* Caption */}
      {media.caption && (
        <p className="mt-3 text-sm text-[var(--color-text-muted)] text-center">
          {media.caption}
        </p>
      )}
    </div>
  );
}
