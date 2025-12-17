import type { Meta, StoryFn } from "@storybook/nextjs-vite";
import { clsxMerge } from "..";
import { hoverCard, cardContent, cardLink } from "..";

const meta: Meta = { title: "Themes/Card" };
export default meta;

export const Default: StoryFn = () => (
  <div className="p-4 space-y-10">
    <div className="section">
      <div className={clsxMerge(hoverCard, "p-6 bg-white dark:bg-gray-800")}>
        <p className="font-bold text-lg mb-2">Hover Card</p>
        <p className="text-sm">
          This card gets elevated and moves up on hover!
        </p>
      </div>
    </div>

    <div className="section">
      <a href="#" className={cardLink}>
        <div className={clsxMerge(cardContent, "bg-gray-100 p-4 rounded")}>
          Clickable area
        </div>
      </a>
    </div>
  </div>
);
