import auth from "@/middlewares/auth";

const routes = [
  {
    path: "/payments/category",
    name: "/payments/category",
    component: () => import("../views/Category.vue"),
    meta: {
      name: "Category",
      middleware: [auth],
    },
  },
  {
    path: "/payments/transactions",
    name: "/payments/transactions",
    component: () => import("../views/Transactions.vue"),
    meta: {
      name: "Transactions",
      middleware: [auth],
    },
  },
  {
    path: "/payments/requires-attention",
    name: "/payments/requires-attention",
    component: () => import("../views/RequiresAttention.vue"),
    meta: {
      name: "Requires Attention",
      middleware: [auth],
    },
  },
  {
    path: "/payments/recurring-payment",
    name: "/payments/recurring-payment",
    component: () => import("../views/RecurringPayment.vue"),
    meta: {
      name: "Recurring Payment",
      middleware: [auth],
    },
  },
  {
    path: "/payments/beneficiaries",
    name: "/payments/beneficiaries",
    component: () => import("../views/Beneficiaries.vue"),
    meta: {
      name: "Beneficiaries",
      middleware: [auth],
    },
  },
];

export default routes;
