<template>
  <Card title="Frequent Beneficiaries" class="relative h-[331px] w-full">
    <template #content>
      <div
        class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
      >
        <div class="grid place-items-center">
          <Icon name="emptyFile" class="h-[116px] w-[116px]" />
          <p class="mt-2 text-sm font-bold text-black5">No record to display</p>
          <p class="mt-2 text-xs text-gray2">
            Add Beneficiaries to view list and send payment
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
