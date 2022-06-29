<template>
  <TourGuide />
  <AuthenticatedLayout v-if="store.access_token">
    <template #content>
      <RouterView />
    </template>
  </AuthenticatedLayout>
  <RouterView v-else />
</template>

<script setup>
import { RouterView } from "vue-router";
import AuthenticatedLayout from "@/components/organisms/AuthenticatedLayout.vue";
import TourGuide from "@/components/templates/TourGuide.vue";

import { useAuthenticationStore } from "@/modules/Authentication/store";

const store = useAuthenticationStore();
</script>
