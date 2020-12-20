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
      <v-btn @click="submit" class="mr-4">Login</v-btn>
      <v-btn @click="signup">SignUp</v-btn>
    </v-form>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style scoped lang="scss">
.invalid {
  color: red;
}
</style>
