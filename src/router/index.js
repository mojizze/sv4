import { createRouter, createWebHistory } from "vue-router";
import DashboardRoutes from "../modules/Dashboard/route";
import TeamsRoutes from "../modules/Teams/route";
import SettingsRoutes from "../modules/Settings/route";
import PaymentsRoutes from "../modules/Payments/route";
import AuthenticationRoute from "../modules/Authentication/route";
import StatementsRoute from "../modules/Statements/route";
import CollectionRoute from "../modules/Collections/route";
import NotFound from "@/components/templates/NotFound.vue";
import { close, start } from "@/helpers/NProgress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...DashboardRoutes,
    ...SettingsRoutes,
    ...TeamsRoutes,
    ...PaymentsRoutes,
    ...AuthenticationRoute,
    ...StatementsRoute,
    ...CollectionRoute,
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
  if (to.name) {
    start();
  }
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

router.afterEach(() => {
  close();
});

export default router;
