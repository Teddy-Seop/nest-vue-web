<template>
  <v-app id="inspire">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component()
export default class App extends Vue {}
</script>
