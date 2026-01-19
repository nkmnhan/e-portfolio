import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    helperText: "Must be at least 8 characters",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    defaultValue: "invalid-email",
    error: "Please enter a valid email address",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot edit",
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const FormExample: Story = {
  render: () => (
    <form className="w-80 space-y-4">
      <Input label="Full Name" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="john@example.com" />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        helperText="Must be at least 8 characters"
      />
    </form>
  ),
};
