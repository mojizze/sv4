import AuthenticatedLayout from "./AuthenticatedLayout.vue";
import vueRouter from "storybook-vue3-router";

export default {
  title: "Organisms/AuthenticatedLayout",
  component: AuthenticatedLayout,

  argTypes: {},
};

export const AuthenticatedLayoutComponent = (args) => ({
  components: { AuthenticatedLayout },
  setup() {
    return { args };
  },
  template: `<AuthenticatedLayout/>`,
});

export const Default = AuthenticatedLayoutComponent.bind({});
Default.decorators = [vueRouter()];
