import FileUpload from "./index.vue";

export default {
  title: "Atoms/FileUpload",
  components: FileUpload,

  argTypes: {},
};

export const FileUploadComponent = (args) => ({
  components: { FileUpload },
  setup() {
    return { args };
  },
  template: `<FileUpload v-bind="args"  />`,
});
