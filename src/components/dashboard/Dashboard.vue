<template>
  <div>
    <!-- <dashboard-navbar></dashboard-navbar> -->
    <sidebar></sidebar>
    <!-- Other content of the dashboard -->
  </div>
</template>

<script>
// import DashboardNavbar from "../dashboard/DashboardNavbar.vue";
import Sidebar from "../dashboard/Sidebar.vue";

export default {
  components: {
    // DashboardNavbar,
    Sidebar,
  },
};
</script>

<style scoped>
/* Custom styles for the dashboard */
</style>
