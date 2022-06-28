export const MenuDetails = [
  {
    name: "Dashboard",
    link: "/dashboard",
    children: null,
    icon: "home",
  },
  {
    name: "Statements",
    link: "/statements",
    children: null,
    icon: "statement",
  },
  {
    name: "Payments",
    link: "payments",
    icon: "send",
    children: [
      {
        name: "Payment Category",
        link: "/payments/category",
        icon: "send",
      },
      {
        name: "Transactions",
        link: "/payments/transactions",
        icon: "send",
      },
      {
        name: "Requires Attention",
        link: "/payments/requires-attention",
        icon: "send",
      },
      {
        name: "Recurring Payments",
        link: "/payments/recurring-payment",
        icon: "send",
      },
      {
        name: "Beneficiaries",
        link: "/payments/beneficiaries",
        icon: "send",
      },
    ],
  },
  {
    name: "Collections",
    link: "collections",
    icon: "send",
    children: [
      {
        name: "Recieved Payments",
        link: "#",
        icon: "send",
      },
      {
        name: "Products",
        link: "#",
        icon: "send",
      },
      {
        name: "Invoices",
        link: "#",
        icon: "send",
      },
      {
        name: "Customers",
        link: "#",
        icon: "send",
      },
    ],
  },
  {
    name: "Accounts",
    link: "accounts",
    children: null,
    icon: "wallet",
  },
];

export const OtherMenuDetails = [
  {
    name: "Teams",
    link: "teams",
    children: null,
    icon: "teams",
  },
  {
    name: "Settings",
    link: "#",
    children: null,
    icon: "setting",
  },
  {
    name: "Help Center",
    link: "#",
    children: null,
    icon: "help",
  },
];
