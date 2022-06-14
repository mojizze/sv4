<template>
  <div v-if="value">
    <Backdrop class="z-10" />
    <div
      class="absolute inset-y-0 left-0 z-20 h-full bg-white"
      :class="[
        { 'left-0': position === 'left', 'right-0': position === 'right' },
        classes,
      ]"
    >
      <slot name="close">
        <Icon
          name="close"
          @click="value = false"
          class="absolute top-10 right-14 cursor-pointer"
        />
      </slot>
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Backdrop from "@/components/atoms/Backdrop.vue";
import Icon from "@/components/atoms/Icon.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },

  classes: {
    type: String,
    default: "w-[440px] p-14",
  },

  position: {
    type: String,
    validate: (value) => ["left", "right"].includes(value),
    default: "left",
  },
});
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
