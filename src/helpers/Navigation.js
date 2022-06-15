export const MenuDetails = [
  {
    name: "Dashboard",
    link: "dashboard",
    children: null,
    icon: "home",
  },
  {
    name: "Statements",
    link: "statements",
    children: null,
    icon: "statement",
  },
  {
    name: "Payments",
    link: "payments",
    children: [
      {
        name: "Payment Category",
        link: "#",
      },
      {
        name: "Transactions",
        link: "#",
      },
      {
        name: "Requires Attention",
        link: "#",
      },
      {
        name: "Recurring Payments",
        link: "#",
      },
      {
        name: "Beneficiaries",
        link: "#",
      },
    ],
    icon: "send",
  },
  {
    name: "Collections",
    link: "collections",
    icon: "send",
    children: [
      {
        name: "Recieved Payments",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Invoices",
        link: "#",
      },
      {
        name: "Customers",
        link: "#",
      },
    ],
  },
  {
    name: "Beneficiaries",
    link: "beneficiaries",
    children: null,
    icon: "beneficiary",
  },
  {
    name: "Accounts",
    link: "accounts",
    children: null,
    icon: "wallet",
  },
];
