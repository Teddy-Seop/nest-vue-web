<template>
  <div>
    <v-container>
      <v-row class="ma-10">
          <v-card class="mx-auto" max-width="344" outlined>
              <v-card-title>
                {{ post }}
              </v-card-title>
              <v-card-text>
                <!-- {{ this.post.contents }} -->
              </v-card-text>
          </v-card>
      </v-row>
      <v-row class="ma-10">
        
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import router from '../router/index';

@Component
export default class Post extends Vue{
    private postId: number;
    private post: Posts.IPost;

    async beforeCreate() {
      this.postId = Number(this.$route.params.id);
      this.post = await this.$store.dispatch('getPost', this.postId);
      console.log(this.post);
    }
}
</script>

<style>

</style>