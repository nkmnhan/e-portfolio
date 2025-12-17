"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import R3fViewerControlPanel, { R3fViewerSettings } from "./r3f-control-panel";

import { useEffect, useRef } from "react";

function Model({ settings, theaterMode }: { settings: R3fViewerSettings; theaterMode: boolean }) {
  const { scene, materials, nodes } = useGLTF("/sketch/just_a_girl_texture_1k.glb");
  // Wireframe/material controls
  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        obj.material.wireframe = settings.wireframe;
        if (obj.material.color && settings.baseColor) obj.material.color.set(settings.baseColor);
        if (typeof obj.material.metalness === "number") obj.material.metalness = settings.metalness;
        if (typeof obj.material.roughness === "number") obj.material.roughness = settings.roughness;
        if (typeof obj.material.opacity === "number") obj.material.opacity = settings.opacity;
        if (obj.material.emissive && settings.emissive) obj.material.emissive.set(settings.emissive);
        obj.material.transparent = settings.opacity < 1.0;
      }
    });
  }, [scene, settings.wireframe, settings.baseColor, settings.metalness, settings.roughness, settings.opacity, settings.emissive]);
  // Theater mode scaling
  useEffect(() => {
    scene.scale.set(theaterMode ? 0.8 : 1, theaterMode ? 0.8 : 1, theaterMode ? 0.8 : 1);
  }, [scene, theaterMode]);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

function R3fViewer() {
  const [settings, setSettings] = useState<R3fViewerSettings>({
    wireframe: false,
    viewportBg: "#e5e7eb",
    cameraFov: 50,
    gridHelper: false,
    axesHelper: false,
    shadows: true,
    toneMapping: "None",
    exposure: 1.5, // Increased for more pop
    baseColor: "#ffffff",
    metalness: 1.0, // Max for shiny
    roughness: 0.05, // Low for shiny
    opacity: 1.0,
    emissive: "#000000",
    showNormals: false,
    showBoundingBox: false,
    showVertexColors: false,
    showUVChecker: false,
    showUVOverlay: false,
    autoRotate: false,
    lockControls: false,
  });

  const [theaterMode, setTheaterMode] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden group" style={{ background: theaterMode ? '#000000' : settings.viewportBg }}>
      <R3fViewerControlPanel settings={settings} onChange={setSettings} theaterMode={theaterMode} setTheaterMode={setTheaterMode} />
      {!theaterMode && (
        <div className="absolute top-4 left-4 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <h1 className="text-lg md:text-xl font-bold">R3F Viewer</h1>
        </div>
      )}
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 2, 90], fov: settings.cameraFov }} gl={{ antialias: true }}>
          {/* Helpers */}
          {settings.gridHelper && <gridHelper args={[100, 100]} />}
          {settings.axesHelper && <axesHelper args={[10]} />}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow={settings.shadows} shadow-mapSize={[1024, 1024]} />
          <pointLight position={[-5, 5, -5]} intensity={0.5} />
          <Environment preset="city" />
          <Suspense fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          }>
            <Model settings={settings} theaterMode={theaterMode} />
          </Suspense>
          {/* TODO: Geometry, UV, and other controls can be added here */}
          <OrbitControls
            enableDamping
            dampingFactor={0.15}
            enableZoom={!settings.lockControls}
            zoomSpeed={1.0}
            minDistance={4}
            maxDistance={400}
            target={[0, 0, 0]}
            autoRotate={settings.autoRotate}
            autoRotateSpeed={1}
            enablePan={!settings.lockControls}
            enableRotate={!settings.lockControls}
            touches={{
              ONE: 2, // TOUCH.ROTATE
              TWO: 1, // TOUCH.DOLLY_PAN
            }}
          />
        </Canvas>
      </div>
    </div>
  );
}

useGLTF.preload("/sketch/just_a_girl_texture_1k.glb");

export default R3fViewer;
