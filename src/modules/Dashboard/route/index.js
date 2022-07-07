import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Dashboard",
      middleware: [auth],
    },
  },
];

export default routes;
