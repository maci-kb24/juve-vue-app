<template>
  <div>
    <h1>Welcome to the admin dashboard</h1>
    <div>
      <h2>Register</h2>
      <RegisterForm />
    </div>
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";
</script>
