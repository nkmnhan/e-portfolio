'use client';

import { useEffect, useState } from 'react';

/**
 * Detects if the device supports touch/hover capabilities
 * Uses @media(hover: hover) to differentiate between touch and hover-capable devices
 * 
 * @returns {boolean} true if device is touch-only (no hover support), false if device has hover
 */
export function useTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if the device supports hover capability
    // Touch-only devices will NOT match this media query
    // Desktop/laptop devices WILL match this query
    const hoverQuery = window.matchMedia('(hover: hover)');
    
    // If hover is NOT supported, it's a touch device
    setIsTouchDevice(!hoverQuery.matches);

    // Listen for changes in hover capability (e.g., connecting/disconnecting mouse)
    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };

    hoverQuery.addEventListener('change', handleChange);
    
    return () => {
      hoverQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isTouchDevice;
}
