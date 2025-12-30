import { clsxMerge } from "../themes";

export default function Logo2() {
  return (
    <>
      <div className="relative h-52 w-52 overflow-hidden">
        <div className="relative m-auto w-40 h-40">
          {/* Left vertical line */}
          <div
            className={clsxMerge(
              "absolute left-0",
              "bg-gray-900 dark:bg-white",
              "h-full w-6",
              "walt-disney [writing-mode:vertical-rl] text-white text-center"
            )}
          >
            Tony F. Wilson
          </div>

          {/* Diagonal line */}
          <div
            className={clsxMerge(
              "absolute left-1/2 -top-1/4 -rotate-38",
              "bg-linear-to-b from-black via-gray-800 to-transparent",
              "h-[160%] w-6"
            )}
          ></div>

          {/* Right vertical line */}
          <div
            className={clsxMerge(
              "absolute right-0",
              "h-[70%] w-6",
              "bg-linear-to-b from-black to-transparent",
              "flex flex-row"
            )}
          />
        </div>
      </div>
    </>
  );
}
