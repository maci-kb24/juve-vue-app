<template>
  <div class="home-matches bg-grey-darken-4">
    <v-container>
      <v-row>
        <v-col>
          <h2 class="pa-2 d-inline-block text-white">Matches</h2>
        </v-col>
      </v-row>
      <v-row class="my-15">
        <v-col v-for="(item, id) in data" :key="id" cols="4">
          <p class="text-body-2">{{ item.date }}</p>
          <v-card class="`elevation-${18}`">
            <v-card-text class="pa-0">
              <div class="d-flex align-center">
                <img :src="item.homeThumb" />
                <p class="mr-auto text-h6 font-weight-bold">
                  {{ item.homeTeam }}
                </p>
                <span
                  class="d-inline-block pa-1 text-h4 text-white font-weight-bold"
                  style="background-color: #ef484d"
                  >{{ item.resultHome }}</span
                >
              </div>
            </v-card-text>
            <v-card-text class="pa-0 mt-1">
              <div class="d-flex align-center">
                <img :src="item.awayThumb" />
                <p class="mr-auto text-h6 font-weight-bold">
                  {{ item.awayTeam }}
                </p>
                <span
                  class="d-inline-block pa-1 text-h4 text-white font-weight-bold"
                  style="background-color: #ef484d"
                  >{{ item.ResultAway }}</span
                >
              </div>
            </v-card-text>
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
    date: "08.10.2022",
    homeTeam: "Milan",
    resultHome: 2,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/milan.png",
    awayTeam: "Juventus",
    ResultAway: 0,
    awayThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
  },
  {
    date: "02.10.2022",
    homeTeam: "Juventus",
    resultHome: 3,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
    awayTeam: "Bologna",
    ResultAway: 0,
    awayThumb:
      "http://localhost:5173/src/assets/images/logos/teams/bologna.png",
  },
  {
    date: "18.09.2022",
    homeTeam: "Monza",
    resultHome: 1,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/monza.png",
    awayTeam: "Juventus",
    ResultAway: 0,
    awayThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
  },
  {
    date: "11.09.2022",
    homeTeam: "Juventus",
    resultHome: 2,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
    awayTeam: "Salernitana",
    ResultAway: 2,
    awayThumb:
      "http://localhost:5173/src/assets/images/logos/teams/salernitana.png",
  },
  {
    date: "03.09.2022",
    homeTeam: "Fiorentina",
    resultHome: 1,
    homeThumb:
      "http://localhost:5173/src/assets/images/logos/teams/fiorentina.png",
    awayTeam: "Juventus",
    ResultAway: 1,
    awayThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
  },
  {
    date: "31.08.2022",
    homeTeam: "Juventus",
    resultHome: 2,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
    awayTeam: "Spezia",
    ResultAway: 0,
    awayThumb: "http://localhost:5173/src/assets/images/logos/teams/spezia.png",
  },
  {
    date: "27.08.2022",
    homeTeam: "Juventus",
    resultHome: 1,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
    awayTeam: "Roma",
    ResultAway: 1,
    awayThumb: "http://localhost:5173/src/assets/images/logos/teams/roma.png",
  },
  {
    date: "22.08.2022",
    homeTeam: "Sampdoria",
    resultHome: 0,
    homeThumb:
      "http://localhost:5173/src/assets/images/logos/teams/sampdoria.png",
    awayTeam: "Juventus",
    ResultAway: 0,
    awayThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
  },
  {
    date: "15.08.2022",
    homeTeam: "Juventus",
    resultHome: 3,
    homeThumb: "http://localhost:5173/src/assets/images/logos/teams/juve.png",
    awayTeam: "Sassuolo",
    ResultAway: 0,
    awayThumb:
      "http://localhost:5173/src/assets/images/logos/teams/sassuolo.png",
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
