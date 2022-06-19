import Table from "./Table.vue";
import Button from "./Button.vue";
import TableEmptyState from "../molecules/TableEmptyState.vue";

export default { title: "Atoms/Table", component: Table };

export const TableComponent = (args) => ({
  components: { Table, Button, TableEmptyState },
  setup() {
    const columns = [
      { label: "Name", prop: "name" },
      { label: "Title", prop: "title" },
      { label: "Email", prop: "email" },
      { label: "Role", prop: "role", width: 100 },
      { label: "Edit", prop: "edit", hideLabel: true, width: 100 },
    ];

    const tableData = [
      {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Admin",
      },
      {
        name: "Linda Smith",
        title: "Back-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
      },
    ];

    const logger = () => console.log("logger===>>>");

    return { args, columns, tableData, logger };
  },
  template: `
    <Table :data="tableData" v-bind="args" :columns="columns" :loading="false">
      <template v-slot:edit="{row}">
        <Button ghost icon="outlineEclipses" />
      </template>

      <template v-slot:empty>
        <TableEmptyState @btn:clicked="logger" btnLabel="Add Beneficiary" />
      </template>
    </Table>
  `,
});
