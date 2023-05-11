<template>
  <v-app>
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from "./components/nav/Navbar.vue";
import Footer from "./components/nav/Footer.vue";
</script>

<style scoped></style>
