import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Matches from "../views/Matches.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/matches",
    name: "Matches",
    component: Matches,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
