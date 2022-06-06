import { createRouter, createWebHistory } from "vue-router";
import DashboardRoutes from "../modules/Dashboard/route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...DashboardRoutes],
});

export default router;
