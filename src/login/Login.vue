<template>
  <div>
    <h1>Login Page</h1>
    <v-form>
      <v-text-field
        v-model.trim="email"
        label="Email"
        :rules="valdateEmail()"
      ></v-text-field>
      <v-text-field
        v-model.trim="password"
        label="Password"
        type="password"
        :rules="validatePassword()"
      ></v-text-field>
      <v-btn @click="submit">Login</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Validate } from "vuelidate-property-decorators";
import { required, email } from "vuelidate/lib/validators";

@Component
export default class Login extends Vue {
  @Validate({ required, email })
  private email = "";

  @Validate({ required })
  private password = "";

  private async submit() {
    if (this.$v.$invalid === false) {
      const result = await this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
      if (this.$store.getters.getUserInfo.id !== "") {
        localStorage.setItem("userId", this.$store.getters.getUserInfo.id);
        Vue.$cookies.set(
          "access_token",
          this.$store.getters.getUserInfo.accessToken,
          "1h"
        );
        this.$router.push("main");
      }
    }
  }

  private valdateEmail() {
    const error: string[] = [];
    if (!this.$v.email.required) {
      error.push("Email is required");
    } else if (!this.$v.email.email) {
      error.push("Fomat should be email");
    }
    return error;
  }

  private validatePassword() {
    const error: string[] = [];
    if (!this.$v.password.required) {
      error.push("Password is required");
    }
    return error;
  }
}
</script>

<style scoped lang="scss">
.invalid {
  color: red;
}
</style>
