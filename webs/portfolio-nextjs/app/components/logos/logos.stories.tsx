import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Logo2 from "./logo2";
import Logo from "./logo";

const meta: Meta = {
  title: "Components/Logos",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;

// Stories for Log
export const LogoDefault: StoryObj = {
  render: () => <Logo />,
  name: "Log Default",
};

// Stories for Logo2
export const Logo2Default: StoryObj = {
  render: () => <Logo2 />,
  name: "Logo2 Default",
};
