import { clsxMerge } from "../themes";

export interface MonogramLogoProps {
  leftLineClassName?: string;
  diagonalClassName?: string;
  rightLineClassName?: string;
  textClassName?: string;
  size?: string;
}

export default function MonogramLogo({
  leftLineClassName = "bg-black",
  diagonalClassName = "bg-linear-to-b from-black via-gray-700 to-transparent",
  rightLineClassName = "bg-linear-to-b from-black to-transparent",
  textClassName = "text-white",
  size = "scale-100",
}: MonogramLogoProps) {
  return (
    <>
      <div className={clsxMerge("relative h-52 w-52 overflow-hidden", size)}>
        <div className="relative m-auto w-40 h-40">
          {/* Left vertical line */}
          <div
            className={clsxMerge(
              "absolute left-0",
              leftLineClassName,
              "h-full w-6"
            )}
          >
            <span
              className={clsxMerge(
                "h-full walt-disney [writing-mode:vertical-rl]",
                "text-center",
                textClassName
              )}
            >
              Tony F. Wilson
            </span>
          </div>
          z{/* Diagonal line */}
          <div
            className={clsxMerge(
              "absolute left-1/2 -top-1/4 -rotate-38",
              diagonalClassName,
              "h-[160%] w-6"
            )}
          ></div>
          {/* Right vertical line */}
          <div
            className={clsxMerge(
              "absolute right-0 top-0",
              "h-[70%] w-6",
              rightLineClassName,
              "flex flex-row"
            )}
          />
        </div>
      </div>
    </>
  );
}
