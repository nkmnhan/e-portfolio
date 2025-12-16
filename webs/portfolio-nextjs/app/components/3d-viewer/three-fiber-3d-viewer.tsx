"use client";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/sketch/just_a_girl_texture_1k.glb");
  
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function ThreeFiberViewer() {
  return (
    <div className="w-full h-screen bg-gray-100 dark:bg-gray-900">
      <Canvas
        camera={{ position: [0, 1, 3], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        
        {/* Environment for better lighting */}
        <Environment preset="city" />
        
        {/* 3D Model */}
        <Model />
        
        {/* Controls */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={10}
          target={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload("/sketch/just_a_girl_texture_1k.glb");
