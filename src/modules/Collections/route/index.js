import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/collections/received-payments",
    name: "/collections/received-payments",
    component: () => import("../views/ReceivedPayments.vue"),
    meta: {
      name: "Received Payments",
      middleware: [auth],
    },
  },
  {
    path: "/collections/customers",
    name: "/collections/customers",
    component: () => import("../views/Customers.vue"),
    meta: {
      name: "Customers",
      middleware: [auth],
    },
  },
  {
    path: "/collections/invoices",
    name: "/collections/invoices",
    component: () => import("../views/Invoices.vue"),
    meta: {
      name: "Invoices",
      middleware: [auth],
    },
  },
  {
    path: "/collections/products",
    name: "/collections/products",
    component: () => import("../views/Products.vue"),
    meta: {
      name: "Products",
      middleware: [auth],
    },
  },
];

export default routes;
