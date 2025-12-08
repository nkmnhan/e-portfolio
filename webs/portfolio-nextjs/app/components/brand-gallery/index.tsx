import { Carousel } from "flowbite-react";
import Image from "next/image";
import { Caramel } from "next/font/google";

export interface BrandGalleryItem {
  src: string;
  alt: string;
  logoSrc: string;
  logoAlt: string;
}

export interface BrandGalleryProps {
  src: BrandGalleryItem[];
}

const urls = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
];
const tempData: BrandGalleryItem[] = urls.map((url, index) => ({
  src: url,
  alt: `Carousel image ${index + 1}`,
  logoSrc: "https://walt-disney-studios.s3.amazonaws.com/disney_f6a189acd1.svg", // Provide appropriate logoSrc if available
  logoAlt: "", // Provide appropriate logoAlt if available
}));

export default function BrandGallery({ src }: BrandGalleryProps) {
  src = tempData;
  return (
    <>
      <Carousel slideInterval={5000}>
        {src.map((item, index) => (
          <div className="relative w-full h-full flex items-center justify-center" key={index}>
            <Image 
              src={item.src} 
              alt={item.alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 right-4 z-10">
              <Image
                width={100}
                height={50}
                src={item.logoSrc}
                alt={item.logoAlt}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
