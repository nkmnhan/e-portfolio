import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import GoogleModelViewer from "./google-3d-viewer";

const meta = {
  component: GoogleModelViewer,
  title: "Components/3D-ModelViewer/Google",
} satisfies Meta<typeof GoogleModelViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
