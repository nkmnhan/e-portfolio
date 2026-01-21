import type { Meta, StoryObj } from "@storybook/react";
import { Input, Textarea } from "./input";

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

// =============================================================================
// TEXTAREA STORIES
// =============================================================================

export const TextareaDefault: Story = {
  render: () => (
    <div className="w-80">
      <Textarea placeholder="Enter your message..." />
    </div>
  ),
};

export const TextareaWithLabel: Story = {
  render: () => (
    <div className="w-80">
      <Textarea label="Message" placeholder="Write your message here..." />
    </div>
  ),
};

export const TextareaWithHelperText: Story = {
  render: () => (
    <div className="w-80">
      <Textarea
        label="Bio"
        placeholder="Tell us about yourself..."
        helperText="Maximum 500 characters"
      />
    </div>
  ),
};

export const TextareaWithError: Story = {
  render: () => (
    <div className="w-80">
      <Textarea
        label="Message"
        placeholder="Write your message here..."
        defaultValue="Too short"
        error="Message must be at least 10 characters"
      />
    </div>
  ),
};

export const TextareaResizeOptions: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Textarea label="No Resize" placeholder="Cannot resize" resize="none" />
      <Textarea label="Vertical" placeholder="Resize vertically" resize="vertical" />
      <Textarea label="Both" placeholder="Resize both ways" resize="both" />
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <form className="w-96 space-y-4">
      <Input label="Name" placeholder="Your name" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Textarea
        label="Message"
        placeholder="How can we help you?"
        helperText="We'll get back to you within 24 hours"
      />
    </form>
  ),
};
