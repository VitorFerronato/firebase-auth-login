import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/login/LoginView.vue";
import SignInView from "../views/login/components/SignInView.vue";
import SignUpView from "../views/login/components/SignUpView.vue";
import PasswordRecoveryView from "../views/login/components/PasswordRecoveryView.vue";
import HomeView from "../views/main/HomeView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "",
    redirect: { name: "sign-in" },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
      title: "Home",
    },
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
        meta: {
          requiresAuth: false,
          title: "Sign in",
        },
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: SignUpView,
        meta: {
          requiresAuth: false,
          title: "Sign up",
        },
      },
      {
        path: "password-recovery",
        name: "password-recovery",
        component: PasswordRecoveryView,
        meta: {
          requiresAuth: false,
          title: "Password recovery",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next("/login");
    } else {
      next();
    }
  });
});

router.afterEach((to, from) => {
  document.title = to.meta.title || "Firebase login";
});

export default router;
