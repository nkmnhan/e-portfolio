"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, useGLTF, Html, useProgress } from '@react-three/drei';
import { useState } from 'react';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ 
        color: 'white', 
        fontSize: '24px', 
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        <div>{progress.toFixed(0)}% loaded</div>
        <div style={{
          width: '200px',
          height: '4px',
          background: '#333',
          marginTop: '10px',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'white',
            transition: 'width 0.3s'
          }} />
        </div>
      </div>
    </Html>
  );
}

function Model({ scale }: { scale: number }) {
  // Load the GLB model from the sketch folder
  const gltf = useGLTF('/sketch/just_a_girl_texture_2k.glb');
  
  return (
    <Center>
      <primitive object={gltf.scene} scale={scale} />
    </Center>
  );
}

export default function ModelViewer() {
  const [scale, setScale] = useState(0.01);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model scale={scale} />
        <OrbitControls />
        <Html>
          <Loader />
        </Html>
      </Canvas>
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '15px 20px',
        borderRadius: '10px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        zIndex: 10
      }}>
        <label>Scale: {scale.toFixed(3)}</label>
        <input 
          type="range" 
          min="0.001" 
          max="0.05" 
          step="0.001" 
          value={scale}
          onChange={(e) => setScale(parseFloat(e.target.value))}
          style={{ width: '200px' }}
        />
      </div>
    </div>
  );
}