import TasksPage from "../pages/TasksPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import NotFound from "@/pages/errors/NotFound.vue";
import HomePage from "@/pages/HomePage.vue";
import { useAuthStore } from "../stores/auth";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/tasks",
    component: TasksPage,
    name: "tasks",
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
    meta: {
      guest: true,
    },
  },
  {
    path: "/summary",
    component: SummaryPage,
    name: "summary",
    meta: {
      auth: true,
    },
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
    name: "error.404",
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active",
});

router.beforeEach(async (to, from) => {
  const store = useAuthStore();
  await store.fetchUser();
  if (to.meta.auth && !store.isLoggedIn) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    };
  } else if (to.meta.guest && store.isLoggedIn) {
    return { name: "tasks" };
  }
});

export default router;
