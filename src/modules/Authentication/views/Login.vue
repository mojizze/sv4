<template>
  <AuthBase>
    <template #content>
      <div class="flex flex-1 items-center justify-center px-10 py-5">
        <div class="flex w-full flex-col space-y-10">
          <Header
            title="Login To SoftPay"
            subtitle="Enter login detail to access account."
          />
          <div class="space-y-3">
            <TextField
              v-if="showPhoneNumber"
              type="tel"
              label="Phone Number"
              v-model="formData.email"
              placeholderText="E.g 08090008900"
            />
            <TextField
              v-else
              label="Email"
              placeholderText="E.g name@domain.com"
            />
            <Button
              icon="call"
              :label="`Use ${
                !showPhoneNumber ? 'phone number' : 'email address'
              } instead`"
              class="text-xs font-light text-blue decoration-solid"
              size="tiny"
              @click="showPhoneNumber = !showPhoneNumber"
              ghost
            />
            <TextField
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              placeholderText="***************"
              @toggle-password-visibility="showPassword = !showPassword"
              suffixIcon="eyeShow"
              v-model="formData.password"
            />
            <CheckBox
              v-model="formData.confirm"
              class="text-base"
              label="Remember Me"
            />
            <div class="space-y-10 pt-10">
              <div class="text-center">
                Forgot Password?
                <Button
                  label="Reset Password"
                  ghost
                  class="text-blue"
                  underline
                  @click="$router.push('/forgot-password')"
                />
              </div>
              <Button label="Continue" class="w-full" @click="submit" />
              <div class="text-center">
                New user?
                <Button
                  label="Create Account"
                  ghost
                  class="text-blue"
                  underline
                  @click="$router.push('/register')"
                />
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
import CheckBox from "../../../components/atoms/CheckBox.vue";
import { ref } from "vue";
import { useAuthenticationStore } from "@/modules/Authentication/store";

const showPhoneNumber = ref(false);
const showPassword = ref(false);
const authenticationStore = useAuthenticationStore();

const formData = ref({
  password: "",
  email: "",
  confirm: false,
});

const submit = async () => {
  await authenticationStore.register(formData.value);
  console.log(formData.value);
};
</script>
