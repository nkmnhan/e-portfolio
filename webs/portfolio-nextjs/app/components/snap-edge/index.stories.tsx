import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { IoIosAppstore } from "react-icons/io";
import { SnapEdge } from ".";

const meta = {
  component: SnapEdge,
  title: "Components/SnapEdge",
} satisfies Meta<typeof SnapEdge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default",
    children: <IoIosAppstore className="w-40 h-40" />,
    defaultHorizontal: "left",
    defaultVertical: "top",
  },
};
