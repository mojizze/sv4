const path = require("path");
const { mergeConfig } = require("vite");
const svgLoader = require("vite-svg-loader");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
      plugins: [svgLoader()],
    });
  },
};
