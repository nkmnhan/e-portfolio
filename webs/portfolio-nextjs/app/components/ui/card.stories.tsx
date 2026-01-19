import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter, StatCard } from "./card";
import { Button } from "./button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outlined", "ghost"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h3 className="text-lg font-semibold">Card Title</h3>
          <p className="text-sm text-[var(--color-text-muted)]">Card subtitle</p>
        </CardHeader>
        <CardContent>
          <p>This is the card content. You can put any content here.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <CardHeader>
          <h3 className="text-lg font-semibold">Elevated Card</h3>
        </CardHeader>
        <CardContent>
          <p>This card has a shadow elevation effect.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <>
        <CardHeader>
          <h3 className="text-lg font-semibold">Outlined Card</h3>
        </CardHeader>
        <CardContent>
          <p>This card has a border outline.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card variant="default" className="w-48">
        <CardContent>Default</CardContent>
      </Card>
      <Card variant="elevated" className="w-48">
        <CardContent>Elevated</CardContent>
      </Card>
      <Card variant="outlined" className="w-48">
        <CardContent>Outlined</CardContent>
      </Card>
      <Card variant="ghost" className="w-48">
        <CardContent>Ghost</CardContent>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <CardHeader>
          <h3 className="text-lg font-semibold">Hoverable Card</h3>
        </CardHeader>
        <CardContent>
          <p>Hover over this card to see the effect.</p>
        </CardContent>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <h3 className="text-lg font-semibold">Card with Footer</h3>
        </CardHeader>
        <CardContent>
          <p>This card includes a footer with actions.</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button size="sm">Save</Button>
          <Button size="sm" variant="ghost">Cancel</Button>
        </CardFooter>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const ProjectCard: Story = {
  render: () => (
    <Card hoverable padding="none" className="w-72 overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Project Name</h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-4">
          A short description of the project and its purpose.
        </p>
        <div className="flex gap-2">
          <span className="px-2 py-1 text-xs rounded bg-[var(--color-surface)]">React</span>
          <span className="px-2 py-1 text-xs rounded bg-[var(--color-surface)]">TypeScript</span>
        </div>
      </div>
    </Card>
  ),
};

// =============================================================================
// STAT CARD STORIES
// =============================================================================

export const StatCardBasic: Story = {
  render: () => (
    <StatCard value={12} label="Open Source Projects" />
  ),
};

export const StatCardWithIcon: Story = {
  render: () => (
    <StatCard
      value={5}
      label="Featured"
      icon={
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      }
    />
  ),
};

export const StatCardWithTrend: Story = {
  render: () => (
    <div className="flex gap-4">
      <StatCard
        value="2.5k"
        label="Visitors"
        trend={{ value: 12, direction: "up" }}
      />
      <StatCard
        value="45"
        label="Issues"
        trend={{ value: 5, direction: "down" }}
      />
      <StatCard
        value="99%"
        label="Uptime"
        trend={{ value: 0, direction: "neutral" }}
      />
    </div>
  ),
};

export const StatCardsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard value={12} label="Open Source" />
      <StatCard value={5} label="Featured" />
      <StatCard value="8+" label="Tech Stack" />
      <StatCard value={5} label="Stars" />
    </div>
  ),
};
