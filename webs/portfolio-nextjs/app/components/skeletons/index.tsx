import { clsxMerge } from "@/app/components/themes/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "text" | "circular" | "rectangular";
}

export function Skeleton({ className, variant = "default" }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gray-300 dark:bg-gray-700";
  
  const variantClasses = {
    default: "rounded-full",
    text: "rounded-full h-2",
    circular: "rounded-full",
    rectangular: "rounded-base",
  };

  return (
    <div
      className={clsxMerge(
        baseClasses,
        variantClasses[variant],
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface SkeletonTextProps {
  className?: string;
  lines?: number;
}

export function SkeletonText({ className, lines = 5 }: SkeletonTextProps) {
  return (
    <div role="status" className={clsxMerge("max-w-sm animate-pulse", className)}>
      <div className="h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full w-48 mb-4"></div>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={clsxMerge(
            "h-2 bg-gray-300 dark:bg-gray-700 rounded-full mb-2.5",
            index === 0 && "max-w-[360px]",
            index === 1 && "",
            index === 2 && "max-w-[330px]",
            index === 3 && "max-w-[300px]",
            index === 4 && "max-w-[360px]",
            index === lines - 1 && "mb-0"
          )}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div
      role="status"
      className={clsxMerge(
        "flex items-center justify-center h-56 max-w-sm bg-gray-300 dark:bg-gray-700 rounded-base animate-pulse",
        className
      )}
    >
      <svg
        className="w-11 h-11 text-gray-400 dark:text-gray-600"
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
  );
}
