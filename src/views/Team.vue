<template>
  <div class="the-team bg-grey-lighten-4 pb-12">
    <v-container fluid>
      <div class="GK">
        <v-row>
          <v-col>
            <div class="goalkeepers pt-6">
              <h1 class="text-grey-lighten-1 font-weight-medium">
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
                <img
                  :src="keeper.imageUrl"
                  alt=""
                  height="240"
                  style="background-size: cover"
                />

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
              <h1 class="text-grey-lighten-1 font-weight-medium">Defence</h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="b in 6" :key="b" cols="3">
            <v-card
              data-aos="fade-right"
              v-if="show"
              :rounded="0"
              width="260"
              style="border: 9px solid white"
            >
              <img
                src="../assets/images/players/GK/Sczeschy.png"
                alt=""
                height="240"
                style="background-size: cover"
              />

              <div class="d-flex align-center justify-space-between">
                <v-card-title class="pa-0"
                  >Luiz Da Silva<br />Danilo
                </v-card-title>
                <v-card-subtitle class="pa-0"
                  ><span
                    class="mt-8 d-inline-block text-grey-darken-1"
                    style="font-size: 7rem"
                    >6</span
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
              <h1 class="text-grey-lighten-1 font-weight-medium">Midfield</h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="c in 8" :key="c" cols="3">
            <v-card
              data-aos="fade-right"
              :rounded="0"
              width="260"
              style="border: 9px solid white"
            >
              <img
                src="../assets/images/players/GK/Sczeschy.png"
                alt=""
                height="240"
                style="background-size: cover"
              />

              <div class="d-flex align-center justify-space-between">
                <v-card-title class="pa-0"
                  >Luiz Da Silva<br />Danilo
                </v-card-title>
                <v-card-subtitle class="pa-0"
                  ><span
                    class="mt-8 d-inline-block text-grey-darken-1"
                    style="font-size: 7rem"
                    >6</span
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
              <h1 class="text-grey-lighten-1 font-weight-medium">Attack</h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="d in 6" :key="d" cols="3">
            <v-card
              data-aos="fade-right"
              :rounded="0"
              density="comfortable"
              elevation-0
              width="260"
              style="border: 9px solid white"
            >
              <img
                src="../assets/images/players/GK/Sczeschy.png"
                alt=""
                height="240"
                style="background-size: cover"
              />

              <div class="d-flex align-center justify-space-between">
                <v-card-title class="pa-0"
                  >Luiz Da Silva<br />Danilo
                </v-card-title>
                <v-card-subtitle class="pa-0"
                  ><span
                    class="mt-8 d-inline-block text-grey-darken-1"
                    style="font-size: 7rem"
                    >6</span
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
            "http://localhost:5174/src/assets/images/players/GK/Sczeschy.png",
          number: 1,
        },
        {
          name: "Mattia Perin",
          imageUrl:
            "http://localhost:5174/src/assets/images/players/GK/Perin.png",
          number: 36,
        },
        {
          name: "Carlo Pinsoglio",
          imageUrl:
            "http://localhost:5174/src/assets/images/players/GK/Pinsoglio.png",
          number: 23,
        },
      ],
      defenders: [],
      show: false,
    };
  },
  mounted() {
    AOS.init();

    this.show = true;
    fetch("https://juve-vue-app-default-rtdb.firebaseio.com/matches.json")
      .then((response) => response.json())
      .then((data) => {
        for (let id in data) {
          // this.defenders.push(data[id]);
        }
      });
  },
};
</script>

<style scoped>
.v-container {
  max-width: 97%;
}
.goalkeepers h1 {
  font-size: 5rem;
  line-height: 0.9;
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
