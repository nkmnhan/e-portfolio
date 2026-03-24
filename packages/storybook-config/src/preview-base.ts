import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "storybook";

export const previewBase: Partial<Preview> = {
  decorators: [
    withThemeByClassName({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
    }),
  ],
};
