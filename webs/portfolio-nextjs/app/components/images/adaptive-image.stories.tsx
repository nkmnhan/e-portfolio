import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import AdaptiveImage from './adaptive-image';

const meta: Meta<typeof AdaptiveImage> = {
  component: AdaptiveImage,
  title: "Components/Images/AdaptiveImage",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    aspectRatio: {
      control: "select",
      options: ["square", "video", "portrait", "1/2"],
      description: "Image aspect ratio",
    },
    showSkeleton: {
      control: "boolean",
      description: "Show loading skeleton",
    },
    priority: {
      control: "boolean",
      description: "Next.js image priority loading",
    },
    loading: {
      control: "select",
      options: ["eager", "lazy"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VideoAspect: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain landscape",
    showSkeleton: true,
    aspectRatio: "video",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const SquareAspect: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    alt: "Square image",
    showSkeleton: true,
    aspectRatio: "square",
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const PortraitAspect: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    alt: "Portrait image",
    showSkeleton: true,
    aspectRatio: "portrait",
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const WithDimensions: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "With explicit dimensions",
    width: 800,
    height: 600,
    showSkeleton: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const WithPriority: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Priority loaded image",
    priority: true,
    aspectRatio: "video",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const CustomAspectRatio: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Custom aspect ratio",
    showSkeleton: true,
    aspectRatio: "1/2",
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const WithCustomClass: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "With custom styles",
    showSkeleton: true,
    aspectRatio: "video",
    className: "rounded-lg border-4 border-blue-500",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};