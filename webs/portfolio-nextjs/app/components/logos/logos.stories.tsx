import { Meta, StoryObj } from "@storybook/nextjs-vite";
import MonogramLogo from "./monogram-logo";
import NSerifLogo from "./n-serif-logo";
import NetFlixLogo from "./netflix-logo";

const meta: Meta = {
  title: "Components/Logos"
};

export default meta;

// Stories for Log
export const LogoDefault: StoryObj = {
  render: () => <NSerifLogo />,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-64 w-64 bg-gray-100">
        <Story />
      </div>
    ),
  ],
  name: "Log Default",
};

// Stories for MonogramLogo
export const MonogramLogoDefault: StoryObj = {
  render: () => <MonogramLogo />,
  name: "MonogramLogo Default",
};


// Stories for NetFlixLogo
export const NetFlixLogoDefault: StoryObj = {
  render: () => <NetFlixLogo />,
  name: "NetFlixLogo Default",
};