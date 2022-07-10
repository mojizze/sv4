import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/",
    redirect: { name: "dashboard" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Dashboard",
      middleware: [auth],
    },
  },
];

export default routes;
