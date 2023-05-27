<template>
  <v-app-bar app>
    <v-toolbar-title>Dashboard</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template #activator="{ on }">
        <v-avatar v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>User Name</v-list-item-title>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout() {
      // Perform logout logic
      // Redirect the user to the login page after logout
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
/* Custom styles for the navbar */
</style>
