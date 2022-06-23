<template>
  <TourGuide />

  <FloatingPanel
    class="h-full"
    :modelValue="visible"
    classes="w-[220px]"
    @update:modelValue="() => (visible = false)"
  >
    <template #close>
      <Icon
        name="close"
        @click="visible = false"
        class="absolute top-2 right-2 z-30 cursor-pointer"
      />
    </template>
    <template #content>
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <SideNavigation class="p-4" />
      </Transition>
    </template>
  </FloatingPanel>

  <div class="relative h-screen w-full overflow-hidden">
    <div
      class="ml-4 flex h-15 w-full items-center justify-start bg-white lg:hidden"
    >
      <MenuIcon
        @click="() => (visible = true)"
        class="mr-6 h-6 w-6 cursor-pointer"
      />
      <div
        class="flex items-center justify-start border-l border-l-gray3 pl-6 text-blue"
      >
        <Icon :name="currentMenu.icon" />
        <span class="ml-2.5 block">{{ currentMenu.name }}</span>
      </div>
    </div>

    <div class="flex h-full items-start justify-start overflow-hidden">
      <SideNavigation class="hidden w-55 lg:block" />
      <div
        class="h-[calc(100%_-_60px)] min-h-0 w-full overflow-hidden bg-[#F1FAF9] py-6 pr-5 pl-6 lg:h-full lg:flex-1"
      >
        <TopNavigation @displayMenu="visible = true" :page="$route.meta.name" />
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from "@/components/molecules/SideNavigation.vue";
import TopNavigation from "@/components/molecules/TopNavigation.vue";
import FloatingPanel from "@/components/atoms/FloatingPanel.vue";
import TourGuide from "@/components/templates/TourGuide.vue";
import { ref, computed } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import { MenuIcon } from "@heroicons/vue/solid";
import { MenuDetails } from "@/helpers/Navigation";
import { find } from "lodash";
import { useRoute } from "vue-router";

const visible = ref(false);
const route = useRoute();
const currentMenu = computed(() => {
  return find(MenuDetails, { link: route.name });
});
</script>
