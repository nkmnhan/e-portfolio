import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AdaptiveImage, {
  adaptiveImageContainerClass,
  adaptiveImageClass,
  adaptiveImageRatioSquare,
  adaptiveImageRatioPortrait,
  adaptiveImageRatioVideo,
  adaptiveImageRatioLandscape,
  adaptiveImageMaxSquare,
  adaptiveImageMaxPortrait,
  adaptiveImageMaxVideo,
  adaptiveImageMaxLandscape,
} from './adaptive-image';

const meta: Meta<typeof AdaptiveImage> = {
  component: AdaptiveImage,
  title: "Components/Images/AdaptiveImage",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
    className: {
      control: "text",
      description: "Custom image className",
    },
    containerClass: {
      control: "text",
      description: "Custom container className",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80";

export const VideoAspect: Story = {
  args: {
    src: imageUrl,
    alt: "Mountain landscape",
    showSkeleton: true,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioVideo} ${adaptiveImageMaxVideo} w-[32rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const SquareAspect: Story = {
  args: {
    src: imageUrl,
    alt: "Square image",
    showSkeleton: true,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioSquare} ${adaptiveImageMaxSquare} w-[20rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const PortraitAspect: Story = {
  args: {
    src: imageUrl,
    alt: "Portrait image",
    showSkeleton: true,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioPortrait} ${adaptiveImageMaxPortrait} w-[20rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const LandscapeAspect: Story = {
  args: {
    src: imageUrl,
    alt: "Landscape image",
    showSkeleton: true,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioLandscape} ${adaptiveImageMaxLandscape} w-[32rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const WithDimensions: Story = {
  args: {
    src: imageUrl,
    alt: "With explicit dimensions",
    width: 800,
    height: 600,
    showSkeleton: true,
    className: adaptiveImageClass,
    containerClass: adaptiveImageContainerClass,
  },
};

export const CustomAspectRatio: Story = {
  args: {
    src: imageUrl,
    alt: "Custom aspect ratio",
    showSkeleton: true,
    containerClass: `${adaptiveImageContainerClass} aspect-[1/2] w-48`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    src: imageUrl,
    alt: "With custom styles",
    showSkeleton: true,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioVideo} ${adaptiveImageMaxVideo} w-[32rem]`,
    className: "rounded-lg border-4 border-blue-500 " + adaptiveImageClass,
    fill: true,
  },
};

export const WithPriority: Story = {
  args: {
    src: imageUrl,
    alt: "Priority loaded image",
    priority: true,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioVideo} ${adaptiveImageMaxVideo} w-[32rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const WithoutSkeleton: Story = {
  args: {
    src: imageUrl,
    alt: "Image without skeleton",
    showSkeleton: false,
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioSquare} ${adaptiveImageMaxSquare} w-[20rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};

export const EagerLoading: Story = {
  args: {
    src: imageUrl,
    alt: "Eagerly loaded image",
    loading: "eager",
    containerClass: `${adaptiveImageContainerClass} ${adaptiveImageRatioPortrait} ${adaptiveImageMaxPortrait} w-[20rem]`,
    className: adaptiveImageClass,
    fill: true,
  },
};