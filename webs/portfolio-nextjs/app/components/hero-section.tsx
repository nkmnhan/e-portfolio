"use client";
import { useState } from "react";
import { clsxMerge } from "@/app/components/themes/utils";
import AdaptiveImage from "./images/adaptive-image";
import { NSerifLogo } from "./logos";

export default function HeroSection() {
  const [showPoster, setShowPoster] = useState(false);
  return (
    <div
      className={clsxMerge(
        "relative flex flex-col min-h-screen items-center justify-center overflow-hidden"
      )}
    >
      {/* Background Video with poster */}
      <video
        className={
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
        }
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
          className={
            "absolute inset-0 w-full h-full object-cover z-1 transition-opacity duration-500"
          }
          fill
          src="/home/poster.jpg"
          alt="Video fallback"
        />
      )}
      {/* Dot Cover Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-2 pointer-events-none"
        style={{
          backgroundImage: "url('/dot.png')",
          backgroundSize: "4px 4px",
          opacity: 1,
        }}
      />
      <main className="relative z-3 flex flex-col items-center">
        <div className="h-24 w-24 md:h-32 md:w-32 lg:h-44 lg:w-44 relative rounded-lg bg-[#00000033]">
          <AdaptiveImage
            className="invert dark:invert-0 object-cover"
            src="/logo.svg"
            alt="Github Porfolio QR Code"
            fill
            draggable={false}
            preload
          />
        </div>
        <h1
          className={clsxMerge(
            "font-semibold text-center text-2xl md:text-5xl mt-1",
            "text-white walt-disney"
          )}
        >
          NKM-NHAN
        </h1>
      </main>
    </div>
  );
}
