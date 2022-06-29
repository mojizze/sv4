<template>
  <TableWithPagination>
    <template #tableSection>
      <el-table class="mt-6" :data="data" style="width: 100%">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="role" label="Role" width="150px" />
        <el-table-column align="right" width="150px">
          <template #default>
            <Button ghost icon="outlineEclipses" />
          </template>
        </el-table-column>
      </el-table>
    </template>
  </TableWithPagination>
</template>

<script setup>
import TableWithPagination from "@/components/molecules/TableWithPagination.vue";
import Button from "@components/atoms/Button.vue";

defineProps({
  data: { type: Array },
});
</script>

<style lang="scss" scoped></style>
