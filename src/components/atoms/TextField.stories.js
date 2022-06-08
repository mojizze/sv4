import TextField from "./TextField.vue";

export default {
  title: "Atoms/TextField",
  component: TextField,

  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "number", "password", "text-only"],
    },
  },
};

export const TextFieldComponent = (args) => ({
  components: { TextField },
  setup() {
    return { args };
  },
  template: `<TextField class="w-94" v-bind="args"/>`,
});
