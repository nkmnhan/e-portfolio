import { clsxMerge } from "@/app/components/themes/utils";

interface ListPlaceholderProps {
  className?: string;
  items?: number;
}

export default function ListPlaceholder({ className, items = 5 }: ListPlaceholderProps) {
  return (
    <div
      role="status"
      className={clsxMerge(
        "max-w-md p-4 border border-[var(--color-border)] divide-y divide-gray-200 dark:divide-gray-700 rounded-md shadow-sm animate-pulse md:p-6",
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
          <div className="w-7/10">
            <div className="h-2.5 bg-[var(--color-border)] dark:bg-[var(--color-border)] rounded-full w-7/10 mb-2.5"></div>
            <div className="h-2.5 bg-[var(--color-border)] dark:bg-[var(--color-border)] rounded-full w-5/10 mb-2.5"></div>
          </div>
          <div className="h-2.5 bg-[var(--color-border)] rounded-full w-12"></div>
        </div>
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
