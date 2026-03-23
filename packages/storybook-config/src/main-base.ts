import type { StorybookConfig } from "@storybook/nextjs-vite";

export const mainBase: Partial<StorybookConfig> = {
  addons: ["@storybook/addon-themes", "@storybook/addon-mcp"],
  framework: "@storybook/nextjs-vite",
};
