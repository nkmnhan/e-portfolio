import { clsxMerge } from "@/app/components/themes/utils";

interface ImagePlaceholderProps {
  className?: string;
  withText?: boolean;
  imageClassName?: string;
  textClassName?: string;
  orientation?: "horizontal" | "vertical";
}

export default function ImagePlaceholder({
  className,
  withText = true,
  imageClassName,
  textClassName,
  orientation = "horizontal",
}: ImagePlaceholderProps) {
  const containerClasses = clsxMerge(
    "animate-pulse",
    orientation === "horizontal"
      ? "space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      : "space-y-4",
    className
  );

  const imageClasses = clsxMerge(
    "flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-base",
    orientation === "horizontal" ? "w-full h-48 sm:w-96" : "w-full h-48",
    imageClassName
  );

  return (
    <div role="status" className={containerClasses}>
      <div className={imageClasses}>
        <svg
          className={clsxMerge("w-11 h-11")}
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
            d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
      </div>
      {withText && (
        <div className={clsxMerge("w-full", textClassName)}>
          <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full max-w-4/10 mb-4"></div>
          <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full max-w-9/10 mb-2.5"></div>
          <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full max-w-7/10 mb-2.5"></div>
          <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full max-w-9/10 mb-2.5"></div>
          <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full max-w-6/10"></div>
        </div>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
