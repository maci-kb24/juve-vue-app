import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Matches from "../views/Matches.vue";
import Team from "../views/Team.vue";
import Admin from "../views/Admin.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/matches",
    component: Matches,
  },
  {
    path: "/team",
    component: Team,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
