import { clsxMerge } from "@/app/components/themes/utils";

interface TextPlaceholderProps {
  className?: string;
  lines?: number;
}

export default function TextPlaceholder({ className, lines = 6 }: TextPlaceholderProps) {
  const lineConfigs = [
    { maxWidth: "w-full", segments: ["w-32", "w-24", "w-full"] },
    { maxWidth: "max-w-120", segments: ["w-full", "w-full", "w-24"] },
    { maxWidth: "max-w-100", segments: ["w-full", "w-80", "w-full"] },
    { maxWidth: "max-w-120", segments: ["w-full", "w-full", "w-24"] },
    { maxWidth: "max-w-110", segments: ["w-32", "w-24", "w-full"] },
    { maxWidth: "max-w-90", segments: ["w-full", "w-80", "w-full"] },
  ];

  return (
    <div
      role="status"
      className={clsxMerge("space-y-2.5 animate-pulse max-w-lg", className)}
      aria-label="Loading text"
    >
      {Array.from({ length: lines }).map((_, lineIndex) => {
        const config = lineConfigs[lineIndex % lineConfigs.length];
        return (
          <div
            key={lineIndex}
            className={clsxMerge("flex items-center w-full", config.maxWidth)}
          >
            {config.segments.map((segmentWidth, segmentIndex) => (
              <div
                key={segmentIndex}
                className={clsxMerge(
                  "h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full",
                  segmentWidth,
                  segmentIndex > 0 && "ms-2"
                )}
              />
            ))}
          </div>
        );
      })}
      <span className="sr-only">Loading...</span>
    </div>
  );
}
