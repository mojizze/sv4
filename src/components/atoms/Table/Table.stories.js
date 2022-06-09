import Table from "./index.vue";

export default { title: "Atoms/Table", component: Table };

export const TableComponent = (args) => ({
  components: { Table },
  setup() {
    const columns = [
      { label: "Name", prop: "name" },
      { label: "Title", prop: "title" },
      { label: "Email", prop: "email" },
      { label: "Role", prop: "role" },
      { label: "Edit", prop: "edit" },
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

    return { args, columns, tableData };
  },
  template: `<Table :data="tableData" v-bind="args" :columns="columns">
  <template v-slot:edit="{row}">
      <div>Action New {{ row.role }}</div>
    </template>
  </Table>`,
});
