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
    <tbody class="">
      <tr v-for="(row, index) in data" :key="index">
        <td
          v-for="(column, index) in columns"
          :key="column.prop || index"
          class="p-4 text-sm"
        >
          <TableColumn>
            <slot :name="column.prop" :row="row">
              <template v-if="column.component">
                <component :is="column.component" :column="column" :row="row" />
              </template>
              <div class="truncate">
                {{ get(row, column.prop) }}
              </div>
            </slot>
          </TableColumn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineComponent, defineProps } from "vue";
import { get } from "lodash";

defineProps({ columns: Array, data: Array });

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
