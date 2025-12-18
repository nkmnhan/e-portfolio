import { Button } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";

export type HamburgerIconProp = {
  active: boolean;
  mode?: "light" | "transparent";
  className?: string;
};

export default function HamburgerIcon({
  active,
  className,
}: HamburgerIconProp) {
  return (
    <div
      className={clsxMerge(
        "group inline-flex",
        "w-full h-full",
        "text-center items-center justify-center rounded transition",
        className
      )}
      aria-pressed={active ? "true" : "false"}
    >
      <span className="sr-only">Menu</span>
      <svg
        className={clsxMerge(
          "w-full h-full",
          "fill-current pointer-events-none"
        )}
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={clsxMerge(
            "origin-center",
            "-translate-y-1", // 4px up
            "translate-x-2", // 8px right
            "transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)]",
            "group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-315"
          )}
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect
          className={clsxMerge(
            "origin-center",
            "transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)]",
            "group-aria-pressed:rotate-45"
          )}
          y="7"
          width="16"
          height="2"
          rx="1"
        ></rect>
        <rect
          className={clsxMerge(
            "origin-center",
            "translate-y-1", // 4px down
            "transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.1)]",
            "group-aria-pressed:translate-y-0 group-aria-pressed:rotate-135"
          )}
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
      </svg>
    </div>
  );
}
