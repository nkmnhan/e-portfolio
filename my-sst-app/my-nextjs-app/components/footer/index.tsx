import { navigations } from "@/data/common";
import Link from "next/link";

export default function Footer({ isHomePage }: { isHomePage: boolean }) {
  if (isHomePage) {
    return <></>;
  }

  return (
    <>
      <div className="mt-32 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navigations.map((item) => (
                  <Link
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                © Tony F. Wilson
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
