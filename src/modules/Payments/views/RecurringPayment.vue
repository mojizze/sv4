<template>
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
    <div class="mt-6 flex-1">
      <TableWithPagination>
        <template #tableSection>
          <div class="h-full">
            <el-table :data="[]" style="width: 100%">
              <el-table-column prop="name" label="Date Created" width="250px" />
              <el-table-column prop="email" label="Name" width="250px" />
              <el-table-column prop="role" label="Description" />
              <el-table-column prop="role" label="Beneficiary" />
              <el-table-column align="right" width="150px">
                <template #default>
                  <Button ghost icon="outlineEclipses" />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState
                  btn-label="Set Up Recurring Payment"
                  sub-title="Click on send payment to make payment"
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
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
</script>
