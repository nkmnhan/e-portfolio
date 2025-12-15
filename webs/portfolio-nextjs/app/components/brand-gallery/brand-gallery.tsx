import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react/types";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { clsxMerge } from "../themes/utils";
import { textWhite } from "../themes/default-text";
import AdaptiveImage from "../images/adaptive-image";

export interface BrandGalleryItem {
  src: string;
  alt: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
}

export interface BrandGalleryProps {
  className?: string;
  src: BrandGalleryItem[];
}

const slideClass =
  "absolute top-0 flex h-full items-center justify-center px-4 focus:outline-none -translate-y-8";
const iconClass =
  "w-12 h-12 bg-white rounded-full flex items-center justify-center sm:w-14 sm:h-14";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "relative h-full w-full",
    leftControl: clsxMerge(slideClass, "left-0"),
    rightControl: clsxMerge(slideClass, "right-0"),
  },
  indicators: {
    active: {
      off: "bg-white",
      on: "bg-black",
    },
    base: "w-2 h-2 rounded-full border border-black",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 sm:bottom-6",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full shrink-0 transform cursor-default snap-center",
      on: "w-full shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",
    icon: "h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function BrandGallery({ className, src }: BrandGalleryProps) {
  return (
    <div className={className}>
      <Carousel
        theme={customTheme}
        leftControl={
          <span className={iconClass}>
            <AiFillLeftCircle className="w-10 h-10" />
          </span>
        }
        rightControl={
          <span className={iconClass}>
            <AiFillRightCircle className="w-10 h-10" />
          </span>
        }
      >
        {src.map((item, index) => (
          <div className="relative w-full h-full">
            <AdaptiveImage
              className="object-cover pb-12 pl-4 pr-4 sm:pl-10 sm:pr-10"
              src={item.src}
              alt={item.alt}
              fill
            />
            {item.logoSrc && (
              <div className="min-w-20 min-h-10 sm:min-w-50 sm:min-h-25 absolute bottom-4 right-4 sm:right-28 bg-white rounded flex items-center justify-center shadow-lg">
                <AdaptiveImage
                  src={item.logoSrc}
                  alt={item.logoAlt}
                  fill
                  className="object-contain p-2"
                />
              </div>
            )}
            {item.title && item.description && (
              <div
                className={clsxMerge(
                  "absolute bottom-12 left-4 sm:left-16 p-2 sm:p-4 max-w-xs sm:max-w-md",
                  textWhite
                )}
              >
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                <span className="text-xs sm:text-sm">{item.description}</span>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
