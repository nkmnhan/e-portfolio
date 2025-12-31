import { clsxMerge } from "../themes";
import "./netflix-logo.css";

export default function NetFlixLogo() {
  return (
    <>
      <div className="relative flex items-start justify-center h-60">
        {/* left vertical stroke */}
        <div className="relative w-12 h-full n-col">
          <div className="n-fill n-fill--left" />
        </div>

        {/* diagonal stroke (middle) */}
        <div className="relative w-12 h-full n-diagonal">
          <div className="n-fill n-fill--middle" />
        </div>

        {/* right vertical stroke + vertical label */}
        <div className="relative w-12 h-full n-col">
          <div className="n-fill n-fill--right" />
          <div
            className={clsxMerge(
              "n-label h-full w-full pt-4 flex justify-start items-center bg-transparent",
              "walt-disney text-xl text-white font-bold [writing-mode:vertical-rl]"
            )}
          >
            <span>Tony F. Wilson</span>
          </div>
        </div>
      </div>
    </>
  );
}
