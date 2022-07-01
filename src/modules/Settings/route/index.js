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
    children: [
      { path: "", component: () => import("../views/Personal.vue") },
      { path: "personal", component: () => import("../views/Personal.vue") },
      { path: "company", component: () => import("../views/Company.vue") },
    ],
  },
];

export default routes;
