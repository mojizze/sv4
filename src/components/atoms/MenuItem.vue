<template>
  <div class="text-base">
    <div class="flex list-none items-center" :class="{ 'space--10': selected }">
      <router-link
        :to="
          menu.children ? `/${menu.link}/${menu.children[0].link}` : menu.link
        "
        :id="menu.link"
        :class="['flex flex-1 items-center justify-between']"
        :exact-active-class="
          menu.link === $route.name
            ? 'text-blue font-medium'
            : 'text-gray2 font-normal'
        "
        :active-class="
          menu.link === $route.name
            ? 'text-blue font-medium'
            : 'text-gray2 font-normal'
        "
        @click="setSelectedMenu(menu.name)"
      >
        <div class="flex items-center">
          <slot name="icon" />

          {{ menu.name }}
        </div>
        <Icon
          name="arrow"
          @click="setSelectedMenu(menu.name)"
          v-if="menu.children"
          class=""
          :class="{ 'rotate-[180deg]': selected !== menu.name }"
        />
      </router-link>
    </div>
    <div v-if="menu.children && selected === menu.name" class="flex flex-col">
      <router-link
        v-for="childMenu in menu.children"
        :to="childMenu.link"
        :key="childMenu.name"
        class="border-l border-l-gray5 px-3 pb-3 text-sm last:pb-0"
        :exact-active-class="
          menu.link === $route.name
            ? 'border-l-blue text-blue'
            : 'border-l-gray5 text-gray2'
        "
        :active-class="
          menu.link === $route.name
            ? 'border-l-blue text-blue'
            : 'border-l-gray5 text-gray2'
        "
      >
        <span class="block">{{ childMenu.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "../atoms/Icon.vue";

defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const selected = ref("");

const setSelectedMenu = (name) => {
  if (selected.value === name) {
    selected.value = "";
  } else {
    selected.value = name;
  }
};
</script>
