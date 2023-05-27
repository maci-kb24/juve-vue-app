<template>
  <form @submit.prevent="LoginUser">
    <v-text-field
      v-model="email"
      :error-messages="email.errorMessage"
      :rules="[requiredRule, emailRule]"
      label="E-mail"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[requiredRule, minRule]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-btn class="me-4 text-white log-btn" type="submit"> Login </v-btn>
    <v-btn @click="LogOut" class="me-4 text-white logout-btn" type="submit">
      Log Out
    </v-btn>
  </form>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import router from "../../router"; // Update the path to your router instance

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async LoginUser() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        router.push("/auth/dashboard/dashboard");
        console.log("User logged:", user);
        // Perform any additional actions after registration
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    async LogOut() {
      try {
        signOut(auth);
        console.log("User logged out:", user);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style scoped>
.log-btn,
.logout-btn {
  background-color: #ef484d;
}
</style>
