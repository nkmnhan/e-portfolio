import type { Meta, StoryFn } from "@storybook/nextjs-vite";
import { clsxMerge } from "..";
import {
  hoverAnimate,
  hoverCard,
  linkUnderline,
  cardLink,
  cardContent,
  motionSafeHoverScale102,
  textPrimary,
  primaryBg,
  primaryText,
  btnPrimary,
} from "..";

const meta: Meta = { title: "Themes/Tailwind Constants (Combined)" };
export default meta;

export const AllConstants: StoryFn = () => (
  <div className="p-4 space-y-10">
    <div className="mb-6">
      <h3 className="text-lg font-semibold">Theme constants — combined test</h3>
      <p className="text-sm text-gray-500">This page renders HTML/CSS examples for each token to validate spacing, hover and focus behavior.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="panel bg-white dark:bg-gray-800">
        <div className="section-title">Hover Animate (button)</div>
        <button className={clsxMerge(hoverAnimate, "px-4 py-2", primaryBg, primaryText, "rounded")}>Hover animate</button>
      </div>

      <div className="panel bg-white dark:bg-gray-800">
        <div className="section-title">Card Hover</div>
        <div className={clsxMerge(hoverCard, "p-4 bg-white dark:bg-gray-800")}>
          <div className="font-bold">Hover Card</div>
          <div className="text-sm text-gray-500">Elevates and moves up on hover</div>
        </div>
      </div>

      <div className="panel bg-white dark:bg-gray-800">
        <div className="section-title">Link underline</div>
        <a className={clsxMerge(linkUnderline, "text-cyan-700 font-medium")}>Underline on hover</a>
      </div>

      <div className="panel bg-white dark:bg-gray-800">
        <div className="section-title">Card link (clickable area)</div>
        <a href="#" className={cardLink}>
          <div className={clsxMerge(cardContent, "bg-gray-100 p-4 rounded")}>
            <div>Clickable area content</div>
            <div className="text-sm text-gray-500">Full card is tappable</div>
          </div>
        </a>
      </div>

      <div className="panel bg-white dark:bg-gray-800">
        <div className="section-title">Motion-safe hover scale</div>
        <button className={clsxMerge(motionSafeHoverScale102, "px-4 py-2 rounded bg-cyan-700 text-white")}>
          Motion safe scale (hover)
        </button>
      </div>

      <div className="panel bg-white dark:bg-gray-800">
        <div className="section-title">Text token</div>
        <p className={clsxMerge(textPrimary, "text-base")}>This is the default body text (text-gray-600)</p>
        <div className="mt-3">
          <button className={clsxMerge(btnPrimary)}>Primary button</button>
        </div>
      </div>
    </div>
  </div>
);
