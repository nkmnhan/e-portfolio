import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Galaxy } from ".";

const meta = {
  component: Galaxy,
  title: "Components/Galaxy",
} satisfies Meta<typeof Galaxy>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
