<template>
  <FloatingPanel
    :model-value="visible"
    @visible:update="$emit('visible:update')"
  >
    <template #content>
      <div class="px-6 py-14">
        <div class="space-y-5 text-center">
          <el-avatar :size="56">
            <Icon name="user" />
          </el-avatar>
          <div class="text-lg font-semibold text-black1">Invite Teammate</div>
        </div>
        <TeamForm />
      </div>
    </template>
  </FloatingPanel>
</template>

<script setup>
import FloatingPanel from "@/components/molecules/FloatingPanel.vue";
import { computed } from "vue";
import TeamForm from "../components/TeamForm.vue";
import Icon from "@/components/atoms/Icon.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["visible:update"]);

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("visible:update", value);
  },
});
</script>
