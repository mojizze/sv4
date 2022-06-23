const routes = [
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
