import Menu from "./Menu.vue";
import vueRouter from "storybook-vue3-router";
import { ref } from "vue";

export default {
  title: "Molecules/Menu",
  component: Menu,
  argsTypes: {},
};

const Basic = (args) => ({
  components: { Menu },
  setup() {
    const navigation = ref([
      {
        name: "Dashboard",
        link: "#",
        children: null,
        icon: "home",
      },
      {
        name: "Statements",
        link: "#",
        children: null,
        icon: "paper",
      },
      {
        name: "Payments",
        link: "#",
        children: [
          {
            name: "Payment Category",
            link: "#",
          },
          {
            name: "Transactions",
            link: "#",
          },
          {
            name: "Requires Attention",
            link: "#",
          },
          {
            name: "Recurring Payments",
            link: "#",
          },
          {
            name: "Beneficiaries",
            link: "#",
          },
        ],
        icon: "send",
      },
      {
        name: "Collections",
        link: "#",
        icon: "send",
        children: [
          {
            name: "Recieved Payments",
            link: "#",
          },
          {
            name: "Products",
            link: "#",
          },
          {
            name: "Invoices",
            link: "#",
          },
          {
            name: "Customers",
            link: "#",
          },
        ],
      },
      {
        name: "Accounts",
        link: "#",
        children: null,
        icon: "wallet",
      },
    ]);

    return { args, navigation };
  },
  template: `<Menu class="w-55 h-full" :navigation="navigation" v-bind="args"/>`,
});

export const Default = Basic.bind({});
Default.decorators = [vueRouter()];
