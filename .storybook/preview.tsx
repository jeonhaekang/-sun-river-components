import type { Preview } from "@storybook/react";
import React from "react";
import { SunRiverProvider } from "../src/components/Context";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    Story => (
      <SunRiverProvider>
        <Story />
      </SunRiverProvider>
    )
  ]
};

export default preview;
