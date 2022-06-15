<template>
  <div class="z-30">
    <MenuItem
      v-for="menu in navigation"
      :key="menu.name"
      :menu="menu"
      :selected="selected"
    >
      <template v-if="menu.icon" #icon>
        <Icon
          class="mr-2.5 h-5 w-5"
          :class="{ 'text-blue': menu.link === $route.name }"
          :name="menu.icon"
        />
      </template>
      <template #parent>
        <span class="cursor-pointer" @click="setSelectedMenu(menu.name)">{{
          menu.name
        }}</span>
      </template>
      <template #chevron-icon>
        <Icon
          name="arrow"
          @click="setSelectedMenu(menu.name)"
          v-if="menu.children"
          class="mr-4 cursor-pointer"
          :class="{ 'rotate-[180deg]': selected !== menu.name }"
        />
      </template>
    </MenuItem>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuItem from "@/components/atoms/MenuItem.vue";
import Icon from "../atoms/Icon.vue";

defineProps({
  navigation: {
    type: Array,
    required: true,
  },
});

const selected = ref("");

function setSelectedMenu(name) {
  if (selected.value === name) {
    selected.value = "";
  } else {
    selected.value = name;
  }
}
</script>
