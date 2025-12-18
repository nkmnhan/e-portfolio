"use client";
import { clsxMerge } from "@/app/components/themes/utils";
import AdaptiveImage from "./components/images/adaptive-image";
import { useState } from "react";

export default function Home() {
  const [showPoster, setShowPoster] = useState(false);
  return (
    <div
      className={clsxMerge(
        "relative flex flex-col min-h-screen items-center justify-center overflow-hidden"
      )}
    >
      {/* Background Video with poster */}
      <video
        className={"absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"}
        autoPlay
        loop
        muted
        playsInline
        poster="/home/poster.jpg"
        onError={() => setShowPoster(true)}
      >
        <source src="/home/bg.mp4" type="video/mp4" />
      </video>
      {showPoster && (
        <AdaptiveImage
          className={"absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"}
          fill
          src="/home/poster.jpg"
          alt="Video fallback"
        />
      )}
      {/* Dot Cover Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/dot.png')",
          backgroundSize: "4px 4px",
          opacity: 1,
        }}
      />
      <main className="relative z-20 flex flex-col items-center">
        <div className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 relative rounded-lg bg-[#00000033]">
          <AdaptiveImage
            className="invert object-cover"
            src="/logo.svg"
            alt="Github Porfolio QR Code"
            fill
            preload
          />
        </div>
        <h1
          className={clsxMerge(
            "font-semibold text-center text-2xl md:text-4xl mt-1"
          )}
        >
          NKM-NHAN
        </h1>
      </main>
    </div>
  );
}
