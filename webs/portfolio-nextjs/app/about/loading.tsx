import { clsxMerge } from "../components/themes";
import AboutLogo from "./about-logo";

export default function LoadingAbout() {
  return (
    <main
      className={clsxMerge(
        "bg-[#020016]",
        "absolute w-full h-full z-400",
        "animate-shrink-out origin-top animation-delay-2000 [animation-fill-mode:forwards] pointer-events-none"
      )}
    >
      <div
        className={clsxMerge(
          "absolute inset-0 flex items-center justify-center",
          "animate-fade-out animation-delay-1750 [animation-fill-mode:forwards]"
        )}
      >
        <div className="w-60 flex flex-col items-center gap-6">
          <AboutLogo />
          <div className="w-full">
            <div className="relative h-1 w-full overflow-hidden rounded bg-gray-200">
              <div
                className={clsxMerge(
                  "absolute left-0 top-0 h-1 w-1/3",
                  "bg-[#cb7f65]",
                  "animate-loading-bar"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
