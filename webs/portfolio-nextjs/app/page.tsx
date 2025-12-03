"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://mindbender.com/content/images/gallery-the-pirate-parrot.jpg"
        alt="Background"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />
      {/* Background Video (over image if loaded) */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-10 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source
          src="https://mindbender.com/content/videos/starting-page-video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Dot Cover Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/dot.png')", // Place your 3x3px dot image in public/dot.png
              backgroundSize: "3px 3px",
    opacity: 1
        }}
      />
      <main className="relative z-20 flex flex-col items-center">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Github Porfolio QR Code"
          width={120}
          height={120}
        />
        <h1 className="font-semibold text-gray-900 dark:text-white text-center">
          NKMNHAN
        </h1>
      </main>
    </div>
  );
}
