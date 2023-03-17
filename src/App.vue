<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container style="min-height: 100%">
        <RouterView />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
