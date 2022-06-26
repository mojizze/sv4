<template>
  <AuthenticatedLayout>
    <template #content>
      <div
        class="relative z-10 mt-6 flex w-full flex-1 flex-col bg-white p-6 shadow-xl"
      >
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
          <Table
            class="mt-6 hidden h-full overflow-auto md:table"
            :data="statementStore.statements"
            :columns="columns"
            :loading="false"
          >
            <template #empty>
              <TableEmptyState />
            </template>
          </Table>
        </div>
        <Pagination class="hidden bg-white md:flex" />
      </div>
    </template>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/components/organisms/AuthenticatedLayout.vue";
import TextField from "@/components/atoms/TextField.vue";
import Icon from "@/components/atoms/Icon.vue";
import Pagination from "@/components/atoms/Pagination.vue";
import Table from "@/components/atoms/Table.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
import { useStatementStore } from "@/modules/Statements/store";
import { ref } from "vue";
import SelectField from "../../../components/atoms/SelectField.vue";

const columns = ref([
  { label: "Date", prop: "date", width: "150" },
  { label: "Name", prop: "name" },
  { label: "Memo", prop: "memo" },
  { label: "Source", prop: "source" },
  { label: "Amount", prop: "amount" },
]);

const statementStore = useStatementStore();
</script>
