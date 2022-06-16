import SelectField from "./SelectField.vue";

export default {
  title: "Atoms/SelectField",
  components: SelectField,

  argTypes: {
    width: 500,
  },
};

export const AvatarComponent = (args) => ({
  components: { SelectField },
  setup() {
    const OPTIONS = new Array(124)
      .fill()
      .map((_, i) => ({ label: i + 1, value: i + 1 }));
    console.log("OPTIONS :", OPTIONS);
    return { args, OPTIONS };
  },
  template: `<SelectField v-bind="args" :width="50" :options="OPTIONS" />`,
});
