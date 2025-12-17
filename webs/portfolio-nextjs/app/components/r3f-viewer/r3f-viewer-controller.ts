import { useState, useEffect, useRef, useMemo } from "react";
import { 
  BoxHelper, 
  ACESFilmicToneMapping, 
  CineonToneMapping, 
  LinearToneMapping, 
  ReinhardToneMapping, 
  NoToneMapping, 
  RepeatWrapping, 
  BufferGeometry, 
  LineSegments, 
  LineBasicMaterial, 
  Float32BufferAttribute, 
  Vector3, 
  CanvasTexture, 
  NearestFilter, 
  MeshMatcapMaterial,
  Material
} from "three";

// Settings interface
export interface R3fViewerSettings {
  wireframe: boolean;
  viewportBg: string;
  cameraFov: number;
  gridHelper: boolean;
  axesHelper: boolean;
  shadows: boolean;
  toneMapping: string;
  exposure: number;
  baseColor: string;
  metalness: number;
  roughness: number;
  opacity: number;
  emissive: string;
  showNormals: boolean;
  showBoundingBox: boolean;
  showVertexColors: boolean;
  showUVChecker: boolean;
  showUVOverlay: boolean;
  showMatcap: boolean;
  showMatcapBlend: boolean;
  autoRotate: boolean;
  lockControls: boolean;
}

export const defaultSettings: R3fViewerSettings = {
  wireframe: false,
  viewportBg: "#e5e7eb",
  cameraFov: 50,
  gridHelper: false,
  axesHelper: false,
  shadows: true,
  toneMapping: "None",
  exposure: 1.5,
  baseColor: "#f3eded",
  metalness: 1.0,
  roughness: 0.05,
  opacity: 1.0,
  emissive: "#000000",
  showNormals: false,
  showBoundingBox: false,
  showVertexColors: false,
  showUVChecker: false,
  showUVOverlay: false,
  showMatcap: false,
  showMatcapBlend: false,
  autoRotate: true,
  lockControls: false,
};

// Custom VertexNormalsHelper implementation
export class VertexNormalsHelper extends LineSegments {
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

// Texture creators
export const createUVCheckerTexture = () => {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    const gridSize = 8;
    const cellSize = size / gridSize;
    
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
    
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
    
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(0, 0, cellSize / 2, cellSize / 2);
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(size - cellSize / 2, 0, cellSize / 2, cellSize / 2);
    ctx.fillStyle = '#ffff00';
    ctx.fillRect(0, size - cellSize / 2, cellSize / 2, cellSize / 2);
    ctx.fillStyle = '#ff00ff';
    ctx.fillRect(size - cellSize / 2, size - cellSize / 2, cellSize / 2, cellSize / 2);
  }
  
  const texture = new CanvasTexture(canvas);
  texture.magFilter = NearestFilter;
  texture.minFilter = NearestFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  return texture;
};

export const createMatcapTexture = () => {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2;
    
    const gradient = ctx.createRadialGradient(
      centerX - radius * 0.3, 
      centerY - radius * 0.3, 
      0, 
      centerX, 
      centerY, 
      radius
    );
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.3, '#88ccff');
    gradient.addColorStop(0.6, '#4488cc');
    gradient.addColorStop(1, '#112244');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
  }
  
  return new CanvasTexture(canvas);
};

// Tone mapping configuration
export const getToneMapping = (type: string) => {
  switch (type) {
    case "Linear":
      return LinearToneMapping;
    case "Reinhard":
      return ReinhardToneMapping;
    case "Cineon":
      return CineonToneMapping;
    case "ACES":
      return ACESFilmicToneMapping;
    default:
      return NoToneMapping;
  }
};

