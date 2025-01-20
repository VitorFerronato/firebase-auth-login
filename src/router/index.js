import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login/LoginView.vue";
import SignInView from "../views/login/components/SignInView.vue";
import SignUpView from "../views/login/components/SignUpView.vue";
import PasswordRecoveryView from "../views/login/components/PasswordRecoveryView.vue";
import HomeView from "../views/main/HomeView.vue";

const routes = [
  {
    path: "",
    redirect: { name: "sign-in" },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    children: [
      {
        path: "",
        redirect: { name: "sign-in" },
      },
      {
        path: "sign-in",
        name: "sign-in",
        component: SignInView,
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: SignUpView,
      },
      {
        path: "password-recovery",
        name: "password-recovery",
        component: PasswordRecoveryView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
