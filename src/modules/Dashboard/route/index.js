const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Dashboard",
    },
  },
];

export default routes;
