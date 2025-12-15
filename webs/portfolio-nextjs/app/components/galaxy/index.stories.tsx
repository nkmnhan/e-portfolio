import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Index from './index';

const meta = {
  component: Index,
  title: "Components/Galaxy",
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};