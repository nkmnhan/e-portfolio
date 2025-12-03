import Image from "next/image";
import { useRef } from "react";
import useColorThief from 'use-color-thief';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  title?: string;
  description?: string;
}

export default function ImageCard({ src, alt, className, style, loading, title, description }: ImageCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const { color, palette } = useColorThief(imgRef as React.RefObject<HTMLImageElement>, {
    format: 'hex',
    colorCount: 5,
    quality: 10,
  });

  return (
    <div
      className={`group relative cursor-pointer ${className}`}
      style={style}
    >
      {/* Poster */}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg shadow mb-2 max-w-full max-h-200 group-hover:rounded-b-none"
        loading={loading}
      />
      {/* Description Popup (hidden by default, shown on hover, starts at foot of poster) */}
      <div
        className="text-white absolute bottom-0 p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 group-hover:translate-y-30 h-30 backdrop-blur-sm"
        style={{ background: color?.toString() ?? '#000000db' }}>
        <h6 className="flex items-center gap-2 font-bold mb-2">{title}</h6>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
}