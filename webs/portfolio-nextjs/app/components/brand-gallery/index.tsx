import { Carousel } from "flowbite";
import type {
    CarouselItem,
    CarouselOptions,
    CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';
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

const logos = ["https://walt-disney-studios.s3.amazonaws.com/disney_f6a189acd1.svg",
"https://walt-disney-studios.s3.amazonaws.com/lucasfilmlogo_77d86c53eb.png",
"https://walt-disney-studios.s3.amazonaws.com/Pixar_logo_1063ed0633.png",
"https://walt-disney-studios.s3.amazonaws.com/Disney_Theatrical_Group_0368273d86.png"];

const urls = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
];
const tempData: BrandGalleryItem[] = urls.map((url, index) => ({
  src: url,
  alt: `Carousel image ${index + 1}`,
  logoSrc: logos[index] || "",
  logoAlt: "", // Provide appropriate logoAlt if available
}));

export default function BrandGallery({ src }: BrandGalleryProps) {
  src = tempData;
  const carouselElement = useRef<HTMLDivElement>(null);
  const carouselInstance = useRef<CarouselInterface | null>(null);
  
  // Refs for carousel items
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const item4Ref = useRef<HTMLDivElement>(null);
  const item5Ref = useRef<HTMLDivElement>(null);
  
  // Refs for indicators
  const indicator1Ref = useRef<HTMLButtonElement>(null);
  const indicator2Ref = useRef<HTMLButtonElement>(null);
  const indicator3Ref = useRef<HTMLButtonElement>(null);
  const indicator4Ref = useRef<HTMLButtonElement>(null);
  const indicator5Ref = useRef<HTMLButtonElement>(null);
  
  // Refs for controls
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!carouselElement.current) return;

    const items: CarouselItem[] = [
      {
        position: 0,
        el: item1Ref.current as HTMLElement,
      },
      {
        position: 1,
        el: item2Ref.current as HTMLElement,
      },
      {
        position: 2,
        el: item3Ref.current as HTMLElement,
      },
      {
        position: 3,
        el: item4Ref.current as HTMLElement,
      },
      {
        position: 4,
        el: item5Ref.current as HTMLElement,
      },
    ];

    const options: CarouselOptions = {
      defaultPosition: 0,
      interval: 3000,
      indicators: {
        activeClasses: 'bg-white dark:bg-gray-800',
        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
        items: [
          {
            position: 0,
            el: indicator1Ref.current as HTMLElement,
          },
          {
            position: 1,
            el: indicator2Ref.current as HTMLElement,
          },
          {
            position: 2,
            el: indicator3Ref.current as HTMLElement,
          },
          {
            position: 3,
            el: indicator4Ref.current as HTMLElement,
          },
          {
            position: 4,
            el: indicator5Ref.current as HTMLElement,
          },
        ],
      },
      onNext: () => {
        console.log('next slider item is shown');
      },
      onPrev: () => {
        console.log('previous slider item is shown');
      },
      onChange: () => {
        console.log('new slider item has been shown');
      },
    };

    const instanceOptions: InstanceOptions = {
      id: 'brand-gallery-carousel',
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

    prevButton?.addEventListener('click', handlePrev);
    nextButton?.addEventListener('click', handleNext);

    // Cleanup
    return () => {
      prevButton?.removeEventListener('click', handlePrev);
      nextButton?.removeEventListener('click', handleNext);
      carouselInstance.current?.pause();
    };
  }, []);


  return (
    <>
      <div ref={carouselElement} className="relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-base md:h-96">
          {/* Item 1 */}
          <div ref={item1Ref} className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 2 */}
          <div ref={item2Ref} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 3 */}
          <div ref={item3Ref} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 4 */}
          <div ref={item4Ref} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 5 */}
          <div ref={item5Ref} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button ref={indicator1Ref} type="button" className="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button ref={indicator2Ref} type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button ref={indicator3Ref} type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button ref={indicator4Ref} type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button ref={indicator5Ref} type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        {/* Slider controls */}
        <button ref={prevButtonRef} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button ref={nextButtonRef} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
