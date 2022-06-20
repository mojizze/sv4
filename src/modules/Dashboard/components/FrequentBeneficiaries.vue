<template>
  <Card title="Frequent Beneficiaries" class="relative w-full">
    <template #content>
      <div class="mt-4 grid h-full place-items-center lg:-mt-2">
        <div class="text-center">
          <Icon name="emptyFile" class="mx-auto h-[116px] w-[116px]" />
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
