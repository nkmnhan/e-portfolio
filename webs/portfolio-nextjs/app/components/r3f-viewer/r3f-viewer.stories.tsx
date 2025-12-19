import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import R3fViewer from "./r3f-viewer";

const meta = {
  component: R3fViewer,
  title: "Components/3D-R3fViewer",
} satisfies Meta<typeof R3fViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
