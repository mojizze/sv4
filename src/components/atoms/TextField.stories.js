import TextField from "./TextField.vue";

export default {
  title: "Atoms/TextField",
  component: TextField,

  argsTypes: {},
};

export const TextFieldComponent = (args) => ({
  components: { TextField },
  setup() {
    return { args };
  },
  template: `<TextField class="w-94" v-bind="args"/>`,
});
