/**
 * Page Template (Server Component)
 *
 * Pages should be Server Components by default.
 * Extract interactive parts to Client Component islands.
 */

import { Metadata } from "next";
import { clsxMerge } from "@/app/components/themes/utils";

// Import client components for interactivity
// import { InteractiveWidget } from "./interactive-widget";

export const metadata: Metadata = {
  title: "Page Title | Portfolio",
  description: "Page description for SEO",
};

// Server-side data fetching
async function getData() {
  // Fetch data directly - no useEffect needed
  // const res = await fetch("...");
  // return res.json();
  return { title: "Example" };
}

export default async function Page() {
  const data = await getData();

  return (
    <main
      className={clsxMerge(
        // Layout
        "flex flex-col items-center",

        // Sizing
        "min-h-screen w-full",
        "px-4 py-8",

        // Colors
        "bg-white dark:bg-gray-900"
      )}
    >
      {/* Static content - rendered on server */}
      <h1 className="text-4xl font-bold">{data.title}</h1>

      {/* Client component island - only this is interactive */}
      {/* <InteractiveWidget /> */}
    </main>
  );
}
