const routes = [
  {
    path: "/teams",
    name: "teams",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Teams",
    },
  },
];

export default routes;
