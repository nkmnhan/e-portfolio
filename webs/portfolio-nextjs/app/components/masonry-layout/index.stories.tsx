import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MasonryLayout } from ".";

const meta = {
  component: MasonryLayout,
  title: "Components/MasonryLayout",
} satisfies Meta<typeof MasonryLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const items = Array.from({ length: 30 }, (_, i) => i + 1);
const randomHeight = () => 320 + Math.floor(Math.random() * 48) * 4;

export const Default: Story = {
  args: {
    children: items.map((item) => (
      <div
        className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg"
        style={{ height: randomHeight() }}
        key={item}
      >
        {`Item ${item}`}
      </div>
    )),
  },
};
