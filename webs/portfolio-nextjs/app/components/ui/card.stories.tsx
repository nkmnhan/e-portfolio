import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardContent, CardFooter } from "./card";
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
