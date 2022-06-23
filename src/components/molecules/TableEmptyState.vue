<template>
  <div class="flex flex-col items-center justify-center space-y-3">
    <Icon :name="icon" class="h-[116px] w-[116px]" />
    <div class="font-bold text-black1">{{ title }}</div>
    <div>{{ subTitle }}</div>
    <Button
      v-if="btnLabel"
      type="outline"
      :label="btnLabel"
      @btn:clicked="$emit('btn:clicked')"
    />
  </div>
</template>

<script setup>
import Icon from "../atoms/Icon.vue";
import Button from "../atoms/Button.vue";

defineEmits(["btn:clicked"]);

defineProps({
  icon: { type: String, default: "emptyFile" },
  title: { type: String, default: "No record to display" },
  subTitle: {
    type: String,
    default: "Click on send payment to make payment",
  },
  btnLabel: String,
});
</script>

<style lang="scss" scoped></style>
