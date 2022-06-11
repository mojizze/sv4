import Modal from "./Modal.vue";
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import { ref } from "vue";

export default {
  title: "Atoms/Modal",
  component: Modal,
  argTypes: {},
};

export const SimpleModal = (args) => ({
  components: { Modal, Button, Icon },
  setup() {
    const show = ref(true);
    return { args, show };
  },
  template: `
    <Modal v-bind="args" :show="show"  @close="() => show = false">
      <template #content>
        <div
            class="flex-col justify-center items-center h-full w-full"
        >
          <div
              class="grid place-items-center h-35 w-35 rounded-full mx-auto bg-deepblue mb-10"
          >
            <Icon name="big-check" />
          </div>
          <p class="text-2xl text-black1 text-center font-semibold">
            Logged in successfully
          </p>
    
          <p class="text-sm text-gray1 text-center mt-4 mb-8">
            Login with your internet banking details you use with your Zenith Bank
            App
          </p>
    
          <div class="flex justify-center items-center">
            <Button @click="$emit('continue')" label="Continue" />
          </div>
        </div>
      </template>
    </Modal>
  `,
});
