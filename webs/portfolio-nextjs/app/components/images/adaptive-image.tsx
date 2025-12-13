import { memo, useState } from "react";
import Image from "next/image";
import { clsxMerge } from "../themes/utils";
import { ImagePlaceholder } from "../skeletons/image-placeholder";

interface AdaptiveImageProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  loading?: "eager" | "lazy";
  showSkeleton?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | string; // Add this
}

function AdaptiveImage({
  className,
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  loading = "lazy",
  showSkeleton = false,
  aspectRatio = "video", // Default 16:9
}: AdaptiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Apply aspect ratio to prevent layout shift
  const aspectRatioClasses: Record<string, string> = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
  };

  const containerClass = clsxMerge(
    "relative w-full",
    aspectRatio in aspectRatioClasses ? aspectRatioClasses[aspectRatio] : "",
    typeof aspectRatio === "string" && aspectRatio.includes("/") ? `aspect-[${aspectRatio}]` : "",
    className
  );

  return (
    <div className={containerClass}>
      {isLoading && showSkeleton && <ImagePlaceholder />}
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        loading={priority ? "eager" : loading}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        width={width}
        height={height}
        fill={fill || !width || !height} // Auto-fill if no dimensions
      />
    </div>
  );
}

export default memo(AdaptiveImage);
