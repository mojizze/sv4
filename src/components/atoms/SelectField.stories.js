import Select from "./index.vue";

export default {
  title: "Atoms/Select",
  components: Select,

  argTypes: {
    width: 500,
  },
};

export const AvatarComponent = (args) => ({
  components: { Select },
  setup() {
    const OPTIONS = new Array(124)
      .fill()
      .map((_, i) => ({ label: i + 1, value: i + 1 }));
    console.log("OPTIONS :", OPTIONS);
    return { args, OPTIONS };
  },
  template: `<Select v-bind="args" :width="50" :options="OPTIONS" />`,
});
