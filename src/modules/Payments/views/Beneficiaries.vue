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
      <TextField
        class="mr-4 w-full lg:w-3/12"
        placeholderText="Search..."
        type="text"
      />
    </div>
    <div class="mt-6 flex-1">
      <TableWithPagination>
        <template #tableSection>
          <div class="h-full">
            <el-table :data="[]" style="width: 100%">
              <el-table-column prop="name" label="Account Name" />
              <el-table-column prop="email" label="Bank Name" />
              <el-table-column prop="role" label="Account Number" />
              <el-table-column align="right" width="150px">
                <template #default>
                  <Button ghost icon="outlineEclipses" />
                </template>
              </el-table-column>

              <template #empty>
                <TableEmptyState
                  btn-label="Add A Beneficiary"
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
import TableEmptyState from "@/components/molecules/TableEmptyState.vue";
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
</script>
