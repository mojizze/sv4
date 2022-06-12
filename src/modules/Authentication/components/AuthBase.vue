<template>
  <div class="relative flex h-full w-full">
    <div
      class="hidden h-full w-[644px] bg-[#F1FAF9] py-3.5 pl-[123px] pr-10 lg:block"
    >
      <span
        class="absolute inset-0 top-7.5 left-[123px] block text-xl font-bold text-blue"
        >Logo</span
      >
      <main class="grid h-full place-items-center">
        <div>
          <slot name="info">
            <Icon name="auth-base" />
            <div class="mt-20">
              <h1
                class="text-center text-[32px] font-bold leading-[35px] text-black1"
              >
                Dont Ever Miss A Payment
              </h1>
              <h2 class="mt-4 text-center text-sm leading-[20px] text-black1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </h2>
            </div>
          </slot>
        </div>
      </main>
    </div>
    <div class="w-4/6">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";
</script>
