<template>
  <v-card>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field
          label="Email"
          v-model="signupInfo.email"
          :rules="emailFormatValidation()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field
          label="PW"
          v-model="signupInfo.password"
          :rules="passwordFormatValidation()"
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field
          label="PW"
          v-model="signupInfo.passwordCheck"
          :rules="passwordCheckFormatValidation()"
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field
          label="Name"
          v-model="signupInfo.name"
          :rules="nameFormatValidation()"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-btn @click="signup()" class="mb-4">SignUp</v-btn>
    </v-row>
  </v-card>
</template>

<script lagn="ts" src="./signup.ts"></script>
