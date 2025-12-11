"use client";
import Link from "next/link";
import { PLAY_GROUND_ITEMS } from "@/app/components/nav-bar/sites";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textPrimary, textSecondary } from "@/app/components/themes/default-text";

export default function Test() {
  return (
    <div className="pt-32 pl-8 pr-8">
      <h1 className={clsxMerge("text-4xl font-bold mb-4", textPrimary)}>
        Component Testing
      </h1>
      <p className={clsxMerge("text-lg mb-8", textSecondary)}>
        Open the drawer to navigate between different components
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLAY_GROUND_ITEMS.map((component) => (
          <Link
            key={component.id}
            href={component.href}
            className={clsxMerge(
              "p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow",
              bgPrimary
            )}
          >
            <h3 className={clsxMerge("text-xl font-semibold mb-2", textPrimary)}>
              {component.label}
            </h3>
            <p className={clsxMerge(textSecondary)}>
              Click to view component
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
