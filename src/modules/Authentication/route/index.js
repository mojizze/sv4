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
    meta: {
      name: "Forgot Password",
      middleware: [guest],
    },
  },
  {
    path: "/password-token",
    name: "password-token",
    component: () => import("../views/PasswordToken.vue"),
    meta: {
      name: "Verify Token",
      middleware: [guest],
    },
  },
  {
    path: "/set-password",
    name: "set-password",
    component: () => import("../views/SetNewPassword.vue"),
    meta: {
      name: "Create password",
      middleware: [guest],
    },
  },
  {
    path: "/password-reset-success",
    name: "password-reset-success",
    component: () => import("../views/ForgotPasswordSuccessPage.vue"),
    meta: {
      name: "Password Reset Success",
      middleware: [guest],
    },
  },
];

export default routes;
