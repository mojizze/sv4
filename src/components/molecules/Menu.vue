<template>
  <div class="z-30 space-y-4">
    <MenuItem v-for="menu in navigation" :key="menu.name" :menu="menu">
      <template v-if="menu.icon" #icon>
        <Icon
          class="mr-2.5 h-5 w-5"
          :class="{ 'text-blue': menu.link === $route.name }"
          :name="menu.icon"
        />
      </template>
    </MenuItem>
  </div>
</template>

<script setup>
import MenuItem from "@/components/atoms/MenuItem.vue";
import Icon from "../atoms/Icon.vue";

defineProps({
  navigation: {
    type: Array,
    required: true,
  },
});
</script>
