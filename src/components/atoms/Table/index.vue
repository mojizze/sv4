<template>
  <table class="w-full table-fixed bg-white">
    <thead class="border-y border-gray6">
      <tr>
        <th
          v-for="column in columns"
          :key="column.prop"
          scope="col"
          class="p-4 text-left text-sm font-semibold"
          :style="getStyles(column.width)"
        >
          <span v-if="column.hideLabel" class="sr-only">Edit</span>
          <div v-else class="truncate">{{ column.label }}</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td
          v-for="(column, index) in columns"
          :key="column.prop || index"
          class="p-4 text-sm"
        >
          <TableColumn>
            <slot :name="column.prop" :row="row">
              <div class="truncate">
                {{ get(row, column.prop) }}
              </div>
            </slot>
          </TableColumn>
        </td>
      </tr>
      <tr v-if="loading">
        <td :colspan="columns.length">
          <div class="flex justify-center py-20">loading...</div>
        </td>
      </tr>
      <tr v-if="data.length === 0 && !loading">
        <td :colspan="columns.length">
          <div class="flex justify-center py-20">
            <slot name="empty">{{ emptyText }}</slot>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineComponent } from "vue";
import { get } from "lodash";

defineProps({
  columns: { type: Array, required: true },
  data: { type: Array, required: true },
  emptyText: { type: String, default: "No data" },
  loading: { type: Boolean, required: true, default: false },
});

const TableColumn = defineComponent({
  name: "TableColumn",
  template: `<slot></slot>`,
});

const getStyles = (width) => {
  let styles = {};
  if (width) {
    styles["width"] = `${width}px`;
  }

  return styles;
};
</script>

<style lang="scss" scoped></style>
