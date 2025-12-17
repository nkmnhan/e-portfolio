"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment, useTexture } from "@react-three/drei";
import { memo, Suspense, useState, useEffect, useRef, useMemo } from "react";
import R3fViewerControlPanel, { defaultSettings, R3fViewerSettings } from "./r3f-control-panel";
import { BoxHelper, ACESFilmicToneMapping, CineonToneMapping, LinearToneMapping, ReinhardToneMapping, NoToneMapping, RepeatWrapping, BufferGeometry, LineSegments, LineBasicMaterial, Float32BufferAttribute, Vector3, CanvasTexture, NearestFilter, MeshMatcapMaterial, MeshStandardMaterial, Material } from "three";

function RendererConfig({ settings, onSettingsChange }: { settings: R3fViewerSettings; onSettingsChange: (settings: R3fViewerSettings) => void }) {
  const { gl, camera } = useThree();
  const targetFovRef = useRef(settings.cameraFov);
  const animationFrameRef = useRef<number>();
  
  useEffect(() => {
    // Set tone mapping
    switch (settings.toneMapping) {
      case "Linear":
        gl.toneMapping = LinearToneMapping;
        break;
      case "Reinhard":
        gl.toneMapping = ReinhardToneMapping;
        break;
      case "Cineon":
        gl.toneMapping = CineonToneMapping;
        break;
      case "ACES":
        gl.toneMapping = ACESFilmicToneMapping;
        break;
      default:
        gl.toneMapping = NoToneMapping;
    }
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

// Custom VertexNormalsHelper implementation
class VertexNormalsHelper extends LineSegments {
  constructor(object: any, size = 1, color = 0xff0000) {
    const geometry = new BufferGeometry();
    const positions: number[] = [];
    
    object.traverse((child: any) => {
      if (child.isMesh && child.geometry) {
        const objGeometry = child.geometry;
        const objPosition = objGeometry.attributes.position;
        const objNormal = objGeometry.attributes.normal;
        
        if (objPosition && objNormal) {
          const matrixWorld = child.matrixWorld;
          const normalMatrix = new Vector3();
          
          for (let i = 0; i < objPosition.count; i++) {
            const v1 = new Vector3(
              objPosition.getX(i),
              objPosition.getY(i),
              objPosition.getZ(i)
            );
            v1.applyMatrix4(matrixWorld);
            
            const v2 = new Vector3(
              objNormal.getX(i),
              objNormal.getY(i),
              objNormal.getZ(i)
            );
            v2.transformDirection(matrixWorld).multiplyScalar(size).add(v1);
            
            positions.push(v1.x, v1.y, v1.z);
            positions.push(v2.x, v2.y, v2.z);
          }
        }
      }
    });
    
    geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const material = new LineBasicMaterial({ color });
    super(geometry, material);
  }
  
  dispose() {
    this.geometry.dispose();
    (this.material as LineBasicMaterial).dispose();
  }
}

function Model({ settings, theaterMode }: { settings: R3fViewerSettings; theaterMode: boolean }) {
  const { scene, materials, nodes } = useGLTF("/sketch/just_a_girl_texture_1k.glb");
  const normalsHelpersRef = useRef<VertexNormalsHelper[]>([]);
  const boundingBoxHelperRef = useRef<BoxHelper | null>(null);
  const originalMaterialsRef = useRef<Map<any, any>>(new Map());
  const matcapMaterialsRef = useRef<Map<any, Material>>(new Map());

  // Create UV checker texture
  const uvCheckerTexture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gridSize = 8; // 8x8 grid
      const cellSize = size / gridSize;
      
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          // Checkerboard pattern
          ctx.fillStyle = (i + j) % 2 === 0 ? '#ffffff' : '#000000';
          ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
        }
      }
      
      // Add colored lines for better visibility
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 2;
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, size);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(size, i * cellSize);
        ctx.stroke();
      }
      
      // Add corner markers
      ctx.fillStyle = '#00ff00';
      ctx.fillRect(0, 0, cellSize / 2, cellSize / 2); // Top-left green
      ctx.fillStyle = '#0000ff';
      ctx.fillRect(size - cellSize / 2, 0, cellSize / 2, cellSize / 2); // Top-right blue
      ctx.fillStyle = '#ffff00';
      ctx.fillRect(0, size - cellSize / 2, cellSize / 2, cellSize / 2); // Bottom-left yellow
      ctx.fillStyle = '#ff00ff';
      ctx.fillRect(size - cellSize / 2, size - cellSize / 2, cellSize / 2, cellSize / 2); // Bottom-right magenta
    }
    
    const texture = new CanvasTexture(canvas);
    texture.magFilter = NearestFilter;
    texture.minFilter = NearestFilter;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    return texture;
  }, []);

  // Create Matcap texture (simple spherical gradient for demo)
  const matcapTexture = useMemo(() => {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const centerX = size / 2;
      const centerY = size / 2;
      const radius = size / 2;
      
      // Create radial gradient to simulate matcap
      const gradient = ctx.createRadialGradient(centerX - radius * 0.3, centerY - radius * 0.3, 0, centerX, centerY, radius);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, '#88ccff');
      gradient.addColorStop(0.6, '#4488cc');
      gradient.addColorStop(1, '#112244');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    }
    
    const texture = new CanvasTexture(canvas);
    return texture;
  }, []);

  // Save original materials on first render
  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material && !originalMaterialsRef.current.has(obj)) {
        originalMaterialsRef.current.set(obj, {
          originalMaterial: obj.material.clone(),
          map: obj.material.map,
          color: obj.material.color?.clone(),
          metalness: obj.material.metalness,
          roughness: obj.material.roughness,
        });
      }
    });
  }, [scene]);

  // Wireframe/material controls
  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        obj.material.wireframe = settings.wireframe;
        
        // UV Checker - Display UV checker texture
        if (settings.showUVChecker) {
          obj.material.map = uvCheckerTexture;
          obj.material.metalness = 0;
          obj.material.roughness = 1;
          if (obj.material.color) obj.material.color.set('#ffffff');
        } else {
          // Restore original material properties when UV checker is off
          const original = originalMaterialsRef.current.get(obj);
          if (original) {
            obj.material.map = original.map;
            if (obj.material.color && settings.baseColor) obj.material.color.set(settings.baseColor);
            if (typeof obj.material.metalness === "number") obj.material.metalness = settings.metalness;
            if (typeof obj.material.roughness === "number") obj.material.roughness = settings.roughness;
          }
        }
        
        if (!settings.showUVChecker) {
          if (obj.material.color && settings.baseColor) obj.material.color.set(settings.baseColor);
          if (typeof obj.material.metalness === "number") obj.material.metalness = settings.metalness;
          if (typeof obj.material.roughness === "number") obj.material.roughness = settings.roughness;
        }
        
        if (typeof obj.material.opacity === "number") obj.material.opacity = settings.opacity;
        if (obj.material.emissive && settings.emissive) obj.material.emissive.set(settings.emissive);
        obj.material.transparent = settings.opacity < 1.0;
        obj.material.vertexColors = settings.showVertexColors;
        obj.material.needsUpdate = true;
      }
    });
  }, [scene, settings.wireframe, settings.baseColor, settings.metalness, settings.roughness, settings.opacity, settings.emissive, settings.showVertexColors, settings.showUVChecker, uvCheckerTexture]);
  
  // Normals helpers
  useEffect(() => {
    // Clean up previous helpers
    normalsHelpersRef.current.forEach(helper => {
      scene.remove(helper);
      helper.dispose();
    });
    normalsHelpersRef.current = [];
    
    if (settings.showNormals) {
      scene.traverse((obj: any) => {
        if (obj.isMesh) {
          const helper = new VertexNormalsHelper(obj, 0.1, 0x00ff00);
          scene.add(helper);
          normalsHelpersRef.current.push(helper);
        }
      });
    }
    
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
    // Clean up previous helper
    if (boundingBoxHelperRef.current) {
      scene.remove(boundingBoxHelperRef.current);
      boundingBoxHelperRef.current.dispose();
      boundingBoxHelperRef.current = null;
    }
    
    if (settings.showBoundingBox) {
      const helper = new BoxHelper(scene, 0xffff00);
      scene.add(helper);
      boundingBoxHelperRef.current = helper;
    }
    
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
    scene.traverse((obj: any) => {
      if (obj.isMesh && obj.material) {
        const original = originalMaterialsRef.current.get(obj);
        
        if (settings.showMatcap) {
          // Pure Matcap mode
          if (!matcapMaterialsRef.current.has(obj)) {
            const matcapMat = new MeshMatcapMaterial({
              matcap: matcapTexture,
            });
            matcapMaterialsRef.current.set(obj, matcapMat);
          }
          obj.material = matcapMaterialsRef.current.get(obj)!;
        } else if (settings.showMatcapBlend && original?.originalMaterial) {
          // Matcap + Surface blend mode
          // Use the original material but add matcap as environment map for blend effect
          obj.material = original.originalMaterial.clone();
          if (obj.material.envMap !== undefined) {
            obj.material.envMap = matcapTexture;
            obj.material.envMapIntensity = 0.8;
          }
          obj.material.needsUpdate = true;
        } else if (original?.originalMaterial) {
          // Restore original material
          obj.material = original.originalMaterial;
        }
      }
    });
    
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

function R3fViewer() {
  const [settings, setSettings] = useState<R3fViewerSettings>(defaultSettings);
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
