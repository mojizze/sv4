const routes = [
  {
    path: "/payments",
    name: "payments",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Payments",
    },
  },
  {
    path: "/payments/category",
    name: "payment_category",
    component: () => import("../views/PaymentCategory.vue"),
    meta: {
      name: "Payment Category",
    },
  },
];

export default routes;
