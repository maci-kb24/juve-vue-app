<template>
  <div class="home-matches bg-grey-darken-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="pa-2 d-inline-block text-white">Matches</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2 class="pa-2 d-inline-block text-white">
            card components matches
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <router-link to="/matches" tag="v-btn"
              ><v-btn :rounded="0" class="text-white pa-2 matches-btn flat"
                >See More Matches</v-btn
              ></router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup></script>

<style scoped>
.home-matches {
  padding: 3rem 0;
  position: relative;
  z-index: 1;
}
.home-matches .v-container {
  width: 70%;
}
.home-matches h2 {
  background-color: #ef484d;
}
.home-matches .matches-btn {
  background-color: #ef484d;
}
</style>
