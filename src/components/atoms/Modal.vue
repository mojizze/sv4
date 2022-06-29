<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-[99999]" @close="emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black4/40 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full justify-end p-4 text-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-in duration-5000"
            enter-from="translate-x-[100%]"
            enter-to="translate-x-[100%]"
            leave="ease-out duration-200"
            leave-from="translate-x-[100%]"
            leave-to="translate-x-[100%]"
          >
            <DialogPanel
              class="relative overflow-hidden rounded-lg bg-white px-10 py-16 text-left shadow-xl transition-all sm:w-full lg:w-1/3"
            >
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
} from "@headlessui/vue";

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
