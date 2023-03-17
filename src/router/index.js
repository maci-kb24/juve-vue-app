import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Matches from "../views/Matches.vue";
import Team from "../views/Team.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
