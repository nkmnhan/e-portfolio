import Link from "next/link";
import { clsxMerge } from "@/lib/utils";
import { HiArrowRight } from "react-icons/hi";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  href?: string;
  linkText?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  href,
  linkText = "View all",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsxMerge(
        "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",
        className
      )}
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[var(--color-text-muted)]">{subtitle}</p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className={clsxMerge(
            "inline-flex items-center gap-2",
            "text-[var(--color-primary)]",
            "hover:text-[var(--color-primary-hover)]",
            "transition-colors group"
          )}
        >
          <span>{linkText}</span>
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  );
}
