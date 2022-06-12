import Badges from "./Badges.vue";

export default {
  title: "Atoms/Badges",
  component: Badges,

  argTypes: {},
};

export const BadgesComponent = (args) => ({
  components: { Badges },
  setup() {
    return { args };
  },
  template: `<Badges title="Secured data verification" icon="padlock"/>`,
});
