<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="7" class="pr-0 bg-grey-lighten-2">
        <div class="matches">
          <div class="matches-filter d-flex">
            <div class="show-match pa-4">
              <p class="pb-1">Show Match</p>
              <v-btn-toggle v-model="showMatch">
                <v-btn
                  size="x-small"
                  class="mr-1"
                  value="all"
                  @click="selectValue('all')"
                  >All</v-btn
                >
                <v-btn size="x-small" class="mr-1" @click="selectValue('Yes')"
                  >Played</v-btn
                >
                <v-btn size="x-small" @click="selectValue('No')"
                  >Not Played</v-btn
                >
              </v-btn-toggle>
            </div>
            <!-- <div class="game-result pa-4">
              <p class="pb-1">Game Result</p>
              <v-btn-toggle v-model="gameResult">
                <v-btn
                  size="x-small"
                  class="mr-1"
                  value="won"
                  @click="selectValue('W')"
                  >W</v-btn
                >
                <v-btn
                  size="x-small"
                  class="mr-1"
                  value="lost"
                  @click="selectValue('L')"
                  >L</v-btn
                >
                <v-btn size="x-small" value="draw" @click="selectValue('D')"
                  >D</v-btn
                >
              </v-btn-toggle>
            </div> -->
          </div>
          <div class="matches-info">
            <div v-for="match in filteredMatches" class="match-result d-flex">
              <div
                class="d-flex flex-column mt-4 mb-4 ml-4 pr-4"
                style="border-right: 1px solid rgba(0, 0, 58, 0.2)"
              >
                <div class="d-flex align-center mb-1">
                  <img :src="match.localThmb" alt="" width="40" height="40" />
                  <p class="mx-2">{{ match.local }}</p>
                  <p class="ml-16" style="color: #ef484d">
                    {{ match.resultLocal }}
                  </p>
                </div>
                <div class="d-flex align-center mb-1">
                  <img :src="match.awayThmb" width="40" height="40" />
                  <p class="mx-2">{{ match.away }}</p>
                  <p class="ml-auto" style="color: #ef484d">
                    {{ match.resultAway }}
                  </p>
                </div>
              </div>
              <div class="d-flex flex-column justify-center ml-4">
                <p>
                  Date: <span class="font-weight-light">{{ match.date }}</span>
                </p>
                <p>
                  Stadium:
                  <span class="font-weight-light">{{ match.stadium }}</span>
                </p>
                <p>
                  Referee:
                  <span class="font-weight-light">{{ match.referee }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="pl-0">
        <div class="league-table">
          <div class="league-table-title d-flex align-center px-4">
            <img :src="flag.imageUrl" alt="" width="35" height="35" />
            <h1 class="text-white pa-4">Seria A</h1>
          </div>
          <v-table theme="dark" cols="5">
            <thead>
              <tr>
                <th class="text-left">Pos</th>
                <th class="text-left">Team</th>
                <th class="text-left">W</th>
                <th class="text-left">D</th>
                <th class="text-left">L</th>
                <th class="text-left">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="teams in league">
                <td>{{ teams.pos }}</td>
                <td><img :src="teams.thumbnail" alt="" /> {{ teams.team }}</td>
                <td>{{ teams.win }}</td>
                <td>{{ teams.draw }}</td>
                <td>{{ teams.loss }}</td>
                <td>{{ teams.pts }}</td>
              </tr>
            </tbody>
          </v-table>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      league: [
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
        {
          pos: 1,
          thumbnail:
            "http://localhost:5173/src/assets/images/logos/juve_logo-table.png",
          team: "Juventus",
          win: 23,
          draw: 5,
          loss: 1,
          pts: 91,
        },
      ],
      matches: [
        {
          localThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          local: "Milan",
          resultLocal: 2,
          date: "2023",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          away: "Juventus",
          resultAway: 1,
          result: "W",
          final: "Yes",
        },
        {
          localThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          local: "Milan",
          resultLocal: 2,
          date: "2023",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          away: "Juventus",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
        {
          localThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          local: "Milan",
          resultLocal: 2,
          date: "2023",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          away: "Juventus",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
        {
          localThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          local: "Milan",
          resultLocal: 2,
          date: "2023",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          away: "Juventus",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
        {
          localThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          local: "Milan",
          resultLocal: 2,
          date: "2023",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "http://localhost:5173/src/assets/images/italy-flag.png",
          away: "Juventus",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
        {
          localThmb:
            "http://localhost:5173/src/assets/images/logos/teams/milan.png",
          local: "Milan",
          resultLocal: 2,
          date: "2023",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb:
            "http://localhost:5173/src/assets/images/logos/teams/juve.png",
          away: "Juventus",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
      ],
      showMatch: "all",
      gameResult: null,
      flag: {
        imageUrl: "http://localhost:5173/src/assets/images/italy-flag.png",
      },
    };
  },
  methods: {
    selectValue(value) {
      if (this.showMatch && this.gameResult === value) {
        this.showMatch = "all";
        return this.matches;
      } else {
        this.showMatch = value;
      }
    },
  },
  computed: {
    filteredMatches() {
      let matches = this.matches;
      if (this.showMatch !== "all") {
        matches = matches.filter((match) => match.final === this.showMatch);
      }
      if (this.gameResult) {
        matches = matches.filter((match) => match.result === this.gameResult);
      }
      return matches;
    },
  },
  mounted() {
    // fetch("https://juve-vue-app-default-rtdb.firebaseio.com/matches.json")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     for (let id in data) {
    //       this.matches.push(data[id]);
    //     }
    //   });
  },
};
</script>

<style scoped>
.league-table-title {
  background-color: #212121;
}
.matches-filter {
  border-bottom: 1px solid #000003;
}
.show-match,
.game-result {
  border-right: 1px solid #000003;
}
.match-result {
  border-bottom: 1px solid rgba(0, 0, 58, 0.5);
}
</style>
