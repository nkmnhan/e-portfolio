"use client";
import { useEffect, useState } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        'shadow-intensity'?: number;
        exposure?: number;
        'environment-image'?: string;
        poster?: string;
        loading?: 'auto' | 'lazy' | 'eager';
      };
    }
  }
}

export default function ModelViewer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if model-viewer is already registered
    if (customElements.get('model-viewer')) {
      setIsLoaded(true);
      return;
    }
    
    // Only import on client side if not already registered
    import('@google/model-viewer').then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading 3D viewer...</div>;
  }

  return (
    <model-viewer
      src="/sketch/just_a_girl_texture_1k.glb"
      alt="3D model"
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '100vh' }}
    />
  );
}