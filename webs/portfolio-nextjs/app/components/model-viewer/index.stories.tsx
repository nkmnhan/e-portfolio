import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ModelViewer } from ".";

const meta = {
  component: ModelViewer,
  title: "Components/ModelViewer",
} satisfies Meta<typeof ModelViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
