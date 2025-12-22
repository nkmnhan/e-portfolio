import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SkeletonDemo } from ".";

const meta: Meta = {
  title: "Components/Skeletons",
  component: SkeletonDemo,
  decorators: [
    (Story) => (
      <div className="p-18">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SkeletonDemo>;

export default meta;

// All Skeletons Test
export const AllSkeletons: StoryObj = {};
