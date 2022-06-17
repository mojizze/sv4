<template>
  <AuthBase baseImage="password-base">
    <template #content>
      <div class="flex min-h-0 flex-1 flex-col space-y-15 py-5 lg:py-16">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="mx-auto flex flex-col space-y-10 lg:w-3/4">
            <div>
              <Button
                icon="arrowLeft"
                label="Go Back"
                ghost
                class="text-xs"
                size="tiny"
                @click="$router.back()"
              />
            </div>
            <div class="space-y-1">
              <div class="text-2xl font-medium text-black1">Reset Password</div>
              <div>Enter your email address to get reset link.</div>
            </div>
            <div class="space-y-3">
              <TextField label="Email" placeholderText="E.g name@domain.com" />

              <div class="space-y-10 pt-10">
                <Button label="Continue" class="w-full" @click="submit" />
                <div class="text-center">
                  New user?
                  <Button
                    label="Create Account"
                    ghost
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
import Button from "../../../components/atoms/Button.vue";
import TextField from "../../../components/atoms/TextField.vue";
import { ref } from "vue";

const formData = ref({});

const submit = () => {
  console.log(formData.value);
};
</script>
