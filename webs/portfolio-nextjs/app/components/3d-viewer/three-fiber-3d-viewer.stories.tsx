import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ThreeFiberViewer from "./three-fiber-3d-viewer";

const meta = {
  component: ThreeFiberViewer,
  title: "Components/3D-ModelViewer/ThreeFiber",
} satisfies Meta<typeof ThreeFiberViewer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
