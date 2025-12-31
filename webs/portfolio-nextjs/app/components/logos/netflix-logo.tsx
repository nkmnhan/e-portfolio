import { clsxMerge } from "../themes";
import "./netflix-logo.css";

export default function NetFlixLogo() {
  return (
    <>
      {/* <div className="n-logo-container">
        <div className="n-logo"></div>
      </div> */}
      <div className="relative flex items-start justify-center">
        <div className="h-60 w-12 bg-red-800" />
        <div
          className={clsxMerge(
            // Layout / size
            "h-60 w-12",

            "before:block",
            "before:h-[140%]",
            "before:w-full",
            "before:translate-x-5",
            "before:bg-red-600",
            "before:transform before:skew-x-[21.5deg]",
            "before:shadow-[0_0_30px_black]"
          )}
        />
        <div
          className={clsxMerge(
            "h-60 w-12 pt-4 flex justify-start items-center bg-red-800",
            "walt-disney text-xl text-white font-bold [writing-mode:vertical-rl]",
          )}
        >
          <span>Tony F. Wilson</span>
        </div>
      </div>
    </>
  );
}
