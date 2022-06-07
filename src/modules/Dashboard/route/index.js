import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/index.vue"),
    meta: {
      middleware: auth,
    },
  },
];

export default routes;
