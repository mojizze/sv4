import Button from "./index.vue";
import Icon from "../Icon.vue";

export default {
  title: "Atoms/Button",
  component: Button,

  argTypes: {
    type: {
      control: { type: "select" },
      options: ["normal", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "normal", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    },
  },
};

export const ButtonComponent = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args" label="Button Sample" />`,
});

export const ButtonIconText = (args) => ({
  components: { Button, Icon },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" icon="send" label="Button Sample" />
  `,
});

export const ButtonOutline = (args) => ({
  components: { Button, Icon },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" type="outline" label="Button Sample" />
  `,
});

export const ButtonIcon = (args) => ({
  components: { Button, Icon },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" icon="add" shape="circle" />
  `,
});
