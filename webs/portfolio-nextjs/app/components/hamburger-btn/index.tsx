import { Button } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";
import HamburgerIcon from "./hamburger-icon";

export type HamburgerBtnProp = {
  id?: string;
  active: boolean;
  mode?: "light" | "transparent";
  onClick: () => void;
};

const btnSize = "w-12 h-12"; // 48px, multiple of 4
const defaultClasses = clsxMerge(
  "group inline-flex",
  btnSize,
  "text-slate-800 text-center items-center justify-center rounded transition",
  "aria-pressed:border-none aria-pressed:text-white aria-pressed:bg-transparent"
);

export default function HamburgerBtn({
  id,
  active,
  onClick,
  mode = "light",
}: HamburgerBtnProp) {
  const modeClasses =
    mode === "light"
      ? defaultClasses
      : clsxMerge(defaultClasses, "hover:bg-transparent");

  return (
    <Button
      id={id}
      size="xs"
      color="light"
      className={modeClasses}
      aria-pressed={active ? "true" : "false"}
      onClick={onClick}
    >
      <HamburgerIcon active={active} mode={mode} />
    </Button>
  );
}
