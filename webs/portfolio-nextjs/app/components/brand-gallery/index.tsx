import { Carousel } from "flowbite";
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from "flowbite";
import type { InstanceOptions } from "flowbite";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { clsxMerge } from "../themes/utils";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

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

export default function BrandGallery({ className, src }: BrandGalleryProps) {
  // Refs for carousel element
  const carouselElement = useRef<HTMLDivElement>(null);
  // Ref for carousel instance to control it programmatically
  const carouselInstance = useRef<CarouselInterface | null>(null);

  // Dynamic refs for carousel items and indicators
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Refs for controls
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!carouselElement.current || src.length === 0) return;

    const items: CarouselItem[] = src.map((_, index) => ({
      position: index,
      el: itemRefs.current[index] as HTMLElement,
    }));

    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        items: src.map((_, index) => ({
          position: index,
          el: indicatorRefs.current[index] as HTMLElement,
        })),
        activeClasses: "bg-black",
        inactiveClasses: "bg-white",
      },
    };

    const instanceOptions: InstanceOptions = {
      id: "brand-gallery-carousel",
      override: true,
    };

    carouselInstance.current = new Carousel(
      carouselElement.current,
      items,
      options,
      instanceOptions
    );

    // carouselInstance.current.cycle();

    // Set up event listeners for prev and next buttons
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const handlePrev = () => {
      carouselInstance.current?.prev();
    };

    const handleNext = () => {
      carouselInstance.current?.next();
    };

    prevButton?.addEventListener("click", handlePrev);
    nextButton?.addEventListener("click", handleNext);

    // Cleanup
    return () => {
      prevButton?.removeEventListener("click", handlePrev);
      nextButton?.removeEventListener("click", handleNext);
      carouselInstance.current?.pause();
    };
  }, [src]);

  return (
    <>
      <div
        ref={carouselElement}
        className={clsxMerge("relative w-full h-full mb-12", className)}
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative h-full overflow-x-clip overflow-y-visible rounded-base">
          {src.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="hidden duration-700 ease-in-out"
              data-carousel-item={index === 0 ? "active" : undefined}
            >
              {/* Carousel item */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="absolute block w-full object-cover"
              />
              {item.logoSrc && (
                  <div className="min-w-50 min-h-25 absolute -bottom-8 bg-white rounded right-1/12 flex items-center justify-center shadow-lg">
                    <Image
                      src={item.logoSrc}
                      alt={item.logoAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
              )}
              {item.title && item.description && (
                <div className="absolute bottom-4 left-4 p-4 max-w-md text-white">
                  <h4 className="font-semibold mb-2">
                    {item.title}
                  </h4>
                  <span className="text-sm">{item.description}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse -bottom-8 left-1/12">
          {src.map((_, index) => (
            <button
              key={index}
              ref={(el) => {
                indicatorRefs.current[index] = el;
              }}
              type="button"
              className="w-2 h-2 rounded-full border border-black"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index.toString()}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          ref={prevButtonRef}
          type="button"
          className="absolute -left-10 top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <AiFillLeftCircle className="w-10 h-10" />
          </span>
        </button>
        <button
          ref={nextButtonRef}
          type="button"
          className="absolute -right-10 top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <AiFillRightCircle className="w-10 h-10" />
          </span>
        </button>
      </div>
    </>
  );
}
