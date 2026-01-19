import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import ImageLightbox, { LightboxImage } from "./image-lightbox";

const meta = {
  title: "Components/Images/ImageLightbox",
  component: ImageLightbox,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ImageLightbox>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleImages: LightboxImage[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    alt: "Mountain landscape",
    title: "Mountain Sunrise",
    description: "A beautiful mountain landscape at sunrise with mist in the valleys.",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
    alt: "Forest path",
    title: "Forest Path",
    description: "A serene path through an ancient forest.",
  },
  {
    src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200&q=80",
    alt: "Lake reflection",
    title: "Mountain Lake",
    description: "Crystal clear lake reflecting the surrounding mountains.",
  },
];

// Wrapper component to handle state for interactive stories
function LightboxDemo({ images, initialIndex = 0 }: { images: LightboxImage[]; initialIndex?: number }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Image Lightbox Demo</h2>
        <p className="text-gray-600 mb-4">
          Click the button below to open the lightbox. Use arrow keys or buttons to navigate.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Lightbox
        </button>
      </div>

      <ImageLightbox
        images={images}
        initialIndex={initialIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export const Default: Story = {
  render: () => <LightboxDemo images={sampleImages} />,
  args: {
    images: sampleImages,
    isOpen: true,
    onClose: () => {},
  },
};

export const SingleImage: Story = {
  render: () => <LightboxDemo images={[sampleImages[0]]} />,
  args: {
    images: [sampleImages[0]],
    isOpen: true,
    onClose: () => {},
  },
};

export const StartFromSecondImage: Story = {
  render: () => <LightboxDemo images={sampleImages} initialIndex={1} />,
  args: {
    images: sampleImages,
    initialIndex: 1,
    isOpen: true,
    onClose: () => {},
  },
};

export const WithoutTitles: Story = {
  render: () => (
    <LightboxDemo
      images={sampleImages.map(({ src, alt }) => ({ src, alt }))}
    />
  ),
  args: {
    images: sampleImages.map(({ src, alt }) => ({ src, alt })),
    isOpen: true,
    onClose: () => {},
  },
};
