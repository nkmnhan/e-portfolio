import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import { clsxMerge } from "@/app/components/themes/utils";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItemType[];
  className?: string;
  showHome?: boolean;
}

export default function Breadcrumbs({
  items,
  className,
  showHome = true,
}: BreadcrumbsProps) {
  return (
    <Breadcrumb
      aria-label="Breadcrumb navigation"
      className={clsxMerge("py-3", className)}
    >
      {showHome && (
        <BreadcrumbItem
          href="/"
          icon={HiHome}
          theme={{
            href: {
              on: "flex items-center text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
            },
            icon: "mr-2 h-4 w-4",
          }}
        >
          Home
        </BreadcrumbItem>
      )}
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <BreadcrumbItem
            key={item.label}
            href={item.href}
            theme={{
              href: {
                on: clsxMerge(
                  "flex items-center text-sm font-medium",
                  isLast
                    ? "text-[var(--color-text-muted)] cursor-default"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                ),
                off: "flex items-center text-sm font-medium text-[var(--color-text-muted)]",
              },
            }}
          >
            {item.href && !isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              item.label
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
