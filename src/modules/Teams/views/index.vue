<template>
  <div class="flex min-h-0 flex-1 flex-col rounded-lg bg-white p-6">
    <el-tabs class="sp-teams-tabs">
      <el-tab-pane label="Teammates">
        <TeamTable :data="teamMates" />
      </el-tab-pane>
      <el-tab-pane label="Pending Invite">
        <TeamTable :data="pendingMates" />
      </el-tab-pane>
    </el-tabs>
    <Modal :show="show" @close="show = false">
      <template #title>
        <div class="space-y-5 text-center">
          <el-avatar :size="74">
            <Icon name="user" />
          </el-avatar>
          <div class="text-lg font-semibold text-black1">Invite Teammate</div>
        </div>
      </template>
      <template #content>
        <TeamForm />
      </template>
    </Modal>
    <Button
      icon="add"
      class="absolute bottom-[7%] right-[3%] z-[99] translate-x-1/2"
      shape="circle"
      @click="show = !show"
    />
  </div>
</template>

<script setup>
import Modal from "@components/atoms/Modal.vue";
import Button from "@components/atoms/Button.vue";
import Icon from "@components/atoms/Icon.vue";
import TeamTable from "../components/TeamTable.vue";
import TeamForm from "../components/TeamForm.vue";
import { ref } from "vue";

const show = ref(false);
const teamMates = [
  {
    email: "maureen.gardner@msn.com",
    name: "Damilola Obalakun",
    role: "Owner",
  },
  {
    email: "rebecca.kennedy@outlook.com",
    name: "Everett Mcdonald",
    role: "Admin",
  },
  {
    email: "jessie.murphy@aol.com",
    name: "Kurt Simmons",
    role: "Member",
  },
  {
    email: "r.weber@live.com",
    name: "Glenda Bradley",
    role: "Member",
  },
];

const pendingMates = [
  {
    email: "Oluwaremilekuntabade@msn.com",
    name: "Oluwaremilekun Tabade",
    role: "Member",
  },
  {
    email: "Lazarusmcdonald@outlook.com",
    name: "Lazarus Mcdonald",
    role: "Admin",
  },
  {
    email: "jessie.murphy@aol.com",
    name: "Chan Simmons",
    role: "Member",
  },
  {
    email: "r.weber@live.com",
    name: "Helen Bradley",
    role: "Member",
  },
];
</script>

<style lang="scss">
.sp-teams-tabs.el-tabs {
  @apply flex min-h-0 flex-1 flex-col;

  & .el-tabs__nav {
    & .el-tabs__item {
      @apply h-12 px-10 text-base;
    }
  }

  & .el-tabs__content {
    @apply flex min-h-0 flex-1 flex-col;

    & .el-tab-pane {
      @apply flex min-h-0 flex-1 flex-col;
    }
  }
}
.el-avatar {
  @apply bg-fadeblue;
}
</style>
