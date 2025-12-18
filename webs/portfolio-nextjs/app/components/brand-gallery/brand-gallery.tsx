import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react/types";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { clsxMerge } from "../themes/utils";
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
  "absolute top-1/2 transform -translate-y-5/8 sm:-translate-y-1/2 flex h-full items-center justify-center px-3 focus:outline-none";
const iconClass =
  "w-8 h-8 rounded-full flex items-center justify-center sm:w-12 sm:h-12";

const customTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    base: "relative h-full w-full",
    leftControl: clsxMerge(slideClass, "left-0"),
    rightControl: clsxMerge(slideClass, "right-0"),
  },
  indicators: {
    active: {
      off: "",
      on: "",
    },
    base: "w-2 h-2 rounded-full border border-black",
    wrapper:
      "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3 sm:bottom-6",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full shrink-0 transform cursor-default snap-center",
      on: "w-full shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-7 w-7 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-3 sm:h-9 sm:w-9",
    icon: "h-4 w-4 text-white sm:h-5 sm:w-5 dark:text-gray-800",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function BrandGallery({ className, src }: BrandGalleryProps) {
  return (
    <div
      className={clsxMerge(
        className,
        "w-full h-56 sm:h-72 md:h-96 lg:h-112"
      )}
    >
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
          <div key={index} className="relative w-full h-full">
            <AdaptiveImage
              className="object-cover pb-12 pl-6 pr-6 sm:pl-10 sm:pr-10"
              src={item.src}
              alt={item.alt}
              fill
            />
            {item.logoSrc && (
              <div className="w-24 h-12 sm:w-48 sm:h-24 absolute bottom-8 sm:bottom-4 right-8 sm:right-28 rounded flex items-center justify-center shadow-lg">
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
                  "absolute bottom-12 left-10 sm:left-16 p-2 sm:p-4 max-w-xs sm:max-w-md"
                )}
              >
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
                <span className="text-xs sm:text-sm">{item.description}</span>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
