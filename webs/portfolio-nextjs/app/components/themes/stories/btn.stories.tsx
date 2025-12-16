import type { Meta, StoryFn } from "@storybook/nextjs-vite";
import { clsxMerge } from "..";
import { btnPrimary, btnGhost, btnSm, btnLg } from "..";

const meta: Meta = { title: "Themes/Button" };
export default meta;

export const Default: StoryFn = () => (
  <div className="p-4 space-y-10">
    <div className="section">
      <div className="mb-2 font-semibold">Primary Button</div>
      <button className={clsxMerge(btnPrimary)}>Primary</button>
    </div>

    <div className="section">
      <div className="mb-2 font-semibold">Sizes</div>
      <div className="flex gap-3">
        <button className={clsxMerge(btnPrimary, btnSm)}>Small</button>
        <button className={clsxMerge(btnPrimary)}>Default</button>
        <button className={clsxMerge(btnPrimary, btnLg)}>Large</button>
        <button className={clsxMerge(btnGhost)}>Ghost</button>
      </div>
    </div>
  </div>
);
