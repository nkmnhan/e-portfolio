"use client";

import { useEffect, useState } from "react";
import HamburgerBtn from "../hamburger-btn";
import { clsxMerge } from "../themes/utils";
import { getIconClass, NavIcon } from "./sites";

export default function NavButton({
  className,
  active,
  onClick,
}: {
  className?: string;
  active: boolean;
  onClick: () => void;
}) {
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [iconClass, setIconClass] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIconClass(getIconClass(active, currentPath));
  }, [active, currentPath]);

  return (
    <div
      className={clsxMerge(
        "fixed z-50 transition-all duration-200 flex items-center gap-4 p-3 rounded",
        className
      )}
      style={{ position: "fixed" }}
    >
      <HamburgerBtn
        id="nav-btn"
        active={active}
        mode="light"
        onClick={onClick}
      />
      <NavIcon className={clsxMerge(iconClass,"w-6 h-6")} path={currentPath} />
    </div>
  );
}
