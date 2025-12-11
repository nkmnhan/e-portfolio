import { clsxMerge } from "@/app/components/themes/utils";
import { textMuted } from "../themes/default-text";

interface TestimonialPlaceholderProps {
  className?: string;
  lines?: number;
}

export function TestimonialPlaceholder({
  className,
  lines = 2,
}: TestimonialPlaceholderProps) {
  return (
    <div role="status" className={clsxMerge("animate-pulse", className)}>
      {/* Testimonial text lines */}
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={clsxMerge(
            "h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto",
            index === 0 && "max-w-[640px] mb-2.5",
            index === 1 && "max-w-[540px]",
            index > 1 && "max-w-[600px] mb-2.5"
          )}
        />
      ))}

      {/* Author section */}
      <div className="flex items-center justify-center mt-4">
        <svg
          className={clsxMerge("w-7 h-7 me-3", textMuted)}
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
        <div className="w-20 h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full me-3"></div>
        <div className="w-24 h-2 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}