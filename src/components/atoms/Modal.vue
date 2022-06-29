<template>
  <TransitionRoot as="template" :show="show" appear>
    <Dialog
      as="div"
      class="fixed inset-0 z-[999] overflow-hidden"
      @close="emit('close')"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-in-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-in-out duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="absolute inset-0 bg-black4/40" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-end p-4 text-center sm:p-0">
          <TransitionChild
            as="template"
            enter="transform transition-transform ease-in-out duration-300"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition-transform ease-in-out duration-300"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative space-y-16 overflow-hidden rounded-lg bg-white p-10 text-left shadow-xl transition-all sm:w-full lg:w-1/3"
            >
              <Icon
                name="close"
                class="absolute top-10 right-5 cursor-pointer"
                @click="emit('close')"
              />
              <DialogTitle>
                <slot name="title" />
              </DialogTitle>
              <slot name="content" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  DialogOverlay,
} from "@headlessui/vue";
import Icon from "@components/atoms/Icon.vue";

defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "left",
    validator(value) {
      return ["left", "center"].includes(value);
    },
  },
});

const emit = defineEmits(["close"]);
</script>
