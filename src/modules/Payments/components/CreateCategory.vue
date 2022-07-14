<template>
  <FloatingPanel
    @visible:update="$emit('visible:update')"
    :model-value="visible"
  >
    <template #content>
      <div
        class="relative flex w-full flex-col items-center justify-center justify-items-center space-y-5 p-10"
      >
        <div class="grid justify-items-center">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-full bg-[#C2E2FF]"
          >
            <Icon name="add" class="h-6 w-6 text-blue" />
          </div>
          <span class="mt-2 font-medium text-black1">Add Payment Category</span>
        </div>

        <div class="w-full space-y-6">
          <TextField
            v-model="form.name"
            label="Name"
            placeholderText="E.g Salary Band 1"
            :error-text="v$.name.$errors[0] && v$.name.$errors[0].$message"
          />

          <TextField
            v-model="form.description"
            label="Description"
            placeholderText="E.g Salary for Band A Guys"
            :error-text="
              v$.description.$errors[0] && v$.description.$errors[0].$message
            "
          />
          <div class="space-y-6 divide-y-2 divide-gray7">
            <p class="font-medium text-black1">Add Payments Details</p>
            <div class="space-y-6">
              <div class="mt-6 flex justify-between">
                <div
                  :class="[
                    view === 'beneficiary'
                      ? 'border-blue text-blue'
                      : 'border-gray5',
                  ]"
                  class="cursor-pointer rounded-lg border px-6 py-3 text-xs"
                  @click="() => (view = 'beneficiary')"
                >
                  Select Form Beneficiaries
                </div>
                <div
                  :class="[
                    view === 'upload'
                      ? 'border-blue text-blue'
                      : 'border-gray5',
                  ]"
                  class="cursor-pointer rounded-lg border px-4 py-3 text-xs"
                  @click="() => (view = 'upload')"
                >
                  Upload CSV
                </div>
              </div>
            </div>
          </div>

          <div class="flex w-full flex-col items-center">
            <Button @click="submit" label="Save Details" class="text-sm" />
          </div>
        </div>
      </div>
    </template>
  </FloatingPanel>
</template>

<script setup>
import FloatingPanel from "@/components/molecules/FloatingPanel.vue";
import Icon from "@/components/atoms/Icon.vue";
import TextField from "@/components/atoms/TextField.vue";
// import SelectField from "@/components/atoms/SelectField.vue";
import { required } from "@vuelidate/validators";
import Button from "@/components/atoms/Button.vue";
import { computed, ref } from "vue";
import useVuelidate from "@vuelidate/core";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["visible:update"]);

const form = ref({
  name: null,
  description: null,
});

const rules = {
  name: { required },
  description: { required },
};

const v$ = useVuelidate(rules, form);

const view = ref("beneficiary");

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});

const submit = () => {};
</script>
