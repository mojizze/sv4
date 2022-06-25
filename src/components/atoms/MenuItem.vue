<template>
  <div class="text-base">
    <div class="flex list-none items-center" :class="{ 'space--10': selected }">
      <router-link
        v-if="!menu.children"
        :to="menu.link"
        :id="menu.link"
        :class="['flex flex-1 items-center']"
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
        <slot name="icon" />

        {{ menu.name }}
      </router-link>

      <div
        v-else
        class="flex flex-1 cursor-pointer items-center justify-between"
        @click="setSelectedMenu(menu.name)"
      >
        <div class="flex items-center">
          <slot name="icon" />
          {{ menu.name }}
        </div>
        <Icon
          name="arrow"
          v-if="menu.children"
          class=""
          :class="{ 'rotate-[180deg]': selected !== menu.name }"
        />
      </div>
    </div>
    <div
      v-if="menu.children && selected === menu.name"
      class="my-7 ml-2 flex flex-col space-y-2 border-l border-l-gray5"
    >
      <router-link
        v-for="childMenu in menu.children"
        :to="`/${menu.link}/${childMenu.link}`"
        :key="childMenu.name"
        class="px-3 pb-3 text-sm last:pb-0"
        :exact-active-class="
          menu.link === $route.name
            ? 'border-l-blue border-l  text-blue'
            : 'text-gray2'
        "
        :active-class="
          menu.link === $route.name
            ? 'border-l-blue border-l  text-blue'
            : 'text-gray2'
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
