import { createRouter, createWebHistory } from "vue-router";
import DashboardRoutes from "../modules/Dashboard/route";
import AuthenticationRoute from "../modules/Authentication/route";
import NotFound from "@/components/templates/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...DashboardRoutes,
    ...AuthenticationRoute,
    { path: "/404", component: NotFound },
    { path: "/:catchAll(.*)", name: "NotFound", redirect: "/404" },
  ],
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];

  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
