<template>
  <v-form>
    <v-container>
      <v-row class="ma-10">
        <v-text-field v-model="title" label="TITLE" required></v-text-field>
      </v-row>
      <v-row class="ma-10">
        <v-textarea
          v-model="contents"
          label="CONTENTS"
          rows="20"
          required
        ></v-textarea>
      </v-row>
      <v-btn class="float-right mr-10" @click="submit">
        <v-icon>SAVE</v-icon>
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component()
export default class Write extends Vue {
  title = "";
  contents = "";

  submit() {
    const post = {
      title: this.title,
      contents: this.contents,
    };
    this.$store.dispatch("submitPost", post);
  }
}
</script>

<style></style>
