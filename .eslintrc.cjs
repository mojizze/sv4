/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
    browser: true,
    node: true,
  },
  plugins: ["tailwindcss"],
  ignorePatterns: ["!.storybook"],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: [
          'Button',
          'Icon',
          'Menu',
          'Avatar',
          'Tab',
          'Backdrop',
          'Modal',
          'Badges',
          "index",
        ],
      },
    ],
    "tailwindcss/classnames-order": "off",
  },
  overrides: [
    {
      files: [
        "cypress/integration/**.spec.{js,ts,jsx,tsx}",
        "src/modules/**/*.vue",
      ],
      rules: {
        "vue/multi-word-component-names": "off",
      },
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
