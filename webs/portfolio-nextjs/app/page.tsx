import Image from "next/image";

export default function Home() {

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Video with poster */}
      <video
        className={`absolute inset-0 w-full h-full object-cover z-0  transition-opacity duration-500`}
        autoPlay
        loop
        muted
        playsInline
        poster="/home/poster.jpg"
      >
        <source
          src="/home/bg.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dot Cover Overlay */}
      <div
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/dot.png')", // Place your 3x3px dot image in public/dot.png
          backgroundSize: "3px 3px",
          opacity: 1,
        }}
      />
      <main className="relative z-20 flex flex-col items-center">
        <div className="h-100 w-100 relative rounded-lg bg-[#00000033]"><Image
          className="invert object-cover"
          src="/logo.svg"
          alt="Github Porfolio QR Code"
          fill
        /></div>

        <h1 className="font-semibold text-white text-center text-4xl mt-1">NKM-NHAN</h1>
      </main>
    </div>
  );
}
