<template>
  <AuthBase baseImage="password-base">
    <template #content>
      <div class="flex flex-1 items-center justify-center px-10 py-5">
        <div
          class="flex min-h-0 flex-1 flex-col items-center justify-center overflow-auto py-5"
        >
          <div class="flex w-full flex-col space-y-10">
            <Header
              title="Set New Password"
              subtitle="Choose a new password to complete process"
            />
            <div class="space-y-3">
              <div>
                <TextField
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholderText="***************"
                  @toggle-password-visibility="showPassword = !showPassword"
                  suffixIcon="eyeShow"
                  v-model="formData.password"
                />
                <div class="mt-1 space-x-5 text-xs">
                  <span class="inline-flex items-center space-x-2">
                    <Icon name="checkBlack" />
                    <span>at least 8 characters long</span>
                  </span>
                  <span class="inline-flex items-center space-x-2">
                    <Icon name="checkBlack" />
                    <span>at least 1 number</span>
                  </span>
                </div>
              </div>
              <TextField
                :type="showPassword ? 'text' : 'password'"
                label="Repeat Password"
                placeholderText="***************"
                v-model="formData.confirm_password"
              />
              <div class="space-y-10 pt-10">
                <Button label="Continue" class="w-full" @click="submit" />
                <div class="text-center">
                  <Button
                    label="Back to Login"
                    ghost
                    underline
                    class="text-blue"
                    @click="$router.push('/login')"
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
import Button from "../../../components/atoms/Button.vue";
import TextField from "../../../components/atoms/TextField.vue";
import Icon from "../../../components/atoms/Icon.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { push } = useRouter();

const showPassword = ref(false);

const formData = ref({
  password: "",
  confirm: false,
});

const submit = () => {
  console.log(formData.value);
  push("/password-token");
};
</script>
