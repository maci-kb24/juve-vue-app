<template>
  <v-app-bar class="bg-grey-darken-4" flat app>
    <v-toolbar-title>
      <router-link to="/"
        ><img src="../assets/images/logos/juve_logo.png" width="40"
      /></router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="d-none d-sm-flex align-center">
      <router-link
        class="text-white px-3"
        v-for="link in links"
        :key="link.id"
        :to="link.url"
        >{{ link.text }}</router-link
      >
    </v-toolbar-items>

    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-sm-none"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="bottom" temporary>
    <v-list>
      <v-list-item v-for="item in items" :key="item.text" :to="item.to">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { text: "Home", icon: "mdi-home", to: "/" },
        { text: "The Team", icon: "mdi-help-circle", to: "/team" },
        { text: "Matches", icon: "mdi-email", to: "/matches" },
      ],
      links: [
        { id: 1, text: "Home", url: "/" },
        { id: 2, text: "The Team", url: "/team" },
        { id: 3, text: "Matches", url: "/matches" },
      ],
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  border-bottom: 2px solid white;
}
</style>
