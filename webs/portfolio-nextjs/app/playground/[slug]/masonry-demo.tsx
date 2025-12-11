"use client";
import { useState, useEffect, use } from "react";
import MasonryLayout from "../../components/masonry-layout";
const items = Array.from({ length: 30 }, (_, i) => i + 1);
export default function MasonryLayoutDemo() {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    setHeights(items.map(() => 320 + Math.floor(Math.random() * 48) * 4));
  }, []);
  return (
    <MasonryLayout>
      {items.map((i) => (
        <div
          key={i}
          className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg"
          style={{ height: heights[i - 1] }}
        >{`Item ${i}`}</div>
      ))}
    </MasonryLayout>
  );
}
