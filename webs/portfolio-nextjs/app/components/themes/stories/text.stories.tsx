import type { Meta, StoryFn } from "@storybook/nextjs-vite";
import { textPrimary, textSecondary, textMuted } from "..";

const meta: Meta = { title: "Themes/Text" };
export default meta;

export const Default: StoryFn = () => (
  <div className="p-4 space-y-10">
    <p className={`${textPrimary} text-base`}>
      This is the default body text (text-gray-600)
    </p>
    <p className={`${textSecondary} mt-2`}>This is secondary text.</p>
    <p className={`${textMuted} mt-2 text-sm`}>Muted helper text.</p>
  </div>
);
