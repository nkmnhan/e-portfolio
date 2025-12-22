"use client";

import { usePathname } from "next/navigation";
import { HamburgerBtn } from "../hamburger-btn";
import { clsxMerge } from "../themes/utils";
import { NavIcon } from "./sites";
import { useEffect, useState } from "react";

function NavButton({
  className,
  active,
  onClick,
}: {
  className?: string;
  active: boolean;
  onClick: () => void;
}) {
  // use Next's pathname hook so component updates on navigation without manual effects
  const pathname = usePathname() ?? "/";
  const [isInvert, setIsInvert] =  useState(false);
  useEffect(() => {
    setIsInvert(pathname === "/" || pathname === "/hello-world" || pathname === "/playground/galaxy");
  }, [pathname]);

  return (
    <div
      className={clsxMerge(
        "absolute z-100 transition-all duration-200 flex items-center gap-4 p-3 rounded",
        className
      )}
    >
      <HamburgerBtn id="nav-btn" active={active} onClick={onClick}>
        <NavIcon className={clsxMerge("absolute translate-x-12 w-6 h-6 transition-transform duration-300 ease-in-out", isInvert && "invert")} path={pathname} />
      </HamburgerBtn>
    </div>
  );
}

export default NavButton;
