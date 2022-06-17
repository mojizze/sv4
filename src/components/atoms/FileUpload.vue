<template>
  <div
    ref="dropzone"
    class="flex h-18 items-center justify-center space-x-5 rounded-lg border border-dashed px-15 py-6"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
  >
    <Icon name="file" /><span class="text-gray2">Drag n Drop here</span
    ><span>Or</span>
    <label
      class="cursor-pointer font-bold text-blue underline hover:text-deepblue"
      >Browse
      <input
        type="file"
        class="hidden"
        ref="file"
        v-on:change="onChangeFileUpload()"
      />
    </label>
  </div>
</template>

<script setup>
import Icon from "./Icon.vue";
import { ref } from "vue";

const dropzone = ref(null);

const onDrop = (e) => {
  console.log("EVENt ===>>>", e.dataTransfer.files);
  dropzone.value.classList.remove("bg-gray7");
};

const onDragOver = () => {
  dropzone.value.classList.add("bg-gray7");
};

const onDragLeave = () => {
  dropzone.value.classList.remove("bg-gray7");
};
</script>

<style lang="scss" scoped></style>
