<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col class="text-center display-1">Comments TOP5</v-col>
        </v-row>
        <v-row v-for="item of mostCommentsList" :key="item.id">
          <v-container>
            <v-card class="mx-auto text-center mb-7" max-width="500" outlined>
              <div class="pa-5">
                <h2>{{ item.title }}</h2>
              </div>
              <v-divider></v-divider>
              <div class="my-12 contents">{{ item.contents }}</div>
              <v-divider></v-divider>
              <v-row>
                <v-col class="float-left">
                  <v-icon>mdi-comment-processing</v-icon>
                  <span class="ml-2">{{ item.comments }}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col class="text-center display-1">Likes TOP5</v-col>
        </v-row>
        <v-row v-for="item of mostLikesList" :key="item.id">
          <v-container>
            <v-card class="mx-auto text-center mb-7" max-width="500" outlined>
              <div class="pa-5">
                <h2>{{ item.title }}</h2>
              </div>
              <v-divider></v-divider>
              <div class="my-12 contents">{{ item.contents }}</div>
              <v-divider></v-divider>
              <v-row>
                <v-col class="float-left">
                  <v-icon>mdi-heart</v-icon>
                  <span class="ml-2">{{ item.likes }}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { IPost } from "@/post/type/post.interface";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Main extends Vue {
  private mostCommentsList: IPost[] = [];
  private mostLikesList: IPost[] = [];
  private name: string = "kim";

  private async mounted() {
    this.mostCommentsList = await this.$store.dispatch("getMostComments");
    this.mostLikesList = await this.$store.dispatch("getMostLikes");
  }
}
</script>
