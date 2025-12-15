"use client";
import { memo, useState, forwardRef } from "react";
import { ImagePlaceholder } from "../skeletons/image-placeholder";
import Image, { ImageProps } from "next/image";

// Extend ImageProps and add custom props
export interface AdaptiveImageProps extends Omit<ImageProps, "ref"> {
  containerClass?: string;
  showSkeleton?: boolean;
  customPlaceholder?: React.ReactNode;
}
const AdaptiveImage = forwardRef<HTMLImageElement, AdaptiveImageProps>(
  (
    {
      containerClass,
      className,
      showSkeleton = false,
      customPlaceholder,
      ...imageProps
    },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div className={containerClass}>
        {isLoading &&
          showSkeleton &&
          (customPlaceholder ? (
            <>{customPlaceholder}</>
          ) : (
            <ImagePlaceholder
              className="p-2 h-full w-full"
              imageClassName="rounded h-1/2"
              orientation="vertical"
            />
          ))}
        <Image
          ref={ref}
          className={className}
          onLoadingComplete={() => setIsLoading(false)}
          {...imageProps}
        />
      </div>
    );
  }
);

AdaptiveImage.displayName = "AdaptiveImage";

export default memo(AdaptiveImage);

// Utility classes for image usage
export const adaptiveImageContainerClass =
  "relative overflow-hidden bg-gray-100";
export const adaptiveImageClass =
  "object-cover w-full h-full transition-opacity duration-300";

// Aspect ratio utility classes
export const adaptiveImageRatioSquare = "aspect-square";
export const adaptiveImageRatioPortrait = "aspect-[3/4]";
export const adaptiveImageRatioVideo = "aspect-video";
export const adaptiveImageRatioLandscape = "aspect-[4/3]";

// Max size utility classes for each aspect ratio
export const adaptiveImageMaxSquare = "max-w-xs max-h-xs"; // e.g., 20rem x 20rem
export const adaptiveImageMaxPortrait = "max-w-xs max-h-[32rem]"; // e.g., 20rem x 32rem
export const adaptiveImageMaxVideo = "max-w-lg max-h-[18rem]"; // e.g., 32rem x 18rem
export const adaptiveImageMaxLandscape = "max-w-lg max-h-[24rem]"; // e.g., 32rem x 24rem
