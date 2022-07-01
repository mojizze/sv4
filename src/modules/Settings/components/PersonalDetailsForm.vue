<template>
  <div class="flex-1 space-y-5 py-5">
    <div class="grid-cols-2 gap-5 lg:grid">
      <TextField
        v-model="form.firstName"
        label="First Name"
        placeholderText="E.g Segun"
      />

      <TextField
        v-model="form.lastName"
        label="Last Name"
        placeholderText="E.g Doe"
      />
    </div>
    <div class="grid-cols-2 gap-5 lg:grid">
      <TextField
        v-model="form.firstName"
        label="First Name"
        placeholderText="E.g Segun"
        isVerifiable
        isVerified
      />

      <TextField
        v-model="form.lastName"
        label="Last Name"
        placeholderText="E.g Doe"
        isVerifiable
      />
    </div>
  </div>
</template>

<script setup>
import TextField from "@components/atoms/TextField.vue";
// import Button from "@components/atoms/Button.vue";
import { ref } from "vue";

const form = ref({});
</script>

<style lang="scss" scoped></style>
