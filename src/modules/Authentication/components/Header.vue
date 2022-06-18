<template>
  <div>
    <div v-if="goBack" class="mb-15">
      <Button
        icon="arrowLeft"
        label="Go Back"
        ghost
        class="text-xs"
        size="tiny"
        @click="$router.back()"
      />
    </div>
    <div class="space-y-1">
      <div class="text-xl font-semibold text-black1">{{ title }}</div>
      <div>{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
import Button from "@components/atoms/Button.vue";
defineProps({
  title: String,
  subtitle: String,
  goBack: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
