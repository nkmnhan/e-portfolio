import { Meta, StoryObj } from "@storybook/nextjs-vite";
import MonogramLogo from "./monogram-logo";
import NSerifLogo from "./n-serif-logo";

const meta: Meta = {
  title: "Components/Logos",
  component: NSerifLogo,
  tags: ["autodocs"],
};

export default meta;

// Stories for Log
export const LogoDefault: StoryObj = {
  render: () => <NSerifLogo />,
  name: "Log Default",
};

// Stories for MonogramLogo
export const MonogramLogoDefault: StoryObj = {
  render: () => <MonogramLogo />,
  name: "MonogramLogo Default",
};
