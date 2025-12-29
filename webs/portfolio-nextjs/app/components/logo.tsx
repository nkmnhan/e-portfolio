import { clsxMerge } from "./themes/utils";

interface LogoProps {
  color?: string;
  size?: number;
}

export default function Logo() {
  return (
    <div className={clsxMerge("flex flex-row items-center text-white")}>
      {/* N letter in 80s newspaper style */}
      <span className="font-bold font-serif text-9xl">N</span>
      {/* Tony F. Wilson text */}
      <span className="walt-disney text-current font-semibold ml-2 text-sm rotate-90 text-nowrap text-center -translate-x-12">
        Tony F. Wilson
      </span>
    </div>
  );
}
