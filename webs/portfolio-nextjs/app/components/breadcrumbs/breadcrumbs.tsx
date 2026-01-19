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
              on: "flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white",
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
                    ? "text-gray-500 dark:text-gray-400 cursor-default"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                ),
                off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
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
