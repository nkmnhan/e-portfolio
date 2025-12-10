"use client";

import SnapEdge from '../../components/snap-edge';

export default function SnapEdgeDemo() {
  return (
    <div className="relative h-screen bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg">
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Draggable Floating Menu
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Drag the floating bubble around. When you release it, it will snap to the nearest edge.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Drag the bubble to move it</li>
          <li>Release to snap to nearest edge</li>
          <li>Tap for action (customizable)</li>
          <li>Smooth spring animations</li>
        </ul>
      </div>
      <SnapEdge 
        onClick={() => alert('Bubble tapped!')}
      >
        <div className="flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>
      </SnapEdge>
    </div>
  );
}
