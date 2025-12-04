import { Button } from "flowbite-react";
import { useState } from "react";

export type HamburgerBtnProp = {
  id?: string;
  active: boolean;
  mode?: "light" | "transparent";
  onClick: () => void;
};

export default function HamburgerBtn({
  id,
  active,
  onClick,
  mode = "light",
}: HamburgerBtnProp) {
  const defaultClasses =
    "group inline-flex w-12 h-12 text-slate-800 text-center items-center justify-center rounded transition aria-pressed:border-none aria-pressed:text-white aria-pressed:bg-transparent";
  const modeClasses =
    mode === "light"
      ? defaultClasses
      : `${defaultClasses} hover:bg-transparent`;

  return (
    <Button
      id={id}
      size="xs"
      color="light"
      className={modeClasses}
      aria-pressed={active ? "true" : "false"}
      onClick={onClick}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-12 h-12 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-x-0 group-aria-pressed:translate-y-0 group-aria-pressed:rotate-315"
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect
          className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-pressed:rotate-45"
          y="7"
          width="16"
          height="2"
          rx="1"
        ></rect>
        <rect
          className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-pressed:translate-y-0 group-aria-pressed:rotate-135"
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
      </svg>
    </Button>
  );
}
