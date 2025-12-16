"use client";
import { useEffect, useRef } from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

export default function BabylonJS3DViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create engine and scene
    const engine = new BABYLON.Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });

    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.9, 0.9, 0.9, 1);

    // Create camera
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(canvasRef.current, true);
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 10;

    // Create lighting
    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );
    light.intensity = 0.7;

    const dirLight = new BABYLON.DirectionalLight(
      "dirLight",
      new BABYLON.Vector3(-1, -2, -1),
      scene
    );
    dirLight.position = new BABYLON.Vector3(2, 5, 2);
    dirLight.intensity = 0.5;

    // Load the 3D model
    BABYLON.AppendSceneAsync("/sketch/just_a_girl_texture_1k.glb", scene)
      .then(() => {
        console.log("Model loaded successfully");
        
        // Center the model
        const meshes = scene.meshes;
        if (meshes.length > 0) {
          const boundingInfo = meshes[0].getHierarchyBoundingVectors();
          const center = BABYLON.Vector3.Center(boundingInfo.min, boundingInfo.max);
          
          meshes.forEach((mesh) => {
            mesh.position.subtractInPlace(center);
          });
        }
      })
      .catch((error) => {
        console.error("Error loading model:", error);
      });

    // Render loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle window resize
    const handleResize = () => {
      engine.resize();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      engine.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-screen bg-gray-100 dark:bg-gray-900"
      style={{ display: "block" }}
    />
  );
}
