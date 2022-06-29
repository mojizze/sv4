=
<template>
  <div
    class="relative z-10 mt-6 flex w-full flex-1 flex-col bg-white p-6 shadow-xl"
  >
    <Button size="tiny" shape="circle" class="absolute bottom-18 right-6 z-10">
      <template #icon>
        <Icon name="add" class="h-6 w-6 fill-blue stroke-white" />
      </template>
    </Button>

    <div class="flex items-center justify-start lg:justify-start">
      <SelectField
        :options="[]"
        display-property="name"
        value-property="name"
        placeholder='<span class="text-black1">Select Identifier</span>'
        label-prefix="Identifier:"
        class="mr-4 hidden lg:block"
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
              <el-table-column prop="role" label="Customer name" />
              <el-table-column prop="role" label="Email Address" />
              <el-table-column prop="role" label="Phone Number" />
              <el-table-column prop="role" label="Date Created" />
              <el-table-column prop="role" label="Time Created" />
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
import Icon from "@/components/atoms/Icon.vue";
import Button from "@/components/atoms/Button.vue";
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import Calendar from "@/components/molecules/Calendar.vue";
import SelectField from "../../../components/atoms/SelectField.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
</script>
