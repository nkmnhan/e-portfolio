import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Breadcrumbs from "./breadcrumbs";

const meta = {
  title: "Components/Navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleLevel: Story = {
  args: {
    items: [{ label: "Work & Projects" }],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: "Work", href: "/work" },
      { label: "Project Details" },
    ],
  },
};

export const ThreeLevels: Story = {
  args: {
    items: [
      { label: "Work", href: "/work" },
      { label: "Enterprise", href: "/work?category=enterprise" },
      { label: "MOE Platform" },
    ],
  },
};

export const WithoutHome: Story = {
  args: {
    items: [
      { label: "Work", href: "/work" },
      { label: "Project Details" },
    ],
    showHome: false,
  },
};
