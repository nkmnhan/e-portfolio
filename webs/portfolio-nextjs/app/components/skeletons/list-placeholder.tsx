import { clsxMerge } from "@/app/components/themes/utils";

interface ListPlaceholderProps {
  className?: string;
  items?: number;
}

export function ListPlaceholder({ className, items = 5 }: ListPlaceholderProps) {
  return (
    <div
      role="status"
      className={clsxMerge(
        "max-w-md p-4 border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700 rounded-base shadow-sm animate-pulse md:p-6",
        className
      )}
    >
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className={clsxMerge(
            "flex items-center justify-between",
            index === 0 ? "pb-4" : "py-4"
          )}
        >
          <div>
            <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>
          <div className="h-2.5 bg-gray-300 dark:bg-gray-600 rounded-full w-12"></div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
