import Tab from "./Tab.vue";
import { ref } from "vue";

export default {
  title: "Atoms/Tab",
  component: Tab,
  argTypes: {},
};

export const ComplexComponent = (args) => ({
  components: { Tab },
  setup() {
    const currentBankTab = ref("1");
    const banks = ref([
      {
        key: 1,
        primary_title: "Guaranty Trust Bank",
        secondary_title: "3245360043",
        img: "/src/assets/icons/gtb.svg",
      },
      {
        key: 2,
        primary_title: "ALAT By Wema",
        secondary_title: "1001029202",
        img: "/src/assets/icons/alat.svg",
      },
    ]);

    return { args, banks, currentBankTab };
  },
  template: `
    <Tab
        v-bind="args"
        @update:currentTab="(value) => (currentBankTab = value)"
        :tabs="banks"
        type="complex"
        :selected="currentBankTab"
    />

  `,
});

export const SimpleComponent = (args) => ({
  components: { Tab },
  setup() {
    const currentTab = ref("bank");
    const tabs = ref([
      {
        name: "Add a Bank",
        key: "bank",
      },
      {
        name: "Add a Debit Card",
        key: "card",
      },
    ]);

    return { args, tabs, currentTab };
  },
  template: `
    <Tab
        v-bind="args"
        @update:currentTab="(value) => (currentTab = value)"
        :tabs="tabs"
        type="simple"
        :selected="currentTab"
    />

  `,
});
