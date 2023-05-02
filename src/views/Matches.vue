<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="7" class="pr-0 bg-grey-lighten-2">
        <div class="matches">
          <div class="matches-filter d-flex">
            <div class="show-match pa-4">
              <p class="pb-1">Show Match</p>
              <v-btn-toggle v-model="showMatches">
                <v-btn
                  size="x-small"
                  class="mr-1"
                  value="all"
                  @click="showPlayed('all')"
                  >All</v-btn
                >
                <v-btn size="x-small" class="mr-1" @click="showPlayed('Yes')"
                  >Played</v-btn
                >
                <v-btn size="x-small" @click="showPlayed('No')"
                  >Not Played</v-btn
                >
              </v-btn-toggle>
            </div>
            <div class="game-result pa-4">
              <p class="pb-1">Game Result</p>
              <v-btn-toggle v-model="gameResults">
                <!-- <v-btn
                  size="x-small"
                  class="mr-1"
                  value="all"
                  @click="sortResult('all')"
                  >All</v-btn
                > -->
                <v-btn
                  size="x-small"
                  class="mr-1"
                  value="won"
                  @click="sortResult('W')"
                  >W</v-btn
                >
                <v-btn
                  size="x-small"
                  class="mr-1"
                  value="lost"
                  @click="sortResult('L')"
                  >L</v-btn
                >
                <v-btn size="x-small" value="draw" @click="sortResult('D')"
                  >D</v-btn
                >
              </v-btn-toggle>
            </div>
          </div>
          <div class="matches-info">
            <div v-for="match in filteredMatches" class="match-result d-flex">
              <div
                class="d-flex flex-column mt-4 mb-4 ml-4 pr-4"
                style="border-right: 1px solid rgba(0, 0, 58, 0.2)"
              >
                <div class="d-flex align-center mb-1">
                  <img :src="match.localThmb" alt="" width="30" height="30" />
                  <p class="mx-2">{{ match.local }}</p>
                  <p class="ml-16" style="color: #ef484d">
                    {{ match.resultLocal }}
                  </p>
                </div>
                <div class="d-flex align-center mb-1">
                  <img :src="match.awayThmb" width="30" height="30" />
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
                <td>
                  <span>{{ teams.pts }}</span>
                </td>
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
          thumbnail: "../../assets/images/logos/teams/napoli.png",
          team: "Napoli",
          win: 23,
          draw: 2,
          loss: 2,
          pts: 71,
        },
        {
          pos: 2,
          thumbnail: "../../assets/images/logos/teams/lazio.png",
          team: "Lazio",
          win: 15,
          draw: 7,
          loss: 5,
          pts: 52,
        },
        {
          pos: 3,
          thumbnail: "../../assets/images/logos/teams/inter.png",
          team: "Inter",
          win: 16,
          draw: 2,
          loss: 9,
          pts: 50,
        },
        {
          pos: 4,
          thumbnail: "../../assets/images/logos/teams/milan.png",
          team: "Milan",
          win: 14,
          draw: 6,
          loss: 7,
          pts: 48,
        },
        {
          pos: 5,
          thumbnail: "../../assets/images/logos/teams/roma.png",
          team: "Roma",
          win: 14,
          draw: 5,
          loss: 8,
          pts: 47,
        },
        {
          pos: 6,
          thumbnail: "../../assets/images/logos/teams/atalanta.png",
          team: "Juventus",
          win: 13,
          draw: 6,
          loss: 8,
          pts: 45,
        },
        {
          pos: 7,
          thumbnail: "../../assets/images/logos/teams/juve.png",
          team: "Juventus",
          win: 17,
          draw: 5,
          loss: 5,
          pts: 41,
        },
        {
          pos: 8,
          thumbnail: "../../assets/images/logos/teams/udinese.png",
          team: "Udinese",
          win: 9,
          draw: 11,
          loss: 7,
          pts: 38,
        },
        {
          pos: 9,
          thumbnail: "../../assets/images/logos/teams/fiorentina.png",
          team: "Fiorentina",
          win: 10,
          draw: 7,
          loss: 10,
          pts: 37,
        },
        {
          pos: 10,
          thumbnail: "../../assets/images/logos/teams/bologna.png",
          team: "Bologna",
          win: 10,
          draw: 7,
          loss: 10,
          pts: 37,
        },
        {
          pos: 11,
          thumbnail: "../../assets/images/logos/teams/torino.png",
          team: "Torino",
          win: 10,
          draw: 7,
          loss: 10,
          pts: 37,
        },
        {
          pos: 12,
          thumbnail: "../../assets/images/logos/teams/sassuolo.png",
          team: "Sassuolo",
          win: 10,
          draw: 6,
          loss: 11,
          pts: 36,
        },
        {
          pos: 13,
          thumbnail: "../../assets/images/logos/teams/monza.png",
          team: "Monza",
          win: 9,
          draw: 7,
          loss: 11,
          pts: 34,
        },
        {
          pos: 14,
          thumbnail: "../../assets/images/logos/teams/empoli.png",
          team: "Empoli",
          win: 6,
          draw: 10,
          loss: 11,
          pts: 28,
        },
        {
          pos: 15,
          thumbnail: "../../assets/images/logos/teams/lecce.png",
          team: "Lecce",
          win: 6,
          draw: 9,
          loss: 12,
          pts: 27,
        },
        {
          pos: 16,
          thumbnail: "../../assets/images/logos/teams/salernitana.png",
          team: "Salernitana",
          win: 6,
          draw: 9,
          loss: 12,
          pts: 27,
        },
        {
          pos: 17,
          thumbnail: "../../assets/images/logos/teams/spezia.png",
          team: "Spezia",
          win: 5,
          draw: 9,
          loss: 13,
          pts: 24,
        },
        {
          pos: 18,
          thumbnail: "../../assets/images/logos/teams/verona.png",
          team: "Verona",
          win: 4,
          draw: 7,
          loss: 16,
          pts: 19,
        },
        {
          pos: 19,
          thumbnail: "../../assets/images/logos/teams/sampdoria.png",
          team: "Sampdoria",
          win: 3,
          draw: 6,
          loss: 18,
          pts: 15,
        },
        {
          pos: 20,
          thumbnail: "../../assets/images/logos/teams/cremonese.png",
          team: "Cremonese",
          win: 1,
          draw: 10,
          loss: 16,
          pts: 13,
        },
      ],
      matches: [
        {
          localThmb: "../../assets/images/logos/teams/juve.png",
          local: "Juventus",
          resultLocal: 2,
          date: "11.09.2022",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "../../assets/images/logos/teams/salernitana.png",
          away: "Salernitana",
          resultAway: 2,
          result: "D",
          final: "Yes",
        },
        {
          localThmb: "../../assets/images/logos/teams/fiorentina.png",
          local: "Fiorentina",
          resultLocal: 1,
          date: "03.09.2022",
          stadium: "Artemio Franchi",
          referee: "Marcus",
          awayThmb: "../../assets/images/logos/teams/juve.png",
          away: "Juventus",
          resultAway: 1,
          result: "D",
          final: "Yes",
        },
        {
          localThmb: "../../assets/images/logos/teams/juve.png",
          local: "Juventus",
          resultLocal: 2,
          date: "31.08.2022",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "../../assets/images/logos/teams/spezia.png",
          away: "Spezia",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
        {
          localThmb: "../../assets/images/logos/teams/juve.png",
          local: "Juventus",
          resultLocal: 1,
          date: "27.08.2022",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "../../assets/images/logos/teams/roma.png",
          away: "Roma",
          resultAway: 1,
          result: "D",
          final: "Yes",
        },
        {
          localThmb: "../../assets/images/logos/teams/sampdoria.png",
          local: "Sampdoria",
          resultLocal: 0,
          date: "22.08.2022",
          stadium: "Marassi",
          referee: "Marcus",
          awayThmb: "../../assets/images/logos/teams/juve.png",
          away: "Juventus",
          resultAway: 0,
          result: "D",
          final: "Yes",
        },
        {
          localThmb: "../../assets/images/logos/teams/juve.png",
          local: "Juventus",
          resultLocal: 3,
          date: "15.08.2022",
          stadium: "ALianz",
          referee: "Marcus",
          awayThmb: "../../assets/images/logos/teams/sassuolo.png",
          away: "Sassuolo",
          resultAway: 0,
          result: "W",
          final: "Yes",
        },
      ],
      showMatches: "all",
      gameResults: "",
      flag: {
        imageUrl: "../../assets/images/italy-flag.png",
      },
      list: [],
    };
  },
  methods: {
    showPlayed(value) {
      if (this.showMatches === "all") {
        return this.matches;
      } else {
        this.showMatches = value;
        this.gameResults = null; // reset gameResults
      }
    },
    sortResult(value) {
      if (this.gameResults === value) {
        this.gameResults = null; // reset gameResults
      } else {
        this.gameResults = value;
      }
    },
  },

  computed: {
    filteredMatches() {
      let matches = this.matches;
      if (this.showMatches !== "all") {
        matches = matches.filter((match) => match.final === this.showMatches);
      }
      if (this.gameResults) {
        matches = matches.filter((match) => match.result === this.gameResults);
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
