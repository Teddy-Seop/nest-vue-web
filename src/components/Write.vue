<template>
  <v-form>
    <v-container>
      <v-row class="ma-10">
        <v-text-field
          label="TITLE"
        ></v-text-field>
      </v-row>
      <v-row class="ma-10">
        <v-textarea
          name="input-7-1"
          label="CONTENTS"
        ></v-textarea>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Vue from "vue";
import Component from 'vue-class-component';

@Component()
export default class Write extends Vue {

}
</script>

<style>

</style>