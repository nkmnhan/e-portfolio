import BrandGallary from "@/app/components/brand-gallery";
import BrandGallaryTestData from "@/app/components/brand-gallery/data";

export default function BrandGalleryDemo() {
  return (
    <div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Example brand gallery component</p>
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
       <BrandGallary className="w-[80vw] h-140 m-auto" src={BrandGallaryTestData} />
      </div>
    </div>
  );
}
