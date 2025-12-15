import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { NavBar } from './index';

const meta = {
  component: NavBar,
  title: "Components/NavBar",
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};