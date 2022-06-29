import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/teams",
    name: "teams",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Teams",
      middleware: [auth],
    },
  },
];

export default routes;
