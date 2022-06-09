import Table from "./index.vue";
<<<<<<< HEAD
import Button from "../Button/index.vue";
import TableEmptyState from "../../molecules/TableEmptyState.vue";
=======
>>>>>>> feat: basic table setup

export default { title: "Atoms/Table", component: Table };

export const TableComponent = (args) => ({
<<<<<<< HEAD
  components: { Table, Button, TableEmptyState },
=======
  components: { Table },
>>>>>>> feat: basic table setup
  setup() {
    const columns = [
      { label: "Name", prop: "name" },
      { label: "Title", prop: "title" },
      { label: "Email", prop: "email" },
<<<<<<< HEAD
      { label: "Role", prop: "role", width: 100 },
      { label: "Edit", prop: "edit", hideLabel: true, width: 100 },
=======
      { label: "Role", prop: "role" },
      { label: "Edit", prop: "edit" },
>>>>>>> feat: basic table setup
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

<<<<<<< HEAD
    const logger = () => console.log("logger===>>>");

    return { args, columns, tableData, logger };
  },
  template: `<Table :data="[]" v-bind="args" :columns="columns" :loading="false">
  <template v-slot:edit="{row}">
      <Button ghost icon="outlineEclipses" />
    </template>

    <template v-slot:empty>
      <TableEmptyState @btn:clicked="logger" btnLabel="Hello Button" />
=======
    return { args, columns, tableData };
  },
  template: `<Table :data="tableData" v-bind="args" :columns="columns">
  <template v-slot:edit="{row}">
      <div>Action New {{ row.role }}</div>
>>>>>>> feat: basic table setup
    </template>
  </Table>`,
});
