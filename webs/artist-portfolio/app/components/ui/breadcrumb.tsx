import Link from "next/link";
import { clsxMerge } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={clsxMerge(
        "flex items-center gap-2 text-sm text-[var(--color-text-muted)]",
        className
      )}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-[var(--color-text)]" : ""}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
