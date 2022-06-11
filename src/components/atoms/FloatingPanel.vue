<template>
  <div v-if="value">
    <Overlay class="z-10" />
    <div class="absolute inset-y-0 right-0 z-20 h-full w-[440px] bg-white p-14">
      <Icon
        name="close"
        @click="value = false"
        class="absolute top-10 right-14 cursor-pointer"
      />
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Overlay from "@/components/atoms/Overlay.vue";
import Icon from "@/components/atoms/Icon.vue";

const props = defineProps(["modelValue"]);
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
