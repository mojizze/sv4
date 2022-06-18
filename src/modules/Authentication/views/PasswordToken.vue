<template>
  <AuthBase baseImage="password-base">
    <template #info>
      <div class="w-4/5 space-y-10 bg-white p-14">
        <div
          v-for="({ icon, title, description }, index) in sideList"
          :key="index"
          class="space-y-2"
        >
          <div
            class="flex items-center space-x-2 text-lg font-semibold text-black1"
          >
            <Icon :name="icon" />
            <div>{{ title }}</div>
          </div>
          <div>
            {{ description }}
          </div>
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex min-h-0 flex-1 flex-col space-y-15 py-5 lg:py-16">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="mx-auto flex flex-col space-y-10 lg:w-3/4">
            <Header
              title="Verify Account"
              :subtitle="subtitle"
              class="pr-24"
              goBack
            />
            <div class="space-y-3">
              <CodeInput
                :fields="3"
                :fieldWidth="56"
                :fieldHeight="56"
                :required="true"
              />

              <div class="space-y-10 pt-10">
                <Button label="Continue" class="w-full" @click="submit" />
                <div class="text-center">
                  New user?
                  <Button
                    label="Create Account"
                    ghost
                    underline
                    class="text-blue"
                    @click="$router.push('/register')"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AuthBase>
</template>

<script setup>
import AuthBase from "../components/AuthBase.vue";
import Header from "../components/Header.vue";
import CodeInput from "../components/CodeInput.vue";
import Button from "@components/atoms/Button.vue";
import Icon from "@components/atoms/Icon.vue";
import { ref, computed } from "vue";
import router from "@router/index.js";

const formData = ref({});

const subtitle = computed(() => {
  return `We sent a 5-digit code to qonyekachi@gmail.com. Enter code below to verify your account`;
});

const sideList = [
  {
    icon: "verify-receive",
    title: "Receive Payment",
    description:
      "Create payment links for your products, send to customers and receive instant payment.",
  },
  {
    icon: "verify-invoice",
    title: "Create Invoices",
    description:
      "Create payment links for your products, send to customers and receive instant payment.",
  },
  {
    icon: "verify-settlement",
    title: "Instant Settlement",
    description:
      "Create payment links for your products, send to customers and receive instant payment.",
  },
  {
    icon: "verify-bulk",
    title: "Bulk Payment",
    description:
      "Create payment links for your products, send to customers and receive instant payment.",
  },
];

const submit = () => {
  console.log(formData.value);
  router.push("/password-reset-success");
};
</script>
