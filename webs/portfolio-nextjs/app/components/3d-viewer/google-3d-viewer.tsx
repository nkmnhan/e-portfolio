"use client";
import { useEffect, useState } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        "auto-rotate"?: boolean;
        "camera-controls"?: boolean;
        "shadow-intensity"?: number;
        exposure?: number;
        "environment-image"?: string;
        poster?: string;
        loading?: "auto" | "lazy" | "eager";
      };
    }
  }
}

export default function Google3DViewer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if model-viewer is already registered
    if (customElements.get("model-viewer")) {
      setIsLoaded(true);
      return;
    }

    // Only import on client side if not already registered
    import("@google/model-viewer").then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return (
      <div
        role="status"
        className="flex items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-900 animate-pulse"
      >
        <svg
          className="w-11 h-11 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <model-viewer
      src="/sketch/just_a_girl_texture_1k.glb"
      alt="3D model"
      auto-rotate
      camera-controls
      className="w-full h-screen bg-gray-100 dark:bg-gray-900"
    />
  );
}
