import SideNavigation from "./SideNavigation.vue";
import vueRouter from "storybook-vue3-router";

export default {
  title: "Molecules/SideNavigation",
  component: SideNavigation,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => ({
  components: { SideNavigation },
  setup() {
    return { ...args };
  },
  template: `
    <div class="w-55 h-full bg-white">
      <side-navigation />
    </div>
  `,
});

export const Navigation = Template.bind({});
Navigation.decorators = [vueRouter()];
