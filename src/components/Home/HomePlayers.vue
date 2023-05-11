<template>
  <div>
    <ul v-if="players.length">
      <li v-for="player in players" :key="player.id">
        {{ player.name }}
      </li>
    </ul>
    <div v-else>Loading players...</div>
  </div>
  <div class="home-players">
    <v-container>
      <v-row>
        <v-col class="pa-0">
          <v-sheet class="d-flex flex-column relative">
            <Transition name="rotate" appear>
              <v-card
                absolute
                :rounded="0"
                width="260"
                style="
                  border: 9px solid white;
                  bottom: 34%;
                  left: 19%;
                  z-index: 99;
                "
              >
                <img
                  src="../../assets/images/players/Def/danilo.png"
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
            </Transition>
            <v-card
              absolute
              :rounded="0"
              width="260"
              style="
                border: 9px solid white;
                left: 23%;
                bottom: 35%;
                z-index: 89;
              "
            >
              <img
                src="../../assets/images/players/Def/danilo.png"
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
            <v-card
              absolute
              :rounded="0"
              width="260"
              style="
                border: 9px solid white;
                bottom: 36%;
                left: 27%;
                z-index: 79;
              "
            >
              <img
                src="../../assets/images/players/Def/danilo.png"
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
            <v-card
              absolute
              :rounded="0"
              width="260"
              style="border: 9px solid white; bottom: 37.5%; left: 30.5%"
            >
              <img
                src="../../assets/images/players/Def/danilo.png"
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
          </v-sheet>
        </v-col>
        <v-col class="pa-0">
          <div>
            <span class="bg-grey-darken-4 px-1" style="font-size: 5.5rem"
              >Meet</span
            >
          </div>
          <div>
            <span class="bg-grey-darken-4 px-1" style="font-size: 5.5rem"
              >The</span
            >
          </div>
          <div>
            <span class="bg-grey-darken-4 px-1" style="font-size: 5.5rem"
              >Players</span
            >
          </div>
          <div>
            <router-link to="/team" tag="v-btn"
              ><v-btn :rounded="0" class="text-white pa-2 team-btn flat"
                >Meet the team</v-btn
              ></router-link
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { firebasePlayers } from "../../firebase";

export default {
  data() {
    return {
      players: [],
      errorMessage: "",
    };
  },
  mounted() {
    // const firebasePlayers = ref(db, "players");

    firebasePlayers
      .once("value")
      .then((snapshot) => {
        this.players = snapshot.val();
        console.log("firebasePlayers:", firebasePlayers);
        console.log("this.players:", this.players);
      })
      .catch((error) => {
        this.errorMessage = `Error retrieving players: ${error.message}`;
      });
  },
};
</script>

<style scoped>
.home-players {
  background-repeat: repeat;
  padding: 80px 0px;
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
.home-players .team-btn {
  background-color: #ef484d;
}
.v-container {
  width: 70%;
}
.v-card {
  position: absolute;
}
.rotate-enter-active-class {
  transition: transform 1s ease-in-out;
  transform: rotate(0);
}

.rotate-leave-active-class {
  transition: transform 1s ease-in-out;
  transform: rotate(180deg);
}
</style>
