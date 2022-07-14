<template>
  <PageContentLayout>
    <template #content>
      <FloatingButton @btn:clicked="() => (displayPanel = true)" />
      <CreateBeneficiary
        :model-value="displayPanel"
        @visible:update="() => (displayPanel = false)"
      />

      <div class="flex items-center justify-start p-6 lg:justify-start">
        <TextField
          class="mr-4 w-full lg:w-3/12"
          placeholderText="Search..."
          type="text"
        />
      </div>
      <div class="hidden min-h-0 flex-1 flex-col pb-6 lg:flex">
        <TableWithPagination :store="store.pagination" @fetch:data="fetchData">
          <template #tableSection>
            <el-table
              v-loading="loading"
              :data="store.beneficiaries"
              style="width: 100%"
            >
              <el-table-column prop="name" label="Account Name">
                <template #default="scope">
                  <div class="flex items-center justify-start">
                    <Avatar
                      class="mr-2"
                      size="large"
                      :name="`${scope.row.firstName} ${scope.row.lastName}`"
                    />
                    <span
                      class="text-sm font-normal text-black1"
                      v-if="scope.row.firstName || scope.row.lastName"
                    >
                      {{ scope.row.firstName }} {{ scope.row.lastName }}
                    </span>
                    <span
                      class="text-sm font-normal text-black1"
                      v-if="!scope.row.firstName && !scope.row.lastName"
                    >
                      No Name Provided
                    </span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="bankCode" label="Bank Name" />
              <el-table-column prop="accountNumber" label="Account Number" />
              <el-table-column align="right" width="150px">
                <template #default>
                  <Button ghost icon="outlineEclipses" />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState
                  btn-label="Add A Beneficiary"
                  sub-title="Add a payment category to see record"
                  @btn:clicked="() => (displayPanel = true)"
                />
              </template>
            </el-table>
          </template>
        </TableWithPagination>
      </div>
    </template>
  </PageContentLayout>
</template>

<script setup>
import TextField from "@/components/atoms/TextField.vue";
import Button from "@/components/atoms/Button.vue";
import Avatar from "@/components/atoms/Avatar.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
import PageContentLayout from "../../../components/organisms/PageContentLayout.vue";
import FloatingButton from "@/components/atoms/FloatingButton.vue";
import { useBeneficiaryStore } from "@/modules/Payments/store/beneficiary.js";
import { onMounted, ref } from "vue";
import CreateBeneficiary from "@/modules/Payments/components/CreateBeneficiary.vue";

const store = useBeneficiaryStore();
let displayPanel = ref(false);
const loading = ref(false);

const fetchData = async () => {
  try {
    loading.value = true;
    await store.fetchAllBeneficiaries();
    loading.value = false;
  } catch (e) {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchData();
});
</script>
