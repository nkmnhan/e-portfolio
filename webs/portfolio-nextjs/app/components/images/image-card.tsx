import { useEffect, useRef, useState } from "react";
import useColorThief, { ColorThiefOutput } from "use-color-thief";
import { clsxMerge } from "@/app/components/themes/utils";
import AdaptiveImage from "./adaptive-image";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  title?: string;
  description?: string;
  forceHover?: boolean;
}

export default function ImageCard({
  src,
  alt,
  className,
  style,
  loading,
  title,
  description,
  forceHover = false,
}: ImageCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [color, setColor] = useState("#10172f");
  const [xClassName, setXClassName] = useState("");
  const [xStyle, setXStyle] = useState<React.CSSProperties | undefined>(
    undefined
  );
  const [showDesc, setShowDesc] = useState(false);
  const output: ColorThiefOutput = useColorThief(src, {
    format: "hex",
    colorCount: 5,
    quality: 10,
  });

  useEffect(() => {
    setXClassName(className ? className : "");
    setXStyle(style ? style : undefined);
    if (output.color) {
      setColor(output.color as string);
    }
  }, [output.color]);

  useEffect(() => {
    if (forceHover) {
      const timer = setTimeout(() => setShowDesc(true), 180); // 180ms delay
      return () => clearTimeout(timer);
    } else {
      setShowDesc(false);
    }
  }, [forceHover]);

  return (
    <div
      className={clsxMerge(
        "group relative cursor-pointer w-full",
        xClassName,
        forceHover && "hover"
      )}
      style={xStyle}
    >
      {/* Poster */}
      <AdaptiveImage
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className={clsxMerge(
          "object-cover rounded shadow max-w-full",
          "group-hover:rounded-b-none",
          forceHover && "rounded-b-none"
        )}
        loading={loading}
      />
      {/* Description Popup */}
      <div
        className={clsxMerge(
          "absolute bottom-0 left-0 w-full p-2 md:p-4 rounded-b transition-all duration-200 z-1",
          "h-24 md:h-32",
          "backdrop-blur-sm",
          "text-white",
          "opacity-0",
          forceHover
            ? showDesc
              ? "opacity-100 translate-y-32"
              : "opacity-0"
            : "group-hover:opacity-100 group-hover:translate-y-31"
        )}
        style={{
          background: `linear-gradient(135deg, ${color}dd 0%, ${color}aa 50%, ${color}88 100%)`,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2)`,
        }}
      >
        <h6
          className={clsxMerge(
            "flex items-center gap-2 font-bold mb-2 line-clamp-1"
          )}
        >
          {title}
        </h6>
        <p className={clsxMerge("text-sm line-clamp-3")}>{description}</p>
      </div>
    </div>
  );
}
