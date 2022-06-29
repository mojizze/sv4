<template>
  <div class="text-base">
    <div class="flex list-none items-center" :class="{ 'space--10': selected }">
      <router-link
        v-if="!menu.children"
        :to="menu.link"
        :id="menu.link"
        :class="['flex flex-1 items-center']"
        :exact-active-class="
          $route.path.includes(menu.link)
            ? 'text-blue font-medium'
            : 'text-gray2 font-normal'
        "
        :active-class="
          $route.path.includes(menu.link)
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
        <div
          class="flex items-center"
          :class="[
            $route.path.includes(menu.link) ? 'text-blue' : 'text-gray2',
          ]"
        >
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
      v-if="menu.children && selected === menu.name.toLowerCase()"
      class="my-7 ml-2 flex flex-col space-y-4 border-l border-l-gray5"
    >
      <router-link
        v-for="childMenu in menu.children"
        :to="`${childMenu.link}`"
        :key="childMenu.name"
        class="px-3 text-sm last:pb-0"
        :exact-active-class="
          childMenu.link === $route.name
            ? 'border-l-blue border-l  text-blue'
            : 'text-gray2'
        "
        :active-class="
          childMenu.link === $route.name
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
import { ref, onMounted } from "vue";
import Icon from "../atoms/Icon.vue";
import { useRoute } from "vue-router";

defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const route = useRoute();

const selected = ref("");

const setSelectedMenu = (name) => {
  if (selected.value === name) {
    selected.value = "";
  } else {
    selected.value = name.toLowerCase();
  }
};

onMounted(() => {
  const currentRoute = route.path.split("/");
  selected.value = currentRoute[1].toLowerCase();
});
</script>
