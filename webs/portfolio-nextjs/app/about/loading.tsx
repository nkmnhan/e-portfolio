import { clsxMerge } from "../components/themes";
import AboutLogo from "./about-logo";
import "./about.css"
export default function LoadingAbout() {
  return (
    <main className="absolute w-full h-full bg-[#020016] loading-shrink pointer-events-none">
      <div
        className={clsxMerge(
          "absolute inset-0 flex items-center justify-center",
          "fade-out-after-2s"
        )}
      >
        <div className="w-60 flex flex-col items-center gap-6">
          <AboutLogo />
          <div className="w-full">
            <div className="relative h-2 w-full overflow-hidden rounded bg-gray-200">
              <div className="absolute left-0 top-0 h-2 w-1/3 bg-[#cb7f65] animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
