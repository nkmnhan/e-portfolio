import { TEST_IMAGE_URLS } from "./downloaded-files";

type ProjectType = "private" | "public";

export interface ProjectInfo {
  id: string;
  type?: ProjectType;
  title?: string;
  poster: string;
  description?: string;
  createddate?: string;
  updateddate?: string;
}

// Test carousel images from Flowbite (5 images only for testing)
const RAW_URLS = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  "https://flowbite.com/docs/images/carousel/carousel-5.svg",
];

const tempData = TEST_IMAGE_URLS && TEST_IMAGE_URLS.length > 0 ? TEST_IMAGE_URLS.map(file => `/temp-images/${file}`) : RAW_URLS;

const IMAGE_URLS: Array<ProjectInfo> =  tempData.map((poster, i) => {
  const id = i.toString();
  const type = i % 2 === 0 ? "public" : "private";
  const title = `Project Title ${id}`;
  const description = `This is a sample description for project ${id}. It demonstrates the project's features and purpose.`;
  const createddate = `2025-11-${String((i % 28) + 1).padStart(2, '0')}`;
  const updateddate = `2025-12-${String((i % 5) + 1).padStart(2, '0')}`;
  return { id, poster: poster, type, title, description, createddate, updateddate };
});

export default IMAGE_URLS;
