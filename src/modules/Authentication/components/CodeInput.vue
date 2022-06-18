<template>
  <div class="flex justify-center space-x-5">
    <input
      v-for="(n, index) in fields"
      :key="index"
      type="number"
      pattern="\d*"
      :id="'input_' + index"
      maxlength="1"
      v-model="fields[index]"
      @input="handleInput"
      @keypress="isNumber"
      @keydown.delete="handleDelete"
      @paste="onPaste"
      class="h-18 w-16 appearance-none rounded border text-center text-4xl font-semibold text-black1"
    />
  </div>
</template>

<script setup>
let fields = Array(5);
let dataFromPaste;
const keysAllowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const isNumber = (event) => {
  event.currentTarget.value = "";
  const keyPressed = event.key;
  if (!keysAllowed.includes(keyPressed)) {
    event.preventDefault();
  }
};
const handleInput = (event) => {
  const inputType = event.inputType;
  let currentActiveElement = event.target;
  if (inputType === "insertText")
    currentActiveElement.nextElementSibling?.focus();
  if (inputType === "insertFromPaste" && dataFromPaste) {
    for (const num of dataFromPaste) {
      let id = parseInt(currentActiveElement.id.split("_")[1]);
      currentActiveElement.value = num;
      fields[id] = num;
      if (currentActiveElement.nextElementSibling) {
        currentActiveElement = currentActiveElement.nextElementSibling;
        currentActiveElement.nextElementSibling?.focus();
      }
    }
  }
  console.log(fields);
};

const handleDelete = (event) => {
  let value = event.target.value;
  let currentActiveElement = event.target;
  if (!value) currentActiveElement.previousElementSibling?.focus();
};

const onPaste = (event) => {
  dataFromPaste = event.clipboardData?.getData("text").trim().split("");
  if (dataFromPaste) {
    for (const num of dataFromPaste) {
      if (!keysAllowed.includes(num)) event.preventDefault();
    }
  }
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
