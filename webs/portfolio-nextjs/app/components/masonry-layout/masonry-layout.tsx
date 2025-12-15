import React from "react";

export default function MasonryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        columns-1
        sm:columns-2
        md:columns-3
        lg:columns-4
        gap-4
        w-full
      "
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