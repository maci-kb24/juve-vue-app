<template>
  <div class="home-subscribe">
    <v-container>
      <v-row class="mt-16 align-center justify-space-around">
        <v-col class="flex-grow-0" cols="6">
          <h1
            class="text-grey-lighten-2"
            style="font-size: 96px; line-height: 0.9; text-transform: uppercase"
          >
            Win a <br />Jersey
          </h1>
        </v-col>
        <v-col class="flex-grow-0" cols="6">
          <img src="../../assets/images/jersey.png" />
        </v-col>
      </v-row>
      <v-row class="mb-16">
        <v-col cols="4" offset="4" class="text-center">
          <h2 class="mb-2">Enter your email</h2>
          <v-form @submit.prevent="submitForm">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Enter your email"
              required
            ></v-text-field>
            <v-alert v-if="emailError" type="error">{{ emailError }}</v-alert>

            <v-btn type="submit" class="text-white enroll-btn mt-2"
              >Enroll</v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import db from "./firebase/init.js";

export default {
  data: () => ({
    email: "",
    emailError: "",
    emailRules: [
      // (value) => /.+@.+\..+/.test(value) || "Email must be valid",
      (value) => {
        if (value) {
          return true;
        }
        return "You must enter an email address.";
      },
    ],
  }),
  methods: {
    submitForm() {
      fetch(
        "https://juve-vue-app-default-rtdb.firebaseio.com/promotions.json",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: this.email }),
        }
      )
        .then((response) => {
          console.log(response);
          this.email = "";
        })
        .catch((error) => {
          console.error(error);
        });
      // this.email = "";
    },
  },
};
</script>

<style scoped>
.v-container {
  width: 70%;
}
.enroll-btn {
  background-color: #ef484d;
}
</style>
