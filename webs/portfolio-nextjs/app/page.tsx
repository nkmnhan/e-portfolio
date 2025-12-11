import Image from "next/image";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textWhite } from "@/app/components/themes/default-text";



export default function Home() {
  return (
    <div
      className={clsxMerge(
        "relative flex flex-col min-h-screen items-center justify-center overflow-hidden",
        bgPrimary
      )}
    >
      {/* Background Video with poster */}
      <video
        className={clsxMerge(
          "absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
        )}
        autoPlay
        loop
        muted
        playsInline
        poster="/home/poster.jpg"
      >
        <source src="/home/bg.mp4" type="video/mp4" />
      </video>
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
        <div className="h-100 w-100 relative rounded-lg bg-[#00000033]">
          <Image
            className="invert object-cover"
            src="/logo.svg"
            alt="Github Porfolio QR Code"
            fill
          />
        </div>
        <h1
          className={clsxMerge(
            "font-semibold text-center text-4xl mt-1",
            textWhite
          )}
        >
          NKM-NHAN
        </h1>
      </main>
    </div>
  );
}
