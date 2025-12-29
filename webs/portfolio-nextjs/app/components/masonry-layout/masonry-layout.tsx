import React from "react";
import { clsxMerge } from "../themes";

interface MasonryLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export default function MasonryLayout({
  className,
  children,
}: MasonryLayoutProps) {
  return (
    <div
      className={clsxMerge(
        "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4",
        className
      )}
    >
      {/* Each child should have break-inside-avoid to prevent breaking */}
      {React.Children.map(children, (child, idx) => (
        <div key={idx} className="mb-4 break-inside-avoid">
          {child}
        </div>
      ))}
    </div>
  );
}
