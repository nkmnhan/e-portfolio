import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeToggle, ThemeToggleProps } from ".";

const meta: Meta<ThemeToggleProps> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "text" },
      description: "Control the component size. Accepts px or CSS size string.",
    },
    className: {
      control: { type: "text" },
      description: "Custom class name for the wrapper div.",
    },
  },
};

export default meta;

type Story = StoryObj<ThemeToggleProps>;

export const Default: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 48,
  },
};

export const CustomClass: Story = {
  args: {
    className: "border-2 border-blue-500 p-2 rounded",
  },
};
