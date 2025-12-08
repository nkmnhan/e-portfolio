import { BrandGalleryItem } from ".";

const logos = [
  "/carousel/free-time1.jpg",
  "/carousel/free-time2.jpg",
  "/carousel/free-time3.jpg",
  "/carousel/free-time4.jpg",
  "/carousel/free-time5.jpg",
];

const details: { title: string; description: string }[] = [
  { title: "Brand Logo 1", description: "Description for Brand Logo 1" },
  { title: "Brand Logo 2", description: "Description for Brand Logo 2" },
  { title: "Brand Logo 3", description: "Description for Brand Logo 3" },
  { title: "Brand Logo 4", description: "Description for Brand Logo 4" },
  { title: "Brand Logo 5", description: "Description for Brand Logo 5" },
];

const urls = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  "https://flowbite.com/docs/images/carousel/carousel-5.svg",
];

const BrandGallaryTestData: BrandGalleryItem[] = urls.map((url, index) => ({
  src: url,
  alt: `Carousel image ${index + 1}`,
  logoSrc: logos[index] || "",
  logoAlt: "", // Provide appropriate logoAlt if available
  title: details[index]?.title || "",
  description: details[index]?.description || "",
}));

export default BrandGallaryTestData;
