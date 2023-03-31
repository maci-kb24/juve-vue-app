<template>
  <div class="the-team bg-grey-lighten-4 pb-12">
    <v-container fluid>
      <div class="GK">
        <v-row>
          <v-col>
            <div class="goalkeepers pt-6">
              <h1 class="text-grey-lighten-1 text-h1 font-weight-medium">
                Goalkeepers
              </h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="keeper in keepers" cols="3">
            <v-slide-x-transition class="slide-card">
              <v-card
                v-if="show"
                :rounded="0"
                width="260"
                style="border: 9px solid white"
              >
                <v-img :aspect-ratio="1" :src="keeper.imageUrl"></v-img>
                <div class="d-flex align-center justify-space-between">
                  <v-card-title class="pa-0">{{ keeper.name }} </v-card-title>
                  <v-card-subtitle class="pa-0"
                    ><span
                      class="mt-8 d-inline-block text-grey-darken-1"
                      style="font-size: 7rem"
                      >{{ keeper.number }}</span
                    >
                  </v-card-subtitle>
                </div>
              </v-card>
            </v-slide-x-transition>
          </v-col>
        </v-row>
      </div>
      <div class="Defenders">
        <v-row>
          <v-col>
            <div class="defenders pt-6">
              <h1 class="text-grey-lighten-1 font-weight-medium text-h1">
                Defence
              </h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="defender in defenders" cols="3">
            <v-card
              data-aos="fade-right"
              v-if="show"
              :rounded="0"
              width="260"
              style="border: 9px solid white"
            >
              <v-img :aspect-ratio="1" :src="defender.imageUrl"></v-img>
              <div class="d-flex align-center justify-space-between">
                <v-card-title class="pa-0">{{ defender.name }} </v-card-title>
                <v-card-subtitle class="pa-0"
                  ><span
                    class="mt-8 d-inline-block text-grey-darken-1"
                    style="font-size: 7rem"
                    >{{ defender.number }}</span
                  >
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="Midfielders">
        <v-row>
          <v-col>
            <div class="midfield pt-6">
              <h1 class="text-grey-lighten-1 font-weight-medium text-h1">
                Midfield
              </h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="midfield in midfielders" cols="3">
            <v-card
              data-aos="fade-right"
              :rounded="0"
              width="260"
              style="border: 9px solid white"
            >
              <v-img :aspect-ratio="1" :src="midfield.imageUrl"></v-img>
              <div class="d-flex align-center justify-space-between">
                <v-card-title class="pa-0">{{ midfield.name }} </v-card-title>
                <v-card-subtitle class="pa-0"
                  ><span
                    class="mt-8 d-inline-block text-grey-darken-1"
                    style="font-size: 7rem"
                    >{{ midfield.number }}</span
                  >
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div class="Attack">
        <v-row>
          <v-col>
            <div class="attack pt-6">
              <h1 class="text-grey-lighten-1 font-weight-medium text-h1">
                Attack
              </h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="attack in attackers" cols="3">
            <v-card
              data-aos="fade-right"
              :rounded="0"
              density="comfortable"
              elevation-0
              width="260"
              style="border: 9px solid white"
            >
              <v-img :aspect-ratio="1" :src="attack.imageUrl"></v-img>

              <div class="d-flex align-center justify-space-between">
                <v-card-title class="pa-0">{{ attack.name }} </v-card-title>
                <v-card-subtitle class="pa-0"
                  ><span
                    class="mt-8 d-inline-block text-grey-darken-1"
                    style="font-size: 7rem"
                    >{{ attack.number }}</span
                  >
                </v-card-subtitle>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  data() {
    return {
      keepers: [
        {
          name: "Wojciech Szczesny",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/GK/Sczeschy.png",
          number: 1,
        },
        {
          name: "Mattia Perin",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/GK/Perin.png",
          number: 36,
        },
        {
          name: "Carlo Pinsoglio",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/GK/Pinsoglio.png",
          number: 23,
        },
      ],
      defenders: [
        {
          name: "Mattia De Sciglio",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Def/DeSciglio.png",
          number: 2,
        },
        {
          name: "Gelson Bremer",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Def/Bremer.png",
          number: 3,
        },
        {
          name: "Luiz Da Silva Danilo",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Def/danilo1.png",
          number: 6,
        },
        {
          name: "Alex Sandro",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Def/AlexSandro.png",
          number: 12,
        },
        {
          name: "Leonardo Bonucci",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Def/Bonucci.png",
          number: 19,
        },
        {
          name: "Federico Gatti",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Def/Gatti.png",
          number: 15,
        },
      ],
      midfielders: [
        {
          name: "Manuel Locatelli",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Locatelli.png",
          number: 5,
        },
        {
          name: "Paul Pogba",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Pogba.png",
          number: 10,
        },
        {
          name: "Juan Cuadrado",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Cuadrado.png",
          number: 11,
        },
        {
          name: "Filip Kostic",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Kostic.png",
          number: 17,
        },
        {
          name: "Fabio Miretti",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Miretti.png",
          number: 20,
        },
        {
          name: "Adrien Rabiot",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Rabiot.png",
          number: 25,
        },
        {
          name: "Leandro Paredes",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Paredes.png",
          number: 32,
        },
        {
          name: "Nicolo Fagioli",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Mid/Fagioli.png",
          number: 44,
        },
      ],
      attackers: [
        {
          name: "Federico Chiesa",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Att/Chiesa.png",
          number: 7,
        },
        {
          name: "Dusan Vlahovic",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Att/Vlahovic.png",
          number: 9,
        },
        {
          name: "Arkadiusz Milik",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Att/Milik.png",
          number: 14,
        },
        {
          name: "Moise Kean",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Att/Kean.png",
          number: 18,
        },
        {
          name: "Angel Di Maria",
          imageUrl:
            "http://localhost:5173/src/assets/images/players/Att/DiMaria.png",
          number: 22,
        },
      ],
      show: false,
    };
  },
  mounted() {
    AOS.init();

    this.show = true;
    // fetch("https://juve-vue-app-default-rtdb.firebaseio.com/matches.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     for (let id in data) {
    //       this.defenders.push(data[id]);
    //     }
    //   });
  },
};
</script>

<style scoped>
.the-team {
  background-repeat: repeat;
  background-image: linear-gradient(
    129deg,
    #000000 7.14%,
    #ffffff 7.14%,
    #ffffff 50%,
    #000000 50%,
    #000000 57.14%,
    #ffffff 57.14%,
    #ffffff 100%
  );
  background-size: 9.01px 11.12px;
}

.v-container {
  max-width: 97%;
}

.v-col-3 {
  flex: 0 0 21%;
  max-width: 21%;
}

.slide-card-enter-active {
  transition: transform 1s;
  transform: translateX(-350%);
}
.slide-card-leave-active {
  transition: transform 1s;
  transform: translateX(350%);
}
</style>
