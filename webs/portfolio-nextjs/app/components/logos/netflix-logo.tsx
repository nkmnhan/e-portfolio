import { clsxMerge } from "../themes";
import "./netflix-logo.css";

export default function NetFlixLogo() {
  return (
    <div className="relative flex items-start justify-center">
      <div
        key={"left"}
        className={clsxMerge("h-60 w-12 bg-red-800 scale-up")}
      />
      <div
        key={"diagonal"}
        className={clsxMerge(
          "relative z-10 h-60 w-12 draw-diagonal -left-12",
          "before:block",
          "before:h-[120%]",
          "before:w-full",
          "before:bg-red-600",
          "before:shadow-[0_0_30px_black]"
        )}
      />
      <div
        key={"right"}
        className={clsxMerge(
          "h-61 w-12 flex justify-start items-center",
          "walt-disney text-xl text-white font-bold [writing-mode:vertical-rl]"
        )}
      >
        <div className={clsxMerge("h-full w-full bg-red-800",  "[animation-delay:1.2s] scale-up")} />
        <span className="absolute z-2 pt-4">Tony F. Wilson</span>
      </div>
    </div>
  );
}
