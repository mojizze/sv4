<template>
  <div>
    <label class="text-xs text-gray1" :for="label" v-if="label">{{
      label
    }}</label>
    <div class="relative">
      <input
        :id="label"
        :type="type"
        :name="name"
        :value="modelValue"
        :min="min"
        :max="max"
        :maxlength="maxLength"
        :minlength="minLength"
        @keypress="preventInputType"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full py-3.5 px-4 text-sm text-black1 outline-none placeholder:text-sm placeholder:text-[#C4C4C4]"
        :class="[
          {
            'border-blue': focus && !error && !success,
            'border-[#E7ECE8]': !focus && !error && !success,
            'border-[#E47A7A]': error,
            'border-[#27AEAE]': success,
          },
          borderRadius,
          border,
        ]"
        :placeholder="placeholderText"
        @focus="focus = true"
        @blur="focus = false"
      />
      <Icon
        v-if="suffixIcon"
        :name="suffixIcon"
        class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        @click="$emit('toggle-password-visibility')"
      />
    </div>
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
      <Icon name="greenCheck" class="mr-2" />
      <p>{{ successText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "./Icon.vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },

  type: {
    type: String,
    default: "text",
    validator(value) {
      return ["text", "number", "password", "text-only", "tel"].includes(value);
    },
  },

  label: {
    type: String,
    default: null,
  },
  suffixIcon: {
    type: String,
  },
  name: {
    type: String,
  },

  min: {
    type: Number,
    required: false,
  },

  max: {
    type: Number,
    required: false,
  },

  minLength: {
    type: Number,
    default: 1,
  },

  maxLength: {
    type: Number,
    required: false,
  },

  placeholderText: {
    type: String,
    default: "",
  },

  borderRadius: {
    type: String,
    default: "rounded",
  },

  border: {
    type: String,
    default: "border",
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
defineEmits(["update:modelValue", "toggle-password-visibility"]);

const focus = ref(false);

function preventInputType(evt) {
  // Allow only numbers
  if (props.type === "number") {
    const charCode = evt.which ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  // Allow only alphabet
  if (props.type === "text-only") {
    var keyCode = evt.keyCode ? evt.keyCode : evt.which;
    if (keyCode > 47 && keyCode < 58) {
      evt.preventDefault();
      return false;
    }
  }

  return true;
}
</script>
