const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/index.vue"),
  },
];

export default routes;
