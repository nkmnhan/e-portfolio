"use client";

import AdaptiveImage from "@/app/components/images/adaptive-image";
import SnapEdge from "../../components/snap-edge";

export default function SnapEdgeDemo() {
  return (
    <div className="flex h-full w-full bg-linear-to-br from-gray-100 to-gray-200 rounded">
      <div className="p-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Draggable Floating Menu
        </h2>
        <p className="text-gray-600 mb-4">
          Drag the floating bubble around. When you release it, it will snap to
          the nearest corner.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Drag the bubble to move it</li>
          <li>Release to snap to nearest corner</li>
          <li>Tap for action (customizable)</li>
          <li>Smooth spring animations</li>
        </ul>
      </div>
      <div className="w-full h-full">
        <SnapEdge
          id="rocket"
          useParent={true}
          onClick={() => alert("Rocket tapped!")}
          defaultVertical="top"
          defaultHorizontal="right"
        >
          <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
        </SnapEdge>
      </div>
      <div className="w-full h-full">
        <SnapEdge
          id="ufo"
          useParent={true}
          onClick={() => alert("UFO tapped!")}
          defaultHorizontal="left"
          defaultVertical="bottom"
        >
          <div className="w-full h-full bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <AdaptiveImage
              src="/ufo.svg"
              alt="UFO"
              width={48}
              height={48}
              draggable={false}
            />
          </div>
        </SnapEdge>
      </div>
    </div>
  );
}
