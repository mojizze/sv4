import Button from "./Button.vue";
import Icon from "./Icon.vue";

export default {
  title: "Atoms/Button",
  component: Button,

  argTypes: {
    type: {
      control: { type: "select" },
      options: ["normal", "outline"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "active", "disabled"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "normal", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["round", "square"],
    },
  },
};

export const ButtonComponent = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args" label="Button Sample"/>`,
});

export const ButtonIconText = (args) => ({
  components: { Button, Icon },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" label="Button Sample">
      <template #icon>
        <Icon name="add" />
      </template>
    </Button>
  `,
});

export const ButtonIcon = (args) => ({
  components: { Button, Icon },
  setup() {
    return { args };
  },
  template: `
    <Button v-bind="args" shape="round">
      <template #icon>
        <Icon name="add" />
      </template>
    </Button>
  `,
});
