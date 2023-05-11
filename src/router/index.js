import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Matches from "../views/Matches.vue";
import Team from "../views/Team.vue";
import Admin from "../views/Admin.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
