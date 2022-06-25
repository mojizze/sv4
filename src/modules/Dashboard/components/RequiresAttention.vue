<template>
  <Card title="Requires Attention" class="lg:overflow-auto">
    <template #header>
      <span class="cursor-pointer text-xs font-bold text-blue lg:text-sm"
        >View All</span
      >
    </template>
    <template #content>
      <div class="my-8 flex items-center justify-between">
        <p class="text-sm text-black1">Today</p>
        <div class="flex items-center justify-start">
          <span
            class="mr-2 block rounded-lg bg-blue/20 py-0.5 px-3.5 text-center text-sm"
            >0</span
          >
          <Icon name="arrowLeft" class="h-5 w-5 rotate-[180deg]" />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <p class="text-sm text-black1">Older</p>
        <div class="flex items-center justify-start">
          <span
            class="mr-2 block rounded-lg bg-blue/20 py-0.5 px-3.5 text-center text-sm"
            >0</span
          >
          <Icon name="arrowLeft" class="h-5 w-5 rotate-[180deg]" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/atoms/Card.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>
