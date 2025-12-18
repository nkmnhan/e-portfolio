"use client";
import Link from "next/link";
import { PLAY_GROUND_ITEMS } from "@/app/components/nav-bar/sites";
import { clsxMerge } from "@/app/components/themes/utils";
import { Reveal } from "../components/transitions";


export default function PlaygroundPage() {
  return (
    <div className="pt-20 sm:pt-32 px-4 sm:px-8 max-w-7xl mx-auto">
      <h1 className={clsxMerge("text-3xl sm:text-4xl font-bold mb-4")}>
        Component Testing
      </h1>
      <p className={clsxMerge("text-base sm:text-lg mb-8")}>
        Open the drawer to navigate between different components
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {PLAY_GROUND_ITEMS.map((component, i) => (
          <Reveal key={component.id} className="block" delay={i * 0.01}>
            <Link
              href={component.href}
              className={clsxMerge(
                "shadow block no-underline p-4 sm:p-6 border border-gray-200 dark:border-gray-700 rounded-xl min-h-25 sm:min-h-35 max-w-md",
                  "transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400/30 hover:shadow-xl hover:scale-105 hover:-translate-y-1 hover:bg-indigo-50 hover:border-indigo-300 active:scale-98"
              )}
            >
              <div className="card-content h-full flex flex-col justify-between">
                <h3
                  className={clsxMerge(
                    "text-xl sm:text-2xl font-semibold mb-2"
                  )}
                >
                  {component.label}
                </h3>
                <p className={clsxMerge("mt-2 text-sm sm:text-base")}>
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
