import { clsxMerge } from "@/app/components/themes/utils";

interface VideoPlaceholderProps {
  className?: string;
}

export default function VideoPlaceholder({ className }: VideoPlaceholderProps) {
  return (
    <div
      role="status"
      className={clsxMerge(
        "flex items-center justify-center h-56 max-w-sm bg-gray-300 dark:bg-gray-700 rounded-base animate-pulse text-gray-400 dark:text-gray-600",
        className
      )}
      aria-label="Loading video"
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
  );
}
