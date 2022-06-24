<template>
  <AuthenticatedLayout>
    <template #content>
      <div class="flex flex-1 flex-col overflow-auto rounded-lg bg-white py-8">
        <div>
          <el-tabs class="sp-teams-tabs">
            <el-tab-pane label="Teammates">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Name" />
                <el-table-column prop="name" label="Email" />
                <el-table-column prop="address" label="Role" />
                <el-table-column align="right" width="150px">
                  <template #default>
                    <Button ghost icon="outlineEclipses" />
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="Pending Invite">
              <el-table :data="[]" style="width: 100%">
                <el-table-column prop="date" label="Date" />
                <el-table-column prop="name" label="Name" />
                <el-table-column prop="address" label="Address">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </template>
  </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@components/organisms/AuthenticatedLayout.vue";
import Button from "@components/atoms/Button.vue";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style lang="scss">
.sp-teams-tabs.el-tabs .el-tabs__nav {
  & .el-tabs__item {
    @apply h-12 px-10 text-base;
  }
}

.el-table {
  & .el-table__cell {
    @apply py-5 px-7;
  }

  & th.el-table__cell {
    @apply font-light;
  }

  & td.el-table__cell {
    @apply border-0;
  }

  & .el-table__inner-wrapper::before {
    @apply hidden;
  }
}
</style>
