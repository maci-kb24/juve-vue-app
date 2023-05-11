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
import RegisterForm from "../components/auth/RegisterForm.vue";
import LoginForm from "../components/auth/LoginForm.vue";
</script>
