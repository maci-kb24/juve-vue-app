<template>
  <v-app>
    <Navbar v-if="isMainNavbarVisible" />
    <dashboard-navbar v-else></dashboard-navbar>
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/nav/Navbar.vue";
import DashboardNavbar from "./components/dashboard/DashboardNavbar.vue";
import Footer from "./components/nav/Footer.vue";

export default {
  components: {
    Navbar,
    DashboardNavbar,
    Footer,
  },
  data() {
    return {
      isMainNavbarVisible: true, // Initially show the main navbar
    };
  },
  watch: {
    $route(to) {
      this.updateNavbar(to.path); // Update the navbar based on the current route
    },
  },
  methods: {
    updateNavbar(path) {
      if (path === "/dashboard") {
        this.isMainNavbarVisible = false; // Switch to the dashboard navbar
      } else {
        this.isMainNavbarVisible = true; // Show the main navbar for other routes
      }
    },
  },
};
</script>
