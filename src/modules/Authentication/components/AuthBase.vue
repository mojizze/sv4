<template>
  <div class="flex h-screen w-full overflow-hidden">
    <div
      class="sp-base-container hidden flex-col space-y-10 overflow-hidden bg-[#F1FAF9] py-7 px-12 lg:flex"
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
              <h2
                class="mt-4 px-20 text-center text-sm leading-[20px] text-black1"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </h2>
            </div>
          </div>
        </slot>
      </div>
    </div>
    <div class="sp-base-content flex flex-1 flex-col overflow-auto py-7">
      <div
        class="mx-auto flex min-h-0 w-11/12 flex-1 flex-col lg:w-9/12 xl:w-8/12 2xl:w-7/12"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";

defineProps({ baseImage: { type: String, default: "auth-base" } });
</script>

<style>
.sp-base-container {
  flex: 0 1 45%;
}

.sp-base-content {
  @apply w-full;
}
@media only screen and (min-width: 1024px) {
  .sp-base-content {
    flex: 0 1 55%;
  }
}
</style>
