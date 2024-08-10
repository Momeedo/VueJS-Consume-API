import TasksPage from "../pages/TasksPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import NotFound from "@/pages/errors/NotFound.vue";
import HomePage from "@/pages/HomePage.vue";
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
    // meta: {
    //   auth: true,
    // },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
  },
  {
    path: "/register",
    component: RegisterPage,
    name: "register",
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

router.beforeEach((to, from) => {
  if (to.meta.auth) {
    return {
      name: "login",
      query: {
        redirect: to.fullPath,
      },
    };
  }
});

export default router;
