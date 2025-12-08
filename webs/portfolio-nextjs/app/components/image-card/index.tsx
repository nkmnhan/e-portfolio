import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useColorThief, { ColorThiefOutput } from "use-color-thief";
import { clsxMerge } from "@/app/components/themes/utils";
import { textWhite } from "@/app/components/themes/default-text";

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

const posterClass = "object-cover rounded shadow max-w-full";

const descPopupClass = clsxMerge(
  "absolute bottom-0 left-0 w-full p-4 rounded-b-lg transition-all duration-200 z-10",
  "h-32",
  "backdrop-blur-sm",
  textWhite
);

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
  const [xStyle, setXStyle] = useState<React.CSSProperties | undefined>(undefined);
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
        forceHover ? "hover" : ""
      )}
      style={xStyle}
    >
      {/* Poster */}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        fill
        className={clsxMerge(
          posterClass,
          "group-hover:rounded-b-none",
          forceHover ? "rounded-b-none" : ""
        )}
        loading={loading}
      />
      {/* Description Popup */}
      <div
        className={clsxMerge(
          descPopupClass,
          "opacity-0",
          forceHover
            ? showDesc
              ? "opacity-100 translate-y-8"
              : "opacity-0"
            : "group-hover:opacity-100 group-hover:translate-y-32"
        )}
        style={{ background: color }}
      >
        <h6 className={clsxMerge("flex items-center gap-2 font-bold mb-2")}>{title}</h6>
        <p className={clsxMerge("text-sm line-clamp-3")}>{description}</p>
      </div>
    </div>
  );
}
