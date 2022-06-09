<template>
  <table class="min-w-full bg-white">
    <thead class="border-y border-gray6">
      <tr>
        <th
          v-for="{ prop, label } in columns"
          :key="prop"
          scope="col"
          class="border py-4 px-3 text-left text-sm font-semibold sm:pl-6 lg:pl-8"
        >
          {{ label }}
        </th>
      </tr>
    </thead>
    <!-- <slot></slot> -->
    <tbody class="">
      <tr v-for="(row, index) in data" :key="index">
        <td
          v-for="(column, index) in columns"
          :key="column.prop || index"
          v-bind="column"
          class="whitespace-nowrap border py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 lg:pl-8"
        >
          <TableColumn>
            <slot :name="column.prop" :row="row">
              <template v-if="column.component">
                <component
                  :is="column.component"
                  :column="column"
                  :row="row"
                ></component>
              </template>
              <div class="truncate">
                <!-- {{ get(row, column.prop) || "- -" }} -->

                {{ column.prop }}
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

defineProps({ columns: Array, data: Array });

const TableColumn = defineComponent({
  name: "TableColumn",
  template: `<slot></slot>`,
});

defineComponent({
  components: { TableColumn },
});
</script>

<style lang="scss" scoped></style>
