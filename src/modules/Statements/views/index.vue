<template>
  <PageContentLayout>
    <template #content>
      <StatementDetail
        :statement="selectedStatement"
        :model-value="displayDetail"
        @visible:update="() => (displayDetail = false)"
      />
      <div class="flex items-center justify-start p-3 xl:justify-start xl:p-6">
        <TextField
          class="mr-4 w-10/12 sm:w-11/12 lg:w-4/12"
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

      <div class="hidden min-h-0 flex-1 flex-col pb-6 xl:flex">
        <TableWithPagination>
          <template #tableSection>
            <el-table :data="statements" style="width: 100%">
              <el-table-column prop="date" label="Date" />
              <el-table-column prop="description" label="Description" />
              <el-table-column
                prop="transaction_type"
                label="Transaction Type"
              />
              <el-table-column prop="account" label="Account">
                <template #default="scope">
                  <MiniAccountDisplay
                    :account="{
                      icon: scope.row.account.icon,
                      bank: scope.row.account.bank,
                      account: scope.row.account.account,
                    }"
                  />
                </template>
              </el-table-column>
              <el-table-column prop="amount" label="Amount">
                <template #default="scope">
                  {{ $priceFormat(scope.row.amount) }}
                </template>
              </el-table-column>
              <el-table-column align="right" width="150px">
                <template #default="scope">
                  <Button
                    ghost
                    icon="outlineEclipses"
                    @click="setSelectedStatement(scope.row)"
                  />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState
                  sub-title="Add a payment category to see record"
                />
              </template>
            </el-table>
          </template>
        </TableWithPagination>
      </div>

      <div class="mb-6 flex h-full w-full overflow-auto p-3 xl:hidden">
        <div
          v-if="statements.length === 0"
          class="grid h-full flex-1 place-items-center"
        >
          <div class="text-center">
            <Icon name="emptyFile" class="mx-auto h-[116px] w-[116px]" />
            <p class="mt-2 text-sm font-bold text-black5">
              No record to display
            </p>
            <p class="mt-2 text-xs text-gray2">
              Click on send to make payments
            </p>
          </div>
        </div>

        <div class="h-full w-full" v-else>
          <div
            @click="setSelectedStatement(statement)"
            v-for="statement in statements"
            :key="statement.id"
            class="mb-6 grid w-full cursor-pointer grid-cols-5 grid-rows-1 place-items-start rounded bg-[#F9F9F9] p-3"
          >
            <MiniAccountDisplay
              class="col-span-3 md:col-span-2"
              :account="{
                icon: statement.account.icon,
                bank: statement.account.bank,
                account: statement.account.account,
              }"
            />
            <ul
              class="col-start-3 col-end-4 hidden w-full flex-col justify-end md:flex"
            >
              <li class="block truncate text-center text-sm text-black1">
                {{ statement.description }}
              </li>
              <li class="block text-center text-xs text-gray3">
                {{ statement.transaction_type }}
              </li>
            </ul>
            <ul class="col-start-4 col-end-6 flex w-full flex-col justify-end">
              <li class="block text-right text-sm font-bold text-black1">
                {{ $priceFormat(statement.amount) }}
              </li>
              <li class="block text-right text-xs text-gray3">
                {{ statement.date }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </PageContentLayout>
</template>

<script setup>
import TextField from "@/components/atoms/TextField.vue";
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
// import { useStatementStore } from "@/modules/Statements/store";
import SelectField from "../../../components/atoms/SelectField.vue";
import PageContentLayout from "../../../components/organisms/PageContentLayout.vue";
import StatementDetail from "../components/StatementDetail.vue";
import MiniAccountDisplay from "@/components/templates/MiniAccountDisplay.vue";
import { ref } from "vue";

const displayDetail = ref(false);
const selectedStatement = ref({});

const statements = [
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
  {
    id: 1,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Debit",
    account: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
    type: "single",
  },
  {
    id: 2,
    date: "11/07/2021",
    description: "Data Allowance",
    transaction_type: "Credit",
    account: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
    type: "bulk",
  },
];

function setSelectedStatement(value) {
  selectedStatement.value = value;
  displayDetail.value = true;
}

// statementStore = useStatementStore();
</script>
