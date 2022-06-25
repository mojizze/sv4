<template>
  <AuthenticatedLayout>
    <template #content>
      <div
        class="relative mt-6 flex w-full flex-1 flex-col bg-white p-6 shadow-xl"
      >
        <div class="flex items-center justify-between lg:justify-start">
          <TextField
            class="w-10/12 sm:w-11/12 lg:w-2/12"
            placeholderText="Search..."
          />
          <Icon name="filter" />
        </div>
        <div class="flex-1">
          <Table
            class="mt-6 hidden overflow-auto md:table"
            :data="tableData"
            :columns="columns"
            :loading="false"
          >
            <template #empty>
              <TableEmptyState />
            </template>
          </Table>
        </div>
        <Pagination class="hidden bg-white" />
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
import { ref } from "vue";

// const columns = ref([
//   { label: "Date", prop: "date", width: "150" },
//   { label: "Name", prop: "name" },
//   { label: "Memo", prop: "memo" },
//   { label: "Source", prop: "source" },
//   { label: "Amount", prop: "amount" },
// ]);
const columns = ref([
  { label: "Name", prop: "name" },
  { label: "Title", prop: "title" },
  { label: "Email", prop: "email" },
  { label: "Role", prop: "role", width: 100 },
  { label: "Edit", prop: "edit", hideLabel: true, width: 100 },
]);

const tableData = ref([
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Admin",
  },
  {
    name: "Linda Smith",
    title: "Back-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Admin",
  },
  {
    name: "Linda Smith",
    title: "Back-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
]);
</script>
