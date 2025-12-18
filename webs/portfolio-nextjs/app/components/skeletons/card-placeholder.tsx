import { clsxMerge } from "@/app/components/themes/utils";

interface CardPlaceholderProps {
  className?: string;
  withAvatar?: boolean;
  imageHeight?: string;
}

export default function CardPlaceholder({
  className,
  withAvatar = true,
  imageHeight = "h-48",
}: CardPlaceholderProps) {
  return (
    <div
      role="status"
      className={clsxMerge(
        "max-w-sm p-4 border border-gray-200 dark:border-gray-700 rounded-base shadow-sm animate-pulse md:p-6",
        className
      )}
    >
      {/* Image placeholder */}
      <div
        className={clsxMerge(
          "flex items-center justify-center max-w-sm bg-gray-300 dark:bg-gray-700 rounded-base animate-pulse mb-4 sm:mb-6",
          imageHeight
        )}
      >
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
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>

      {/* Text lines */}
      <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

      {/* Avatar section */}
      {withAvatar && (
        <div className="flex items-center mt-4">
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-600 me-3"
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
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
        </div>
      )}

      <span className="sr-only">Loading...</span>
    </div>
  );
}
