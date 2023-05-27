<template>
  <v-navigation-drawer app>
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-soccer</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Add Match</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Add Player</v-list-item-title>
      </v-list-item>

      <v-list-item @click="logout">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
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
/* Custom styles for the sidebar */
</style>
