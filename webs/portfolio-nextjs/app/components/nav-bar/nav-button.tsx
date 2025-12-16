"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HamburgerBtn } from "../hamburger-btn";
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
  // use Next's pathname hook so component updates on navigation without manual effects
  const pathname = usePathname() ?? "/";

  // memoize derived class to avoid recomputation on every render
  const iconClass = useMemo(() => getIconClass(active, pathname), [active, pathname]);

  return (
    <div
      className={clsxMerge(
        // Tailwind z utility corrected
        "absolute z-100 transition-all duration-200 flex items-center gap-4 p-3 rounded",
        className
      )}
    >
      <HamburgerBtn
        id="nav-btn"
        active={active}
        mode="light"
        onClick={onClick}
      />
      <NavIcon
        className={clsxMerge(
          iconClass,
          "w-6 h-6 hover:text-cyan-700 transition",
          active && "bg-[#0000000a] rounded"
        )}
        path={pathname}
      />
    </div>
  );
}
