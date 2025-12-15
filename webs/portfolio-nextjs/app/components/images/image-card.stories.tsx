import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ImageCard } from ".";

const meta = {
  title: "Components/Images/ImageCard",
  component: ImageCard,
} satisfies Meta<typeof ImageCard>;

export default meta;

type Story = StoryObj<typeof meta>;
const imageUrl =
  "https://app.requestly.io/delay/5000/https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";

export const Default: Story = {
  args: {
    className: "w-80 h-120",
    src: imageUrl,
    alt: "image card",
    title: "Image Card Title",
    description:
      "This is a description of the image card component. It provides additional information about the image displayed above. It can span multiple lines and give context to the viewer.",
    style: {},
    loading: "lazy",
  },
};
