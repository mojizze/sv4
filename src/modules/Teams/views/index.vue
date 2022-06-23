<template>
  <AuthenticatedLayout>
    <template #content>
      <div class="flex-1 overflow-auto bg-white">
        <div class="h-[2000px] border">Team</div>
      </div>
    </template>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@components/organisms/AuthenticatedLayout.vue";
</script>

<style lang="scss" scoped></style>
