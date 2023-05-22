<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="6" class="text-center mx-auto">
        <div class="mt-8">
          <h1>
            {{
              !isUserLoggedIn
                ? "Welcome to the admin dashboard"
                : "Please, Login"
            }}
          </h1>
        </div>
        <div>
          <h2>Register</h2>
          <Register />
        </div>
        <div class="mb-8">
          <h2>Login</h2>

          <Login />
        </div>
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
      isUserLoggedIn: false,
    };
  },
};
</script>
