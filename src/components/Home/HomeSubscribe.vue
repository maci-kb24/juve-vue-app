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
export default {
  data: () => ({
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "You must enter an email address.";
      },
    ],
  }),
  methods: {
    submitForm() {
      console.log("email:" + this.email);
      this.email = "";
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
