import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Settings",
      middleware: [auth],
    },
  },
];

export default routes;
