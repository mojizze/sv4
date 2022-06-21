<template>
  <AuthBase baseImage="password-base">
    <template #content>
      <div class="flex flex-1 items-center justify-center px-10 py-5">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="flex w-full flex-col space-y-10">
            <Header
              goBack
              title="Reset Password"
              subtitle="Enter your email address to get reset link."
            />
            <div class="space-y-3">
              <TextField label="Email" placeholderText="E.g name@domain.com" />
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
import Button from "@components/atoms/Button.vue";
import TextField from "@components/atoms/TextField.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { push } = useRouter();
const formData = ref({});

const submit = () => {
  console.log(formData.value);
  push("/set-password");
};
</script>