// Material management actions
export const applyMaterialSettings = (
  scene: any,
  settings: R3fViewerSettings,
  uvCheckerTexture: CanvasTexture,
  originalMaterialsRef: React.MutableRefObject<Map<any, any>>
) => {
  scene.traverse((obj: any) => {
    if (obj.isMesh && obj.material) {
      obj.material.wireframe = settings.wireframe;
      
      if (settings.showUVChecker) {
        obj.material.map = uvCheckerTexture;
        obj.material.metalness = 0;
        obj.material.roughness = 1;
        if (obj.material.color) obj.material.color.set('#ffffff');
      } else {
        const original = originalMaterialsRef.current.get(obj);
        if (original) {
          obj.material.map = original.map;
          if (obj.material.color && settings.baseColor) {
            obj.material.color.set(settings.baseColor);
          }
          if (typeof obj.material.metalness === "number") {
            obj.material.metalness = settings.metalness;
          }
          if (typeof obj.material.roughness === "number") {
            obj.material.roughness = settings.roughness;
          }
        }
      }
      
      if (!settings.showUVChecker) {
        if (obj.material.color && settings.baseColor) {
          obj.material.color.set(settings.baseColor);
        }
        if (typeof obj.material.metalness === "number") {
          obj.material.metalness = settings.metalness;
        }
        if (typeof obj.material.roughness === "number") {
          obj.material.roughness = settings.roughness;
        }
      }
      
      if (typeof obj.material.opacity === "number") {
        obj.material.opacity = settings.opacity;
      }
      if (obj.material.emissive && settings.emissive) {
        obj.material.emissive.set(settings.emissive);
      }
      obj.material.transparent = settings.opacity < 1.0;
      obj.material.vertexColors = settings.showVertexColors;
      obj.material.needsUpdate = true;
    }
  });
};

export const applyMatcapMaterial = (
  scene: any,
  settings: R3fViewerSettings,
  matcapTexture: CanvasTexture,
  originalMaterialsRef: React.MutableRefObject<Map<any, any>>,
  matcapMaterialsRef: React.MutableRefObject<Map<any, Material>>
) => {
  scene.traverse((obj: any) => {
    if (obj.isMesh && obj.material) {
      const original = originalMaterialsRef.current.get(obj);
      
      if (settings.showMatcap) {
        if (!matcapMaterialsRef.current.has(obj)) {
          const matcapMat = new MeshMatcapMaterial({
            matcap: matcapTexture,
          });
          matcapMaterialsRef.current.set(obj, matcapMat);
        }
        obj.material = matcapMaterialsRef.current.get(obj)!;
      } else if (settings.showMatcapBlend && original?.originalMaterial) {
        obj.material = original.originalMaterial.clone();
        if (obj.material.envMap !== undefined) {
          obj.material.envMap = matcapTexture;
          obj.material.envMapIntensity = 0.8;
        }
        obj.material.needsUpdate = true;
      } else if (original?.originalMaterial) {
        obj.material = original.originalMaterial;
      }
    }
  });
};

// Normals helper management
export const updateNormalsHelpers = (
  scene: any,
  showNormals: boolean,
  normalsHelpersRef: React.MutableRefObject<VertexNormalsHelper[]>
) => {
  // Clean up previous helpers
  normalsHelpersRef.current.forEach(helper => {
    scene.remove(helper);
    helper.dispose();
  });
  normalsHelpersRef.current = [];
  
  if (showNormals) {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        const helper = new VertexNormalsHelper(obj, 0.1, 0x00ff00);
        scene.add(helper);
        normalsHelpersRef.current.push(helper);
      }
    });
  }
};

// Bounding box helper management
export const updateBoundingBoxHelper = (
  scene: any,
  showBoundingBox: boolean,
  boundingBoxHelperRef: React.MutableRefObject<BoxHelper | null>
) => {
  if (boundingBoxHelperRef.current) {
    scene.remove(boundingBoxHelperRef.current);
    boundingBoxHelperRef.current.dispose();
    boundingBoxHelperRef.current = null;
  }
  
  if (showBoundingBox) {
    const helper = new BoxHelper(scene, 0xffff00);
    scene.add(helper);
    boundingBoxHelperRef.current = helper;
  }
};

// Save original materials
export const saveOriginalMaterials = (
  scene: any,
  originalMaterialsRef: React.MutableRefObject<Map<any, any>>
) => {
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
};

// Main controller hook
export function useR3fViewerController() {
  const [settings, setSettings] = useState<R3fViewerSettings>(defaultSettings);
  const [theaterMode, setTheaterMode] = useState(false);
  
  const updateSettings = (key: keyof R3fViewerSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };
  
  const resetSettings = () => {
    setSettings(defaultSettings);
  };
  
  const toggleTheaterMode = () => {
    setTheaterMode(prev => !prev);
  };
  
  return {
    settings,
    setSettings,
    updateSettings,
    resetSettings,
    theaterMode,
    setTheaterMode,
    toggleTheaterMode,
  };
}
