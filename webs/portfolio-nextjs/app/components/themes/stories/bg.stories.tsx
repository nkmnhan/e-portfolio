import type { Meta, StoryFn } from "@storybook/nextjs-vite";
import { clsxMerge } from "..";
import { bgPrimary, primaryBg, primaryText } from "..";

const meta: Meta = { title: "Themes/BG" };
export default meta;

export const Default: StoryFn = () => (
  <div>
    <div className={clsxMerge(bgPrimary, "p-8")}>
      <div className="mb-4 font-semibold">Primary background button</div>
      <button
        className={clsxMerge(primaryBg, primaryText, "px-4 py-2 rounded")}
      >
        Primary
      </button>
    </div>
  </div>
);
