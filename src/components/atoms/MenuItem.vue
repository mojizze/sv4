<template>
  <div class="text-base">
    <div class="flex list-none items-center" :class="{ 'space--10': selected }">
      <router-link
        v-if="!menu.children"
        :to="menu.link"
        :id="menu.name.toLowerCase()"
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
        @click="$emit('setSelectedMenu', menu.name)"
      >
        <slot name="icon" />

        {{ menu.name }}
      </router-link>

      <div
        v-else
        :id="menu.name.toLowerCase()"
        class="flex flex-1 cursor-pointer items-center justify-between"
        @click="$emit('setSelectedMenu', menu.name)"
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
import Icon from "../atoms/Icon.vue";

defineProps({
  menu: {
    type: Object,
    required: true,
  },
  selected: {
    type: String,
    required: "",
  },
});
</script>
