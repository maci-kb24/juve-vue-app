<template>
  <div class="home-matches bg-grey-darken-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="pa-2 d-inline-block text-white">Matches</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, id) in data" :key="id" cols="4">
          <v-card>
            <v-text-subtitle>{{ item.date }}</v-text-subtitle>
            <v-card-text>
              <img :src="item.thumbnail1" />{{ item.team1 }}
              {{ item.score1 }}</v-card-text
            >
            <v-card-text
              ><img :src="item.thumbnail2" /> {{ item.team2 }}
              {{ item.score2 }}</v-card-text
            >
          </v-card>
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

<script setup>
import { reactive } from "vue";

const data = reactive([
  {
    date: "2022-01-01",
    team1: "Juventus",
    score1: 1,
    thumbnail1: "https://placehold.co/40",
    team2: "Verona",
    score2: 0,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-02",
    team1: "Sassuolo",
    score1: 2,
    thumbnail1: "https://placehold.co/40",
    team2: "Juventus",
    score2: 5,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-03",
    team1: "Team E",
    score1: 9,
    thumbnail1: "https://placehold.co/40",
    team2: "Team F",
    score2: 11,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-04",
    team1: "Team G",
    score1: 7,
    thumbnail1: "https://placehold.co/40",
    team2: "Team H",
    score2: 6,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-05",
    team1: "Team I",
    score1: 13,
    thumbnail1: "https://placehold.co/40",
    team2: "Team J",
    score2: 15,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-06",
    team1: "Team K",
    score1: 8,
    thumbnail1: "https://placehold.co/40",
    team2: "Team L",
    score2: 9,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-07",
    team1: "Team M",
    score1: 11,
    thumbnail1: "https://placehold.co/40",
    team2: "Team N",
    score2: 6,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-08",
    team1: "Team O",
    score1: 7,
    thumbnail1: "https://placehold.co/40",
    team2: "Team P",
    score2: 8,
    thumbnail2: "https://placehold.co/40",
  },
  {
    date: "2022-01-09",
    team1: "Team Q",
    score1: 10,
    thumbnail1: "https://placehold.co/40",
    team2: "Team P",
    score2: 8,
    thumbnail2: "https://placehold.co/40",
  },
]);
</script>

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
