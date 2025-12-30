import { clsxMerge } from "../themes/utils";

interface NSerifLogoProps {
  className?: string;
  nLetterClassName?: string;
  textClassName?: string;
}

export default function NSerifLogo({ className, nLetterClassName, textClassName }: NSerifLogoProps) {
  return (
    <div
      className={clsxMerge(
        "relative flex items-center justify-center text-center",
        className
      )}
    >
      {/* N letter in 80s newspaper style */}
      <span className={clsxMerge("absolute z-1 font-bold font-serif text-9xl", nLetterClassName)}>N</span>
      {/* Tony F. Wilson text */}
      <span className={clsxMerge("absolute z-2 left-1 walt-disney font-semibold ml-2 text-sm rotate-90 text-nowrap", textClassName)}>
        Tony F. Wilson
      </span>
    </div>
  );
}
