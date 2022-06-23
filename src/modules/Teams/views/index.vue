<template>
  <AuthenticatedLayout>
    <template #content>
      <div class="flex flex-1 flex-col overflow-auto bg-white">
        <div>Tab</div>

        <!-- <Tab
          :tabs="tabLabels"
          :selected="currentBankTab"
          @update:currentTab="(value) => (currentTab = value)"
        />
        <Table /> -->
        <div class="flex-1 overflow-auto border">
          <div class="h-[2000px]">Table</div>
        </div>
      </div>
    </template>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@components/organisms/AuthenticatedLayout.vue";
</script>

<style lang="scss" scoped></style>
