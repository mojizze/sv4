<template>
  <PageContentLayout>
    <template #content>
      <CreateCategory
        :model-value="visible"
        @visible:update="() => (visible = false)"
      />

      <Button
        size="tiny"
        shape="circle"
        class="absolute bottom-4 right-2 z-10 xl:right-6 xl:bottom-18"
        @click="visible = true"
      >
        <template #icon>
          <Icon name="add" class="h-6 w-6 fill-blue stroke-white" />
        </template>
      </Button>

      <div class="flex items-center justify-start p-3 xl:justify-start xl:p-6">
        <TextField
          class="mr-4 w-10/12 sm:w-11/12 lg:w-2/12"
          placeholderText="Search..."
          type="text"
        />
        <Calendar class="mr-4 hidden w-fit lg:block" />
        <Calendar class="mr-4 hidden w-fit lg:block" />
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
            <el-table :data="categories" style="width: 100%">
              <el-table-column prop="date" label="Date Created" width="150px" />
              <el-table-column prop="name" label="Name" width="200px" />
              <el-table-column
                prop="description"
                label="Description"
                width="300px"
              />
              <el-table-column
                prop="beneficiaries"
                label="Beneficiary"
                width="350px"
              />
              <el-table-column align="right">
                <template #default>
                  <Button ghost icon="outlineEclipses" />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState
                  btn-label="Add Category"
                  sub-title="Add a payment category to see record"
                />
              </template>
            </el-table>
          </template>
        </TableWithPagination>
      </div>

      <div class="mb-6 flex h-full w-full overflow-auto p-3 xl:hidden">
        <div
          v-if="categories.length === 0"
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
            v-for="category in categories"
            :key="category.id"
            class="mb-6 grid w-full cursor-pointer grid-cols-5 grid-rows-1 place-items-start rounded bg-[#F9F9F9] p-3"
          >
            <ul class="col-span-4 w-full flex-col justify-end">
              <li class="block truncate text-sm text-black1">
                {{ category.name }}
              </li>
              <li class="block text-2xs text-gray3">
                {{ category.description }}
              </li>
            </ul>
            <ul class="col-start-5 col-end-6 w-full">
              <li class="block text-right text-2xs text-gray3">
                21 Beneficiaries
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
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
import PageContentLayout from "../../../components/organisms/PageContentLayout.vue";
import CreateCategory from "../components/CreateCategory.vue";
import { ref } from "vue";

const visible = ref(false);

const categories = [
  {
    id: 1,
    date: "11/07/2021",
    name: "Salary Band 1",
    description: "Lorem ipsum dolorg elit ut aliquam",
    beneficiaries: ["Bernice Potter, Claire Edwards, Jordan Hansen, Juan Ryan"],
  },
  {
    id: 2,
    date: "11/07/2021",
    name: "Salary Band 1",
    description: "Lorem ipsum dolorg elit ut aliquam",
    beneficiaries: ["Bernice Potter, Claire Edwards, Jordan Hansen, Juan Ryan"],
  },
  {
    id: 3,
    date: "11/07/2021",
    name: "Salary Band 1",
    description: "Lorem ipsum dolorg elit ut aliquam",
    beneficiaries: ["Bernice Potter, Claire Edwards, Jordan Hansen, Juan Ryan"],
  },
];
</script>
