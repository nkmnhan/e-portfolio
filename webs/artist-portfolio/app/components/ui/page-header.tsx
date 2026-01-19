import { type ReactNode } from "react";
import { clsxMerge } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  centered?: boolean;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  gradient = false,
  centered = true,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={clsxMerge(
        "py-16 md:py-20 bg-[var(--color-bg-secondary)]",
        className
      )}
    >
      <div className={clsxMerge("container-custom", centered && "text-center")}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          {gradient ? <span className="text-gradient">{title}</span> : title}
        </h1>
        {subtitle && (
          <p
            className={clsxMerge(
              "text-lg text-[var(--color-text-muted)] leading-relaxed",
              centered && "max-w-2xl mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
