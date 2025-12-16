import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { GoogleModelViewer, BabylonJSViewer, ThreeFiberViewer } from ".";

const googleMeta = {
  component: GoogleModelViewer,
  title: "Components/3D-ModelViewer",
} satisfies Meta<typeof GoogleModelViewer>;

export default googleMeta;

type GoogleStory = StoryObj<typeof googleMeta>;

export const Google: GoogleStory = {
  args: {},
};

const babylonMeta = {
  component: BabylonJSViewer,
  title: "Components/3D-ModelViewer",
} satisfies Meta<typeof BabylonJSViewer>;

type BabylonStory = StoryObj<typeof babylonMeta>;

export const Babylon: BabylonStory = {
  args: {},
};

const threeFiberMeta = {
  component: ThreeFiberViewer,
  title: "Components/3D-ModelViewer",
} satisfies Meta<typeof ThreeFiberViewer>;

type ThreeFiberStory = StoryObj<typeof threeFiberMeta>;

export const ThreeFiber: ThreeFiberStory = {
  args: {},
};
