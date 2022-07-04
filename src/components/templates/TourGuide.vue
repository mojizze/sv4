<template>
  <VOnboardingWrapper
    class="hidden lg:block"
    ref="wrapper"
    :steps="steps"
    :options="options"
  >
    <template #default="{ next, step, exit, isLast }">
      <VOnboardingStep>
        <div
          class="z-20 w-[230px] bg-white shadow sm:rounded-lg"
          :class="[
            step.content.title === 'Make Payment'
              ? 'mt-2 ml-10'
              : '-mt-6 ml-58 2xl:ml-74',
          ]"
        >
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
                  v-if="!isLast"
                  @click="next"
                  type="button"
                  class="inline-flex items-center rounded border border-transparent bg-blue py-1 px-4 text-sm font-medium text-white shadow-sm"
                >
                  Next
                </button>
                <button
                  v-else
                  @click="[finishTour(), exit()]"
                  type="button"
                  class="inline-flex items-center rounded border border-transparent bg-blue py-1 px-4 text-sm font-medium text-white shadow-sm"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      </VOnboardingStep>
    </template>
  </VOnboardingWrapper>
</template>

<script setup>
import {
  VOnboardingWrapper,
  VOnboardingStep,
  useVOnboarding,
} from "v-onboarding";
import { onMounted, ref } from "vue";
import { useAuthenticationStore } from "@/modules/Authentication/store";
const steps = [
  {
    attachTo: { element: "#dashboard" },
    content: {
      title: "Dashboard",
      description:
        "Lorem ipsum dolor sit amet, conse, ctetur adipiscing elit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  },
  {
    attachTo: { element: "#statements" },
    content: {
      title: "Statements",
      description:
        "Lorem ipsum dolor sit amet, conse, ctetur adipiscing elit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  },
  {
    attachTo: { element: "#payments" },
    content: {
      title: "Payments",
      description:
        "Lorem ipsum dolor sit amet, conse, ctetur adipiscing elit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  },
  {
    attachTo: { element: "#collections" },
    content: {
      title: "Collections",
      description:
        "Lorem ipsum dolor sit amet, conse, ctetur adipiscing elit ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    },
  },
  {
    attachTo: { element: "#makePayment" },
    content: {
      title: "Make Payment",
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
const store = useAuthenticationStore();

async function finishTour() {
  await store.tourCompleted();
  await store.fetchUserProfile();
}

onMounted(() => {
  const data = JSON.parse(localStorage.getItem("AuthenticationStore"));

  if (window.innerWidth >= 1024 && !data?.user?.tourCompleted) {
    start();
  }
});
</script>
