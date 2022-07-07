<template>
  <FloatingPanel
    :model-value="visible"
    @visible:update="$emit('visible:update')"
  >
    <template #content>
      <div class="mt-10 flex justify-start p-2 lg:mt-20">
        <ul
          class="h-22.5 w-2/6 cursor-pointer border-l border-gray5 text-gray2"
        >
          <li
            @click="() => (tabView = 'single')"
            :class="
              tabView === 'single'
                ? 'border-l border-blue font-bold text-blue'
                : ''
            "
            class="block h-[25px] pl-3"
          >
            Single Payment
          </li>
          <li
            @click="() => (tabView = 'bulk')"
            :class="
              tabView === 'bulk'
                ? 'border-l border-blue font-bold text-blue'
                : ''
            "
            class="mt-9 h-[25px] pl-3"
          >
            Bulk Payment
          </li>
        </ul>
        <div class="w-4/6 pr-12">
          <div class="space-y-5 text-center">
            <el-avatar :size="56">
              <Icon name="user" />
            </el-avatar>
            <div class="text-lg font-semibold text-black1">Bulk Payment</div>
          </div>
          <form @submit.prevent class="mt-6 space-y-6">
            <SelectField
              class="w-full"
              :options="[]"
              placeholder="Select Payment Category"
              display-property="name"
              value-property="name"
              v-model="bulkForm.categoryId"
            />

            <TextField
              type="tel"
              v-model="bulkForm.source"
              label="Fund Source"
              placeholderText="Select Text"
            />

            <TextField
              type="tel"
              v-model="bulkForm.memo"
              label="Memo"
              placeholderText="Enter Memo"
            />

            <div>
              <label class="text-xs">Transcript Type</label>
              <div class="flex justify-start">
                <CheckField
                  v-model="bulkForm.transaction_type"
                  :value="1"
                  class="mr-3"
                  type="radio"
                  label="Instant"
                />
                <CheckField
                  v-model="bulkForm.transaction_type"
                  :value="2"
                  type="radio"
                  label="Schedule"
                />
              </div>
            </div>

            <CheckBox
              v-model="isRecurring"
              value="true"
              class="text-sm"
              label="This is a recurring payment"
            />
            <div class="space-y-5">
              <SelectField
                class="w-full"
                :options="[]"
                label="Frequency"
                placeholder="Select Payment Category"
                display-property="name"
                value-property="name"
                v-model="bulkForm.categoryId"
              />
              <div class="flex justify-start">
                <div class="mr-3 w-2/4">
                  <Calendar
                    v-model="bulkForm.start_date"
                    label="Start Date"
                    class="w-full"
                  />
                </div>
                <div class="w-2/4">
                  <Calendar
                    v-model="bulkForm.end_date"
                    label="End Date"
                    class="w-full"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </template>
  </FloatingPanel>
</template>

<script setup>
import { computed, ref } from "vue";
import FloatingPanel from "@/components/molecules/FloatingPanel.vue";
import Icon from "@/components/atoms/Icon.vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import TextField from "../../../components/atoms/TextField.vue";
import CheckField from "../../../components/atoms/CheckField.vue";
import CheckBox from "../../../components/atoms/CheckBox.vue";
import Calendar from "@/components/molecules/Calendar.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["visible:update"]);

const tabView = ref("single");
const isRecurring = ref(false);

const bulkForm = ref({
  categoryId: null,
  source: null,
  memo: null,
  transaction_type: null,
  start_date: null,
  end_date: null,
});

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});
</script>
