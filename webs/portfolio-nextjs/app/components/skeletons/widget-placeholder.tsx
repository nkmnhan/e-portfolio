import { clsxMerge } from "@/app/components/themes/utils";

interface WidgetPlaceholderProps {
  className?: string;
  bars?: number;
}

export function WidgetPlaceholder({
  className,
  bars = 7,
}: WidgetPlaceholderProps) {
  const barHeights = ["h-72", "h-56", "h-72", "h-64", "h-80", "h-72", "h-80"];

  return (
    <div
      role="status"
      className={clsxMerge(
        "max-w-sm p-4 border border-gray-200 dark:border-gray-700 rounded-base shadow-sm animate-pulse md:p-6",
        className
      )}
    >
      {/* Header */}
      <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full w-32 mb-2.5"></div>
      <div className="w-48 h-2 mb-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

      {/* Chart bars */}
      <div className="flex items-baseline mt-4">
        {Array.from({ length: bars }).map((_, index) => (
          <div
            key={index}
            className={clsxMerge(
              "w-full bg-gray-300 dark:bg-gray-700 rounded-t-full",
              barHeights[index % barHeights.length],
              index > 0 && "ms-6"
            )}
          />
        ))}
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
