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
          <div class="text-base">
            {{ description }}
          </div>
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-1 items-center justify-center px-10 py-5">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="flex flex-col space-y-10">
            <div class="mb-15">
              <Button
                icon="arrowLeft"
                label="Go Back"
                ghost
                @click="$router.back()"
              />
            </div>
            <div class="space-y-1">
              <div class="text-xl font-semibold text-black1 2xl:text-2xl">
                Verify Account
              </div>
              <div>
                We sent a 5-digit code to
                <span
                  class="text-lg font-semibold text-black1 underline underline-offset-2"
                  >{{
                    !verifyWithEmail
                      ? authenticationStore.email
                      : authenticationStore.phone
                  }}</span
                >. Enter code below to verify your account.
              </div>
            </div>
            <div>
              <Button
                label="Request Voice Call"
                ghost
                underline
                class="font-semibold text-blue"
              />
            </div>
            <div class="space-y-3">
              <CodeInput
                :fields="3"
                :fieldWidth="56"
                :fieldHeight="56"
                :required="true"
              />

              <div class="space-y-10 pt-10">
                <div class="text-center">
                  Didn’t get code yet?
                  <span class="text-green1 underline underline-offset-2"
                    >00:30 sec</span
                  >
                </div>
                <div class="text-center">
                  <Button
                    :label="`Verify With ${
                      verifyWithEmail ? 'Email Address' : 'Phone Number'
                    } Instead`"
                    ghost
                    underline
                    class="font-semibold text-blue"
                    @click="verifyWithEmail = !verifyWithEmail"
                  />
                </div>
                <Button label="Verify Account" class="w-full" @click="submit" />
                <div class="text-center">
                  New user?
                  <Button
                    label="Create Account"
                    ghost
                    underline
                    class="text-blue"
                    @click="$router.push('register')"
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
import CodeInput from "../components/CodeInput.vue";
import Button from "@components/atoms/Button.vue";
import Icon from "@components/atoms/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthenticationStore } from "@/modules/Authentication/store";

const authenticationStore = useAuthenticationStore();

const { push } = useRouter();
const formData = ref({});
const verifyWithEmail = ref(true);

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
  push("/password-reset-success");
};
</script>
