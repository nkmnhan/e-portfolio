"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import ModelViewerControlPanel, { ModelViewerSettings } from "./model-viewer-control-panel";

import { useEffect, useRef } from "react";

function Model({ settings }: { settings: ModelViewerSettings }) {
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
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

function ThreeFiber3DViewer() {
  const [settings, setSettings] = useState<ModelViewerSettings>({
    wireframe: false,
    viewportBg: "#e5e7eb",
    cameraFov: 50,
    gridHelper: false,
    axesHelper: false,
    shadows: true,
    toneMapping: "None",
    exposure: 1.0,
    baseColor: "#ffffff",
    metalness: 0.5,
    roughness: 0.5,
    opacity: 1.0,
    emissive: "#000000",
    showNormals: false,
    showBoundingBox: false,
    showVertexColors: false,
    showUVChecker: false,
    showUVOverlay: false,
  });

  return (
    <>
      <ModelViewerControlPanel settings={settings} onChange={setSettings} />
      <h1 className="text-2xl font-bold text-center my-4">Three Fiber Model Viewer</h1>
      <div className="w-full h-screen" style={{ background: settings.viewportBg }}>
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
            <Model settings={settings} />
          </Suspense>
          {/* TODO: Geometry, UV, and other controls can be added here */}
          <OrbitControls
            enableDamping
            dampingFactor={0.15}
            enableZoom
            zoomSpeed={1.0}
            minDistance={4}
            maxDistance={400}
            target={[0, 0, 0]}
            autoRotate
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>
    </>
  );
}

useGLTF.preload("/sketch/just_a_girl_texture_1k.glb");

export default ThreeFiber3DViewer;
