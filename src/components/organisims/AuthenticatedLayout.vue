<template>
  <FloatingPanel
    class="w-full"
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
      <SideNavigation class="p-4" />
    </template>
  </FloatingPanel>

  <div class="relative h-full w-full">
    <div class="flex h-full justify-start overflow-hidden p-2">
      <SideNavigation class="mr-6 hidden w-55 lg:block" />
      <div class="h-full w-full overflow-scroll bg-[#F1FAF9] p-6 lg:flex-1">
        <TopNavigation @displayMenu="visible = true" />
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideNavigation from "@/components/molecules/SideNavigation.vue";
import TopNavigation from "@/components/molecules/TopNavigation.vue";
import FloatingPanel from "@/components/atoms/FloatingPanel.vue";
import { ref } from "vue";
import Icon from "@/components/atoms/Icon.vue";

const visible = ref(false);
</script>
