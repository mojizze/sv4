<template>
  <PageContentLayout>
    <template #content>
      <div class="flex items-center justify-start p-3 xl:justify-start xl:p-6">
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

      <div class="hidden min-h-0 flex-1 flex-col pb-6 xl:flex">
        <TableWithPagination>
          <template #tableSection>
            <el-table
              :data="transactions"
              style="width: 100%; overflow: scroll"
            >
              <el-table-column prop="date" label="Date" width="120px" />
              <el-table-column prop="name" label="Name" />
              <el-table-column prop="memo" label="Memo" />
              <el-table-column label="Source" width="300px">
                <template #default="scope">
                  <MiniAccountDisplay
                    :account="{
                      icon: scope.row.source.icon,
                      bank: scope.row.source.bank,
                      account: scope.row.source.account,
                    }"
                  />
                </template>
              </el-table-column>
              <el-table-column label="Status" width="150px">
                <template #default="scope">
                  <div class="flex items-center justify-start">
                    <div
                      class="mr-2 h-[6px] w-[6px] rounded-full"
                      :class="[status(scope.row.status.toLowerCase())]"
                    ></div>
                    <span>{{ scope.row.status }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="Amount">
                <template #default="scope">
                  <span class="font-bold">{{
                    $priceFormat(scope.row.amount)
                  }}</span>
                </template>
              </el-table-column>
              <el-table-column align="right">
                <template #default>
                  <Button ghost icon="outlineEclipses" />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState />
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
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
import PageContentLayout from "../../../components/organisms/PageContentLayout.vue";
import MiniAccountDisplay from "@/components/templates/MiniAccountDisplay.vue";

const transactions = [
  {
    id: 1,
    date: "11/07/2021",
    name: "Tajudeen Jusutofunmi",
    memo: "Data Allowance",
    status: "Success",
    source: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
  },
  {
    id: 2,
    date: "11/07/2021",
    name: "Salami Mubarak Titilayo",
    memo: "Salary For June",
    status: "Pending",
    source: {
      bank: "ALAT by Wema",
      account: "1023117865",
      icon: "wema",
    },
    amount: 12050.15,
  },
  {
    id: 3,
    date: "11/07/2021",
    name: "Remilekun Babatope Kosofe",
    memo: "Data Allowance",
    status: "Processing",
    source: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
  },
  {
    id: 4,
    date: "11/07/2021",
    name: "Remilekun Babatope Kosofe",
    memo: "Data Allowance",
    status: "Scheduled",
    source: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
  },
  {
    id: 4,
    date: "11/07/2021",
    name: "Remilekun Babatope Kosofe",
    memo: "Data Allowance",
    status: "Failed",
    source: {
      bank: "Guaranty Trust Bank",
      account: "1023117865",
      icon: "gtb",
    },
    amount: 12050.15,
  },
];

const status = (status) => {
  switch (status) {
    case "success":
      return "bg-[#388D65]";
    case "processing":
      return "bg-[#FBBB00]";
    case "pending":
      return "bg-[#388D65]";
    case "scheduled":
      return "bg-[#7B61FF]";
    default:
      return "bg-[#EE1616]";
  }
};
</script>
