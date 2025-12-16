"use client";
import Link from "next/link";
import { PLAY_GROUND_ITEMS } from "@/app/components/nav-bar/sites";
import { clsxMerge } from "@/app/components/themes/utils";
import { bgPrimary } from "@/app/components/themes/default-bg";
import { textPrimary, textSecondary } from "@/app/components/themes/default-text";
import { Reveal } from "../components/transitions";

export default function PlaygroundPage() {
  return (
    <div className="pt-20 sm:pt-32 px-4 sm:px-8 max-w-7xl mx-auto">
      <h1 className={clsxMerge("text-3xl sm:text-4xl font-bold mb-4", textPrimary)}>
        Component Testing
      </h1>
      <p className={clsxMerge("text-base sm:text-lg mb-8", textSecondary)}>
        Open the drawer to navigate between different components
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {PLAY_GROUND_ITEMS.map((component, i) => (
          <Reveal key={component.id} className="block" delay={i * 0.06}>
            <Link
              href={component.href}
              className={clsxMerge(
                "card-link p-4 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-lg transition-transform transform-gpu motion-safe:hover:scale-102 hover-card hover-animate focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400/30 min-h-[120px] sm:min-h-[140px]",
                bgPrimary
              )}
            >
              <div className="card-content h-full flex flex-col justify-between">
                <h3 className={clsxMerge("text-xl sm:text-2xl font-semibold mb-2", textPrimary)}>
                  {component.label}
                </h3>
                <p className={clsxMerge("mt-2 text-sm sm:text-base", textSecondary)}>
                  Click to view component
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
