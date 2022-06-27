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
              <TextField
                v-model="form.uid"
                label="Email"
                placeholderText="E.g name@domain.com"
                :error-text="v$.uid.$errors[0] && v$.uid.$errors[0].$message"
              />
              <div class="space-y-10 pt-10">
                <Button
                  label="Continue"
                  :loading="loading"
                  class="w-full"
                  @click="submit"
                />
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
import { useAuthenticationStore } from "@/modules/Authentication/store";
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useToast } from "vue-toastification";

const { push } = useRouter();
const loading = ref(false);
const form = ref({
  uid: null,
});
const store = useAuthenticationStore();
const toast = useToast();
const rules = {
  uid: { required, email },
};
const v$ = useVuelidate(rules, form);

const submit = async () => {
  loading.value = true;
  try {
    const result = await v$.value.$validate();
    if (result) {
      await store.requestForResetOTP(form.value);
      toast.success("Check your email for an OTP");
      await push("/set-password");
    }
    loading.value = false;
  } catch (e) {
    loading.value = false;
    toast.error(
      e?.message ? e?.message : "Login was not successful, pleas try again."
    );
  }
};
</script>
