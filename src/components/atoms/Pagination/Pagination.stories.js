import Pagination from "./index.vue";

export default {
  title: "Atoms/Pagination",
  components: Pagination,

  argTypes: {
    width: 500,
  },
};

export const PaginationComponent = (args) => ({
  components: { Pagination },
  setup() {
    const OPTIONS = new Array(124)
      .fill()
      .map((_, i) => ({ label: i + 1, value: i + 1 }));

    return { args, OPTIONS };
  },
  template: `<Pagination v-bind="args" :width="50" :options="OPTIONS" />`,
});
