// import auth from "@/middlewares/auth.js";

const routes = [
  {
    path: "/statements",
    name: "statements",
    component: () => import("../views/index.vue"),
    meta: {
      name: "Statements",
      // middleware: [auth],
    },
  },
];

export default routes;
