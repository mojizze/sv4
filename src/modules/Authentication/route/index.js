const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgetPassword.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/password-token",
    name: "password-token",
    component: () => import("../views/PasswordToken.vue"),
  },
  {
    path: "/set-password",
    name: "set-password",
    component: () => import("../views/SetNewPassword.vue"),
  },
  {
    path: "/password-reset-success",
    name: "password-reset-success",
    component: () => import("../views/ForgotPasswordSuccessPage.vue"),
  },
];

export default routes;
