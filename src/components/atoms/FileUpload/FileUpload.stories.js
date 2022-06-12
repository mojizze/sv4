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
  template: `
    <div class="w-full">
      <FileUpload v-bind="args" class="w-full"  />
    </div>
  `,
});
