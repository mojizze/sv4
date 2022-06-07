<template>
  <div class="">
    <label class="text-xs text-gray1" v-if="label">{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full rounded border py-3.5 pl-4 text-sm text-black1 outline-none placeholder:text-sm placeholder:text-[#C4C4C4]"
      :class="{
        'border-blue': focus && !error && !success,
        'border-[#E7ECE8]': !focus && !error && !success,
        'border-[#E47A7A]': error,
        'border-[#27AEAE]': success,
      }"
      :placeholder="placeholderText"
      @focus="focus = true"
      @blur="focus = false"
    />
    <div
      v-if="error"
      class="mt-1 flex w-full items-center justify-start rounded bg-[#FFD4D4] py-0.5 pl-2 text-xs text-[#DF1818]"
    >
      <Icon name="alarm" class="mr-2" />
      <p>{{ errorText }}</p>
    </div>
    <div
      v-if="success"
      class="mt-1 flex w-full items-center justify-start rounded bg-green1/25 py-0.5 pl-2 text-xs text-green1"
    >
      <Icon name="check" class="mr-2" />
      <p>{{ successText }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
import Icon from "./Icon.vue";

defineProps({
  modelValue: {
    type: String,
    default: null,
  },

  type: {
    type: String,
    default: "text",
  },

  label: {
    type: String,
    default: null,
  },

  placeholderText: {
    type: String,
    default: "",
  },

  error: {
    type: Boolean,
    default: false,
  },

  errorText: {
    type: String,
    default: "",
  },

  success: {
    type: Boolean,
    default: false,
  },

  successText: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
const focus = ref(false);
</script>
