'use client';

import { useSyncExternalStore } from 'react';

// Touch-only devices do NOT match this query; desktop/laptop devices do
const HOVER_QUERY = '(hover: hover)';

function subscribeToHoverQuery(onChange: () => void) {
  // Fires when hover capability changes (e.g., connecting/disconnecting a mouse)
  const hoverQuery = window.matchMedia(HOVER_QUERY);
  hoverQuery.addEventListener('change', onChange);
  return () => hoverQuery.removeEventListener('change', onChange);
}

function getIsTouchDevice() {
  return !window.matchMedia(HOVER_QUERY).matches;
}

function getServerIsTouchDevice() {
  return false;
}

/**
 * Detects if the device supports touch/hover capabilities
 * Uses @media(hover: hover) to differentiate between touch and hover-capable devices
 *
 * @returns {boolean} true if device is touch-only (no hover support), false if device has hover
 */
export function useTouchDevice(): boolean {
  return useSyncExternalStore(subscribeToHoverQuery, getIsTouchDevice, getServerIsTouchDevice);
}
