import { clsxMerge } from "../../components/themes/utils";
import { textSecondary } from "../../components/themes/default-text";
import {
  BrandGalleryTestData,
  BrandGallery,
} from "@/app/components/brand-gallery";

export default function BrandGalleryDemo() {
  return (
    <div>
      <p className={clsxMerge("mb-4", textSecondary)}>Example brand gallery component</p>
      <div className="relative border border-gray-200 dark:border-gray-700 rounded-lg p-4">
       <BrandGallery className="w-full h-64 sm:h-80 md:h-96 lg:h-112 xl:h-140 m-auto" src={BrandGalleryTestData} />
      </div>
    </div>
  );
}
