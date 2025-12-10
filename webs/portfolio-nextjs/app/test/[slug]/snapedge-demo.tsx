"use client";

import { HR } from 'flowbite-react';
import SnapEdge from '../../components/snap-edge';

export default function SnapEdgeDemo() {
  return (
    <div className="h-screen bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Draggable Floating Menu
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Drag the floating bubble around. When you release it, it will snap to the nearest corner.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Drag the bubble to move it</li>
          <li>Release to snap to nearest corner</li>
          <li>Tap for action (customizable)</li>
          <li>Smooth spring animations</li>
        </ul>
      </div>
      
      <div className="relative w-full h-full">
        <SnapEdge 
          useParent={true}
          onClick={() => alert('Bubble tapped!')}
        >
          <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
        </SnapEdge>
      </div>
    </div>
  );
}
