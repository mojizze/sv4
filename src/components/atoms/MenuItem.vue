<template>
  <div class="mb-6">
    <div class="mb-4 flex list-none items-center justify-between">
      <div class="flex items-center justify-start">
        <slot name="icon" />
        <router-link
          v-if="!menu.children"
          :to="menu.link"
          :id="menu.link"
          :class="{ 'ml-2.5': menu.icons }"
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
        >
          {{ menu.name }}
        </router-link>
        <slot v-else name="parent"></slot>
      </div>
      <slot name="chevron-icon" />
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
defineProps({
  menu: {
    type: Object,
    required: true,
  },
  selected: {
    type: String,
    default: "",
  },
});
</script>
