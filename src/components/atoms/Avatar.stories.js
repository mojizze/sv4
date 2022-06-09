import Avatar from "./Avatar.vue";

export default {
  title: "Atoms/Avatar",
  components: Avatar,

  argTypes: {},
};

export const AvatarComponent = (args) => ({
  components: { Avatar },
  setup() {
    const img =
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    return { args, img };
  },
  template: `<Avatar v-bind="args" :img="img" name="Button Sample"/>`,
});
