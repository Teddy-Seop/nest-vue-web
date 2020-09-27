<template>
  <div>
    <v-container>
      <v-card class="mx-auto text-center" max-width="500" outlined>
        <div class="pa-5">
          <h2>{{ post.title }}</h2>
        </div>
        <v-divider></v-divider>
        <div class="mt-12 contents">{{ this.post.contents }}</div>
        <div v-if="isWriter" class="float-right">
            <v-btn class="ma-2" @click="editPost()">EDIT</v-btn>
            <v-btn class="ma-2" @click="deletePost()">DELETE</v-btn>
          </div>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import router from "../router/index";

import { IPost } from "@/types/post";

@Component
export default class Post extends Vue {
  private postId: number;
  private post: IPost = {} as IPost;
  private isWriter = false;

  private async created() {
    this.postId = Number(this.$route.params.id);
    this.post = await this.$store.dispatch("getPost", this.postId);
    this.checkUser();
  }

  private checkUser() {
    if (this.post.user.id === Number(localStorage.getItem('userId'))) {
      this.isWriter = true;
    } else {
      this.isWriter = false;
    }
  }

  private async editPost() {
    this.$router.push({ name: 'Write', params: { postId: this.postId.toString() } });
  }

  private async deletePost() {
    await this.$store.dispatch("deletePost", this.postId);
    this.$router.push('/list');
  }
}
</script>

<style scoped lang="scss">
.contents {
  height: 500px;
}
</style>
