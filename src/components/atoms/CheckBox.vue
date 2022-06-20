<template>
  <label class="flex space-x-3">
    <div class="mt-0.5">
      <input
        type="checkbox"
        class="h-4 w-4"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
    </div>
    <div>{{ label }}</div>
  </label>
</template>

<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
