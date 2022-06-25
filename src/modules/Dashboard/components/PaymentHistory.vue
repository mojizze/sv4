<template>
  <Card title="Payment History">
    <template #header>
      <div class="flex items-center justify-start">
        <div class="mr-8 hidden items-center justify-start lg:flex">
          <div class="mr-2 w-13 border-2 border-[#F1F7FA]"></div>
          <p class="inline text-gray3">Previous month</p>
        </div>
        <div class="flex items-center justify-start rounded bg-[#F1F7FA] p-2">
          <p class="mr-2.5 text-sm text-black1">June 2020</p>
          <Icon name="calendar" class="" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="grid h-full place-items-center sm:-mt-4">
        <div class="text-center">
          <Icon name="emptyFile" class="mx-auto h-[116px] w-[116px]" />
          <p class="mt-2 text-sm font-bold text-black5">No record to display</p>
          <p class="mt-2 text-xs text-gray2">
            Click on send payment to make payment
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/components/atoms/Card.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>
