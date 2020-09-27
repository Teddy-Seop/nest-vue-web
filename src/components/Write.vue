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

<script lang="ts">
import { IPost } from '@/types/post';
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Write extends Vue {
  title = "";
  contents = "";

  private async mounted() {
    if (this.$route.params.postId) {
      await this.editSetting(Number(this.$route.params.postId));
    }
  }

  private submit() {
    const post = {
      id: Number(this.$route.params.postId),
      title: this.title,
      contents: this.contents,
      userId: localStorage.getItem("userId"),
    };
    this.$store.dispatch("submitPost", post);
    this.$router.push("List");
  }

  private async editSetting(postId: number) {
    const post: IPost = await this.$store.dispatch("getPost", postId);
    this.title = post.title;
    this.contents = post.contents;
  }
}
</script>

<style></style>
