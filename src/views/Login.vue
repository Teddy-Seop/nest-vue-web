<template>
  <div>
    <h1>Login Page</h1>
    <v-form>
      <v-text-field v-model="email" label="Email"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      <v-btn @click="submit">Login</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Login extends Vue {
  private email = "";
  private password = "";

  private async submit() {
    const result = await this.$store.dispatch("login", {
      email: this.email,
      password: this.password
    });

    if (this.$store.getters.getUserInfo.id !== '') {
      localStorage.setItem("userId", this.$store.getters.getUserInfo.id);
      localStorage.setItem("accessToken", this.$store.getters.getUserInfo.accessToken);
      this.$router.push("home");
    }
  }
}
</script>

<style></style>
