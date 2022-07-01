<template>
  <Button
    @click="$emit('btn:clicked')"
    size="tiny"
    shape="circle"
    class="absolute bottom-18 right-4 z-10"
  >
    <template #icon>
      <Icon :name="icon" class="h-6 w-6 fill-blue stroke-white" />
    </template>
  </Button>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";

defineProps({
  icon: {
    type: String,
    default: "add",
  },
});
</script>
