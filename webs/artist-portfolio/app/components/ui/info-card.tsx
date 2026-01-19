import { type ReactNode } from "react";
import Link from "next/link";
import { clsxMerge } from "@/lib/utils";

export interface InfoCardProps {
  icon: ReactNode;
  iconColor?: "primary" | "accent" | "warning";
  title: string;
  subtitle?: string;
  children?: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
}

const iconColorStyles = {
  primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
  warning: "bg-yellow-500/10 text-yellow-500",
};

export function InfoCard({
  icon,
  iconColor = "primary",
  title,
  subtitle,
  children,
  href,
  external = false,
  className,
}: InfoCardProps) {
  const content = (
    <>
      <div className={clsxMerge("p-3 rounded-lg", iconColorStyles[iconColor])}>
        {icon}
      </div>
      <div>
        {subtitle && (
          <p className="text-sm text-[var(--color-text-muted)]">{subtitle}</p>
        )}
        <p className="font-medium">{title}</p>
        {children}
      </div>
    </>
  );

  const baseStyles = clsxMerge(
    "flex items-center gap-4 p-4 rounded-lg",
    "bg-[var(--color-bg)] border border-[var(--color-border)]",
    className
  );

  if (href) {
    const linkProps = external
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

    return (
      <Link
        href={href}
        className={clsxMerge(
          baseStyles,
          "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
          "transition-colors"
        )}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  return <div className={baseStyles}>{content}</div>;
}
