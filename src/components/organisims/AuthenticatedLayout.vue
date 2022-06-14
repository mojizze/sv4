<template>
  <VOnboardingWrapper
    class="hidden lg:block"
    ref="wrapper"
    :steps="steps"
    :options="options"
  >
    <template #default="{ next, step, exit, isLast }">
      <VOnboardingStep>
        <div class="ml-64 -mt-6 w-[230px] bg-white shadow sm:rounded-lg">
          <div class="px-3 pt-6 pb-4">
            <div class="flex-col items-center justify-between">
              <div v-if="step.content">
                <h3
                  v-if="step.content.title"
                  class="font-bold leading-6 text-black"
                >
                  {{ step.content.title }}
                </h3>
                <div
                  v-if="step.content.description"
                  class="mt-2 max-w-xl text-sm text-gray1"
                >
                  <p>{{ step.content.description }}</p>
                </div>
              </div>
              <div
                class="relative mt-5 flex items-center justify-between space-x-4"
              >
                <button
                  @click="exit"
                  type="button"
                  class="inline-flex items-center justify-center border border-transparent bg-white text-sm font-medium text-gray2"
                >
                  Skip
                </button>
                <button
                  @click="next"
                  type="button"
                  class="inline-flex items-center rounded border border-transparent bg-blue px-4 py-1 text-sm font-medium text-white shadow-sm"
                >
                  {{ isLast ? "Finish" : "Next" }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </VOnboardingStep>
    </template>
  </VOnboardingWrapper>

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
        <TopNavigation @displayMenu="visible = true" :page="$route.meta.name" />
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  VOnboardingWrapper,
  VOnboardingStep,
  useVOnboarding,
} from "v-onboarding";
import "v-onboarding/dist/style.css";
import SideNavigation from "@/components/molecules/SideNavigation.vue";
import TopNavigation from "@/components/molecules/TopNavigation.vue";
import FloatingPanel from "@/components/atoms/FloatingPanel.vue";
import { onMounted, ref } from "vue";
import Icon from "@/components/atoms/Icon.vue";

const visible = ref(false);

const steps = [
  {
    attachTo: { element: "#dashboard" },
    content: {
      title: "Dashboard",
      description:
        "Lorem ipsum dolor sit amet, conse, ctetur adipiscing elit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  },
];

const options = {
  disableOverlay: true,
};

const wrapper = ref(null);
const { start } = useVOnboarding(wrapper);

onMounted(() => {
  if (window.innerWidth >= 1024) {
    start();
  }
});
</script>
