import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Matches from "../views/Matches.vue";
import Team from "../views/Team.vue";
import Admin from "../views/Admin.vue";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import Dashboard from "../components/dashboard/Dashboard.vue";

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
    children: [
      {
        path: "register",
        component: Register,
        name: "register",
      },
      {
        path: "login",
        component: Login,
        name: "login",
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true; // Check if the user is authenticated (you can use your authentication logic here)
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next({ name: "login" }); // Redirect to the login page if the user is not authenticated
  } else {
    next(); // Proceed to the next route
  }
});

export default router;
