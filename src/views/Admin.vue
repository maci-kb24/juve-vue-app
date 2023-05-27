<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="6" class="text-center mx-auto">
        <div>
          <h1 class="my-8">
            {{
              !isUserLoggedIn
                ? "Welcome to the admin dashboard"
                : "Please, Login"
            }}
          </h1>
        </div>
        <div>
          <!-- <v-btn color="primary" class="mr-4" @click="showRegisterComponent"
            >Register</v-btn
          > -->
          <!-- <v-btn color="primary" @click="showLoginComponent">Login</v-btn> -->
          <component :is="currentComponent"></component>
          <!-- <router-link
            :to="{
              name: currentComponent === 'register' ? 'register' : 'login',
            }"
          >
            {{ currentComponent === "register" ? "Register" : "Login" }}
          </router-link> -->
          <router-view></router-view>
        </div>
        <!-- <div>
          <h2>Register</h2>
          <Register />
        </div>
        <div class="mb-8">
          <h2>Login</h2>

          <Login />
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";

export default {
  components: {
    Register,
    Login,
  },
  data() {
    return {
      currentComponent: "register",
      isUserLoggedIn: false,
    };
  },
  methods: {
    showRegisterComponent() {
      this.currentComponent = "Register";
    },
    showLoginComponent() {
      this.currentComponent = "Login";
    },
  },
};
</script>
