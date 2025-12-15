import type { Preview } from '@storybook/nextjs-vite'

// Import global CSS styles for Storybook
// Same as in the main application without unsupported imports
// @source "../.flowbite-react/class-list.json";

import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;