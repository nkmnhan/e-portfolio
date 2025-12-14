import BrandGallary from "@/app/components/brand-gallery";
import BrandGallaryTestData from "@/app/components/brand-gallery/data";
import { clsxMerge } from "../../components/themes/utils";
import { textSecondary } from "../../components/themes/default-text";

export default function BrandGalleryDemo() {
  return (
    <div>
      <p className={clsxMerge("mb-4", textSecondary)}>Example brand gallery component</p>
      <div className="relative border border-gray-200 dark:border-gray-700 rounded-lg p-4">
       <BrandGallary className="w-full h-64 sm:h-80 md:h-96 lg:h-112 xl:h-140 m-auto" src={BrandGallaryTestData} />
      </div>
    </div>
  );
}
