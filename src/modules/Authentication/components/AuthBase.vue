<template>
  <div class="flex h-screen w-full">
    <div
      class="hidden w-[644px] flex-col space-y-10 bg-[#F1FAF9] px-12 py-7 lg:flex"
    >
      <span class="left-12 text-xl font-bold text-blue"> Logo </span>

      <div class="flex flex-1 flex-col items-center justify-center space-y-20">
        <slot name="info">
          <Icon :name="baseImage" />

          <div class="w-full">
            <div class="mx-auto w-3/4">
              <h1
                class="text-center text-[32px] font-bold leading-[35px] text-black1"
              >
                Don't Ever Miss A Payment
              </h1>
              <h2 class="mt-4 text-center text-sm leading-[20px] text-black1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </h2>
            </div>
          </div>
        </slot>
      </div>
    </div>
    <div class="flex flex-1 flex-col py-7 px-10 lg:px-12">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";

defineProps({ baseImage: { type: String, default: "auth-base" } });
</script>
