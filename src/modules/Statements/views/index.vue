<template>
  <div
    class="relative z-10 mt-6 flex w-full flex-1 flex-col bg-white p-6 shadow-xl"
  >
    <Button size="tiny" shape="circle" class="absolute bottom-18 right-4 z-10">
      <template #icon>
        <Icon name="add" class="h-6 w-6 fill-blue stroke-white" />
      </template>
    </Button>

    <div class="flex items-center justify-start lg:justify-start">
      <TextField
        class="mr-4 w-10/12 sm:w-11/12 lg:w-2/12"
        placeholderText="Search..."
        type="text"
      />
      <Calendar class="mr-4 hidden lg:block" />
      <Calendar class="mr-4 hidden lg:block" />
      <SelectField
        :options="[]"
        display-property="name"
        value-property="name"
        placeholder='<span class="text-black1">All Account</span>'
        label-prefix="Source:"
        class="mr-4 hidden lg:block"
      />
      <Icon name="filter" class="lg:hidden" />
    </div>
    <div class="flex-1">
      <TableWithPagination>
        <template #tableSection>
          <div class="mt-6 h-full text-black1">
            <el-table :data="statements" style="width: 100%">
              <el-table-column prop="date" label="Date" />
              <el-table-column prop="description" label="Description" />
              <el-table-column
                prop="transaction_type"
                label="Transaction Type"
              />
              <el-table-column prop="account" label="Account" width="300px">
                <template #default="scope">
                  <ul class="flex w-full justify-start">
                    <li class="cursor-pointer">
                      <div class="flex items-center justify-start">
                        <Icon :name="scope.row.account.icon" />
                        <div class="ml-2">
                          <p class="text-sm text-black1">
                            {{ scope.row.account.bank }}
                          </p>
                          <p class="text-2xs text-gray2">
                            {{ scope.row.account.account }}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </template>
              </el-table-column>
              <el-table-column prop="amount" label="Amount">
                <template #default="scope">
                  {{ $priceFormat(scope.row.amount) }}
                </template>
              </el-table-column>
              <el-table-column align="right" width="150px">
                <template #default>
                  <Button ghost icon="outlineEclipses" />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState
                  sub-title="Add a payment category to see record"
                />
              </template>
            </el-table>
          </div>
        </template>
      </TableWithPagination>
    </div>
  </div>
</template>

<script setup>
import TextField from "@/components/atoms/TextField.vue";
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
// import { useStatementStore } from "@/modules/Statements/store";
import SelectField from "../../../components/atoms/SelectField.vue";

const statements = [
  {
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
  },
];

// statementStore = useStatementStore();
</script>
