<template>
  <v-card>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field label="Email"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field label="PW"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field label="PW"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="4">
        <v-text-field label="Name"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-btn @click="signup()" class="mb-4">SignUp</v-btn>
    </v-row>
  </v-card>
</template>

<script lagn="ts" src="./signup.ts"></script>
