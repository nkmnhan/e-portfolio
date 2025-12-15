import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BrandGallaryTestData from './data';
import Index from './index';

const meta = {
  component: Index,
  title: "Components/BrandGallery",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "w-full h-64 sm:h-80 md:h-96 lg:h-112 xl:h-140 m-auto",
    src: BrandGallaryTestData
  }
};