import { Button } from "flowbite-react";
import { clsxMerge } from "@/app/components/themes/utils";
import HamburgerIcon from "./hamburger-icon";

export type HamburgerBtnProp = {
  id?: string;
  className?: string;
  active: boolean;
  children?: React.ReactNode;
  onClick: () => void;
};

export default function HamburgerBtn({
  id,
  className,
  active,
  children,
  onClick,
}: HamburgerBtnProp) {
  return (
    <Button
      id={id}
      color="light"
      size="xs"
      className={clsxMerge(
        "group inline-flex",
        "w-12 h-12",
        "text-center items-center justify-center rounded transition",
        className
      )}
      aria-pressed={active ? "true" : "false"}
      onClick={onClick}
    >
      <HamburgerIcon active={active} />
      {children}
    </Button>
  );
}
