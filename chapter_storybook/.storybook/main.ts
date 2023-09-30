import { StorybookConfig } from "@storybook/react-vite";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
    stories: ["../src/components/**/*.stories.tsx"],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
