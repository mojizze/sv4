<template>
  <AuthBase>
    <template #content>
      <div class="flex min-h-0 flex-1 flex-col space-y-20 py-5 lg:py-16">
        <div class="flex justify-center">
          <Button
            label="Individual"
            @click="accountType = 'individual'"
            size="small"
            type="light"
            :ghost="accountType !== 'individual'"
            class="py-3 px-7"
            :class="{
              'font-bold text-blue': accountType === 'individual',
              'font-normal text-gray1': accountType !== 'individual',
            }"
          />
          <Button
            label="Corporate"
            @click="accountType = 'corporate'"
            size="small"
            type="light"
            :ghost="accountType !== 'corporate'"
            class="py-3 px-7"
            :class="{
              'font-bold text-blue': accountType === 'corporate',
              'font-normal text-gray1': accountType !== 'corporate',
            }"
          />
        </div>
        <div class="flex-1 overflow-auto">
          <div class="space-y-10 px-10">
            <Header
              title="Sign Up to SoftPay"
              subtitle="Provide details that match with a valid business document."
            />
            <div class="space-y-3 text-black1">
              <div class="grid-cols-2 gap-5 lg:grid">
                <TextField
                  :class="{ hidden: accountType === 'corporate' }"
                  v-model="form.firstName"
                  label="First Name"
                  placeholderText="E.g Segun"
                  :error-text="
                    individualValidation.firstName.$errors[0] &&
                    individualValidation.firstName.$errors[0].$message
                  "
                />

                <TextField
                  :class="{ hidden: accountType === 'corporate' }"
                  v-model="form.lastName"
                  label="Last Name"
                  placeholderText="E.g Doe"
                  :error-text="
                    individualValidation.lastName.$errors[0] &&
                    individualValidation.lastName.$errors[0].$message
                  "
                />
              </div>
              <TextField
                :class="{ hidden: accountType === 'individual' }"
                v-model="form.name"
                label="Business Name"
                placeholderText="E.g Global Motors Inc"
                :error-text="
                  corporateValidation.name.$errors[0] &&
                  corporateValidation.name.$errors[0].$message
                "
              />

              <TextField
                :class="{ hidden: accountType === 'individual' }"
                v-model="form.address"
                label="Business Address"
                placeholderText="E.g Global Motors Inc"
                :error-text="
                  corporateValidation.address.$errors[0] &&
                  corporateValidation.address.$errors[0].$message
                "
              />

              <TextField
                v-model="form.email"
                label="Email"
                placeholderText="E.g name@domain.com"
                :error-text="
                  commonValidation.email.$errors[0] &&
                  commonValidation.email.$errors[0].$message
                "
              />

              <TextField
                label="Business RcNo"
                v-model="form.rcNo"
                placeholderText="E.g SoftPay Limited"
                :class="{ hidden: accountType === 'individual' }"
                :error-text="
                  corporateValidation.rcNo.$errors[0] &&
                  corporateValidation.rcNo.$errors[0].$message
                "
              />

              <div :class="{ hidden: accountType === 'individual' }">
                <label class="text-xs text-gray1"
                  >Business Type
                  <SelectField
                    class="w-full"
                    :search="true"
                    :options="commonStore.allIndustries"
                    display-property="name"
                    value-property="name"
                    v-model="form.sector"
                    @optionsFilter="
                      (search) => commonStore.optionsFilter(search)
                    "
                    :error-text="
                      corporateValidation.sector.$errors[0] &&
                      corporateValidation.sector.$errors[0].$message
                    "
                  />
                </label>
              </div>
              <div :class="{ hidden: accountType === 'individual' }">
                <label class="text-xs text-gray1"
                  >State
                  <SelectField
                    class="w-full"
                    :options="commonStore.allStates"
                    display-property="name"
                    value-property="name"
                    v-model="form.state"
                    :error-text="
                      corporateValidation.state.$errors[0] &&
                      corporateValidation.sector.$errors[0].$message
                    "
                  />
                </label>
              </div>
              <div :class="{ hidden: accountType === 'individual' }">
                <label class="text-xs text-gray1"
                  >LGA
                  <SelectField
                    class="w-full"
                    :options="lgas"
                    display-property="name"
                    value-property="name"
                    v-model="form.lga"
                    :error-text="
                      corporateValidation.lga.$errors[0] &&
                      corporateValidation.lga.$errors[0].$message
                    "
                  />
                </label>
              </div>
              <TextField
                type="tel"
                v-model="form.phone"
                label="Phone Number"
                placeholderText="E.g 08090008900"
                :error-text="
                  commonValidation.phone.$errors[0] &&
                  commonValidation.phone.$errors[0].$message
                "
              />
              <div>
                <TextField
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  placeholderText="***************"
                  @toggle-password-visibility="showPassword = !showPassword"
                  suffixIcon="eyeShow"
                  v-model="form.password"
                  :error-text="
                    commonValidation.password.$errors[0] &&
                    commonValidation.password.$errors[0].$message
                  "
                />
                <div class="mt-2 space-x-5 text-xs">
                  <span class="inline-flex items-center space-x-2">
                    <Icon
                      name="checkBlack"
                      :class="[
                        eightCharacterLong ? 'fill-success' : 'fill-error',
                      ]"
                    />
                    <span
                      :class="[
                        eightCharacterLong ? 'text-success' : 'text-error',
                      ]"
                      >at least 8 characters long</span
                    >
                  </span>
                  <span class="inline-flex items-center space-x-2">
                    <Icon
                      name="checkBlack"
                      :class="[
                        atLeastOneNumber ? 'fill-success' : 'fill-error',
                      ]"
                    />
                    <span
                      :class="[
                        atLeastOneNumber ? 'text-success' : 'text-error',
                      ]"
                      >at least 1 number</span
                    >
                  </span>
                </div>
              </div>
            </div>
            <div class="space-y-10">
              <CheckBox
                v-model="form.confirm"
                class="text-base"
                label="I confirm that the details provided match my business details and agree to the User Agreement and Privacy Policy"
              />
              <Button
                label="Continue"
                :disabled="!canSubmit"
                class="w-full"
                @click="submit"
              />
              <div class="text-center">
                Already have an account?
                <Button
                  label="Sign in"
                  ghost
                  class="text-blue"
                  underline
                  @click="$router.push('/login')"
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
import SelectField from "../../../components/atoms/SelectField.vue";
import Icon from "../../../components/atoms/Icon.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import { ref, watch, computed, onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
import { useAuthenticationStore } from "@/modules/Authentication/store";
import { useCommonStore } from "@/modules/Common/store";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const accountType = ref("individual");
const showPassword = ref(false);
const eightCharacterLong = ref(false);
const atLeastOneNumber = ref(false);
const authenticationStore = useAuthenticationStore();
const commonStore = useCommonStore();
const toast = useToast();
const { push } = useRouter();
const loading = ref(false);

