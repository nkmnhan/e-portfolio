"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { memo, Suspense, useEffect, useRef, useMemo } from "react";
import R3fViewerControlPanel from "./r3f-control-panel";
import { 
  useR3fViewerController,
  R3fViewerSettings,
  VertexNormalsHelper,
  createUVCheckerTexture,
  createMatcapTexture,
  getToneMapping,
  applyMaterialSettings,
  applyMatcapMaterial,
  updateNormalsHelpers,
  updateBoundingBoxHelper,
  saveOriginalMaterials,
} from "./r3f-viewer-controller";
import { BoxHelper, Material } from "three";

function RendererConfig({ settings, onSettingsChange }: { settings: R3fViewerSettings; onSettingsChange: (settings: R3fViewerSettings) => void }) {
  const { gl, camera } = useThree();
  const targetFovRef = useRef(settings.cameraFov);
  const animationFrameRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Set tone mapping
    gl.toneMapping = getToneMapping(settings.toneMapping);
    // Set exposure
    gl.toneMappingExposure = settings.exposure;
  }, [gl, settings.toneMapping, settings.exposure]);
  
  // Handle mouse wheel for smooth FOV zoom
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      
      // Adjust FOV based on wheel delta (negative = zoom in, positive = zoom out)
      const delta = event.deltaY * 0.05; // Adjust sensitivity
      const newFov = Math.max(30, Math.min(120, settings.cameraFov + delta));
      
      onSettingsChange({ ...settings, cameraFov: newFov });
    };
    
    const canvas = gl.domElement;
    canvas.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [gl, settings, onSettingsChange]);
  
  // Smooth camera FOV transition
  useEffect(() => {
    targetFovRef.current = settings.cameraFov;
    
    const animateFov = () => {
      if (camera && 'fov' in camera) {
        const currentFov = (camera as any).fov;
        const targetFov = targetFovRef.current;
        const diff = targetFov - currentFov;
        
        // Smooth lerp with 0.1 factor (adjust for smoother/faster)
        if (Math.abs(diff) > 0.01) {
          (camera as any).fov += diff * 0.1;
          camera.updateProjectionMatrix();
          animationFrameRef.current = requestAnimationFrame(animateFov);
        } else {
          (camera as any).fov = targetFov;
          camera.updateProjectionMatrix();
        }
      }
    };
    
    // Cancel previous animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animateFov();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [camera, settings.cameraFov]);
  
  // Update background color
  useEffect(() => {
    gl.setClearColor(settings.viewportBg, 1);
  }, [gl, settings.viewportBg]);
  
  return null;
}

function Model({ settings, theaterMode }: { settings: R3fViewerSettings; theaterMode: boolean }) {
  const { scene } = useGLTF("/sketch/just_a_girl_texture_1k.glb");
  const normalsHelpersRef = useRef<VertexNormalsHelper[]>([]);
  const boundingBoxHelperRef = useRef<BoxHelper | null>(null);
  const originalMaterialsRef = useRef<Map<any, any>>(new Map());
  const matcapMaterialsRef = useRef<Map<any, Material>>(new Map());

  // Create textures using controller functions
  const uvCheckerTexture = useMemo(() => createUVCheckerTexture(), []);
  const matcapTexture = useMemo(() => createMatcapTexture(), []);

  // Save original materials on first render
  useEffect(() => {
    saveOriginalMaterials(scene, originalMaterialsRef);
  }, [scene]);

  // Wireframe/material controls
  useEffect(() => {
    applyMaterialSettings(scene, settings, uvCheckerTexture, originalMaterialsRef);
  }, [scene, settings.wireframe, settings.baseColor, settings.metalness, settings.roughness, settings.opacity, settings.emissive, settings.showVertexColors, settings.showUVChecker, uvCheckerTexture]);
  
  // Normals helpers
  useEffect(() => {
    updateNormalsHelpers(scene, settings.showNormals, normalsHelpersRef);
    
    return () => {
      normalsHelpersRef.current.forEach(helper => {
        scene.remove(helper);
        helper.dispose();
      });
      normalsHelpersRef.current = [];
    };
  }, [scene, settings.showNormals]);
  
  // Bounding Box helper
  useEffect(() => {
    updateBoundingBoxHelper(scene, settings.showBoundingBox, boundingBoxHelperRef);
    
    return () => {
      if (boundingBoxHelperRef.current) {
        scene.remove(boundingBoxHelperRef.current);
        boundingBoxHelperRef.current.dispose();
        boundingBoxHelperRef.current = null;
      }
    };
  }, [scene, settings.showBoundingBox]);
  
  // Matcap material switching
  useEffect(() => {
    applyMatcapMaterial(scene, settings, matcapTexture, originalMaterialsRef, matcapMaterialsRef);
    
    return () => {
      // Cleanup matcap materials
      matcapMaterialsRef.current.forEach((mat) => {
        mat.dispose();
      });
      matcapMaterialsRef.current.clear();
    };
  }, [scene, settings.showMatcap, settings.showMatcapBlend, matcapTexture]);
  
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


import { useState, useCallback } from "react";

function R3fViewer() {
  const { settings, setSettings, theaterMode, setTheaterMode } = useR3fViewerController();
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Fullscreen API handler (optional, for browser fullscreen)
  const handleFullScreenToggle = useCallback(() => {
    if (!isFullScreen) {
      // Try browser fullscreen as well
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
    setIsFullScreen((v) => !v);
  }, [isFullScreen]);

  // Listen for browser fullscreen changes to sync state
  useEffect(() => {
    const onChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div
      className={
        (isFullScreen
          ? "fixed inset-0 z-[9999] w-screen h-screen !max-w-none !max-h-none bg-black group"
          : "relative w-full h-screen overflow-hidden group")
      }
      style={{ background: theaterMode ? '#000000' : settings.viewportBg }}
    >
      <R3fViewerControlPanel
        settings={settings}
        onChange={setSettings}
        theaterMode={theaterMode}
        setTheaterMode={setTheaterMode}
        isFullScreen={isFullScreen}
        onFullScreenToggle={handleFullScreenToggle}
      />
      {!theaterMode && (
        <div className="absolute top-4 left-4 z-30 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <h1 className="text-lg md:text-xl font-bold">R3F Viewer</h1>
        </div>
      )}
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 2, 90], fov: settings.cameraFov }} gl={{ antialias: true }}>
          {/* Viewport Helpers */}
          {settings.gridHelper && <gridHelper args={[100, 100, 100, 100]} position={[0, 0, 0]} />}
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
          <RendererConfig settings={settings} onSettingsChange={setSettings} />
          {/* Note: UV Overlay requires custom shader implementation - currently not implemented */}
          {settings.showUVOverlay && (
            <mesh position={[0, 0, 0]}>
              <planeGeometry args={[0.1, 0.1]} />
              <meshBasicMaterial color="red" transparent opacity={0} />
            </mesh>
          )}
          <OrbitControls
            enableDamping
            dampingFactor={0.15}
            enableZoom={false}
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

export default memo(R3fViewer);
