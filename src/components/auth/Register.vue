<template>
  <form @submit.prevent="handleSubmit">
    <v-text-field
      v-model="email.value"
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

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn @click="handleReset"> clear </v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: { value: "", errorMessage: "" },
      password: "",
      show1: false,
      requiredRule: (v) => !!v || "Field is required",
      minRule: (v) => (v && v.length >= 8) || "Minimum 8 characters",
      emailRule: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Invalid email address",
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission here
      console.log(this.email.value, this.password);
    },
    handleReset() {
      this.email.value = "";
      this.email.errorMessage = "";
      this.password = "";
    },
  },
};
</script>