const form = ref({
  firstName: "",
  lastName: "",
  name: "",
  address: "",
  password: "",
  email: "",
  phone: "",
  confirm: false,
  sector: "",
  rcNo: "",
  state: "",
  lga: "",
});

const rules = {
  password: { required },
  phone: { required },
  email: { required, email },
};

const individualRules = {
  firstName: { required },
  lastName: { required },
};

const corporateRules = {
  name: { required },
  address: { required },
  sector: { required },
  state: { required },
  lga: { required },
  rcNo: { required, numeric },
};

const individualValidation = useVuelidate(individualRules, form);
const corporateValidation = useVuelidate(corporateRules, form);
const commonValidation = useVuelidate(rules, form);

const lgas = computed(() => {
  const state = commonStore.stateLgas(form.value.state);
  return state?.lgas.map((lga) => {
    return { name: lga };
  });
});

const submit = async () => {
  loading.value = true;
  try {
    const commonResult = await commonValidation.value.$validate();
    const result =
      accountType.value === "individual"
        ? await individualValidation.value.$validate()
        : await corporateValidation.value.$validate();

    if (result && commonResult) {
      if (accountType.value === "individual") {
        await authenticationStore.register(form.value);
      } else {
        await authenticationStore.createBusiness(form.value);
      }
      toast.success("Account successfully created");
      authenticationStore.email = form.value.email;
      authenticationStore.phone = form.value.phone;
      await push("/password-token");
    } else {
      loading.value = false;

      const div = document.querySelector(".sp-register");
      console.log(div);
      div.scrollTo(0, 200);
    }
  } catch (e) {
    loading.value = false;
    console.log(e?.message || e);
  }
};

watch(
  form,
  (value) => {
    eightCharacterLong.value = value.password.length > 7;
    atLeastOneNumber.value = /\d/.test(value.password);
  },
  { deep: true }
);

onMounted(async () => {
  await commonStore.fetchStates();
  await commonStore.fetchIndustries();
});
</script>
