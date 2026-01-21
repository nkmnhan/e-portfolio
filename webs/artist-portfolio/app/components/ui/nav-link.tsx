import { type ReactNode } from "react";
import Link from "next/link";
import { clsxMerge } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  icon?: ReactNode;
  children?: ReactNode;
  active?: boolean;
  iconOnly?: boolean;
  className?: string;
}

export function NavLink({
  href,
  icon,
  children,
  active = false,
  iconOnly = false,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsxMerge(
        // Layout
        "flex items-center gap-2",
        iconOnly ? "p-3" : "px-4 py-2",
        "rounded-lg",
        // Colors
        active
          ? "text-[var(--color-text)] bg-[var(--color-surface)]"
          : "text-[var(--color-text-secondary)]",
        // Hover
        "hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]",
        // Transitions
        "transition-all duration-200",
        className
      )}
      aria-label={iconOnly && typeof children === "string" ? children : undefined}
    >
      {icon}
      {!iconOnly && children}
    </Link>
  );
}
