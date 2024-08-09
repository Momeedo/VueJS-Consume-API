import TasksPage from "../pages/TasksPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SummaryPage from "@/pages/SummaryPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/tasks",
    component: TasksPage,
    name: "tasks",
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
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: "active"
})


export default router;