<template>
  <AuthenticatedLayout v-if="store.access_token" />

  <RouterView v-else />
</template>

<script setup>
import { RouterView } from "vue-router";
import AuthenticatedLayout from "@/components/organisms/AuthenticatedLayout.vue";

import { useAuthenticationStore } from "@/modules/Authentication/store";

const store = useAuthenticationStore();
</script>
