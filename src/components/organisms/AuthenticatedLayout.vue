<template>
  <TourGuide />

  <div class="relative flex h-screen w-full flex-col overflow-hidden">
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

    <div class="flex h-full flex-1 items-start justify-start overflow-hidden">
      <div
        v-if="visible"
        :class="[
          'fixed top-0 left-0 z-[99999] h-full w-full bg-black4/40 lg:hidden lg:w-fit',
        ]"
      >
        <Transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <SideNavigation @close="visible = false" />
        </Transition>
      </div>

      <SideNavigation class="hidden lg:flex" />

      <div
        class="flex h-full min-h-0 w-full flex-col space-y-5 overflow-auto bg-[#F1FAF9] py-6 pr-5 pl-6 lg:flex-1"
      >
        <TopNavigation @displayMenu="visible = true" :page="$route.meta.name" />

        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from "@/components/molecules/SideNavigation.vue";
import TopNavigation from "@/components/molecules/TopNavigation.vue";
import TourGuide from "@/components/templates/TourGuide.vue";
import { ref, computed } from "vue";
import Icon from "@/components/atoms/Icon.vue";
import { MenuIcon } from "@heroicons/vue/solid";
import { MenuDetails, OtherMenuDetails } from "@/helpers/Navigation";
import { find } from "lodash";
import { useRoute } from "vue-router";

const visible = ref(false);
const route = useRoute();
const currentMenu = computed(() => {
  console.log("route=====>>>>", route.meta);
  return find([...MenuDetails, ...OtherMenuDetails], { link: route.name });
});
</script>
