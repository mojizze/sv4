import guest from "@/middlewares/guest.js";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      name: "Login",
      middleware: [guest],
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: {
      name: "Register",
      middleware: [guest],
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../views/ForgetPassword.vue"),
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
