"use client";
import Link from "next/link";
import { PLAY_GROUND_ITEMS } from "@/app/components/nav-bar/sites";

export default function Test() {
  return (
    <div className="pt-32 pl-8 pr-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Component Testing
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Open the drawer to navigate between different components
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLAY_GROUND_ITEMS.map((component) => (
          <Link
            key={component.id}
            href={component.href}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {component.label}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Click to view component
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
