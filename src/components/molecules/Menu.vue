<template>
  <div class="z-30 space-y-4">
    <MenuItem
      @setSelectedMenu="setSelectedMenu"
      v-for="menu in navigation"
      :key="menu.name"
      :menu="menu"
      :selected="selected"
    >
      <template v-if="menu.icon" #icon>
        <Icon
          class="mr-2.5 h-5 w-5"
          :class="[
            $route.path.includes(menu.link) ? 'text-blue' : 'text-gray3',
          ]"
          :name="menu.icon"
        />
      </template>
    </MenuItem>
  </div>
</template>

<script setup>
import MenuItem from "@/components/atoms/MenuItem.vue";
import Icon from "../atoms/Icon.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

defineProps({
  navigation: {
    type: Array,
    required: true,
  },
});

const selected = ref("");

const setSelectedMenu = (name) => {
  if (selected.value === name) {
    selected.value = "";
  } else {
    selected.value = name.toLowerCase();
  }
};

const route = useRoute();

onMounted(() => {
  const currentRoute = route.path.split("/");
  selected.value = currentRoute[1].toLowerCase();
});
</script>
