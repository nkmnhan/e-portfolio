import { Carousel } from "flowbite";
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from "flowbite";
import type { InstanceOptions } from "flowbite";
import { useRef, useEffect } from "react";

export interface BrandGalleryItem {
  src: string;
  alt: string;
  logoSrc: string;
  logoAlt: string;
}

export interface BrandGalleryProps {
  src: BrandGalleryItem[];
}

export default function BrandGallery({ src }: BrandGalleryProps) {
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
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
        items: src.map((_, index) => ({
          position: index,
          el: indicatorRefs.current[index] as HTMLElement,
        })),
      }
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

    carouselInstance.current.cycle();

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
        className="relative w-full"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-base md:h-96">
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
              <img
                src={item.src}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={item.alt}
              />
              {item.logoSrc && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                  <img
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    className="h-12 md:h-16 object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {src.map((_, index) => (
            <button
              key={index}
              ref={(el) => {
                indicatorRefs.current[index] = el;
              }}
              type="button"
              className="w-3 h-3 rounded-base"
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
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          ref={nextButtonRef}
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
