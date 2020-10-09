<template>
  <v-simple-table :fixed-header="false" class="ma-10 pa-5">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">Title</th>
          <th class="text-center">User</th>
          <th class="text-center">Comment count</th>
          <th class="text-center">Like count</th>
          <th class="text-center">Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in posts" :key="item.id" @click="movePost(item.id)">
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">{{ item.writer }}</td>
          <td class="text-center">{{ item.commentCount }}</td>
          <td class="text-center">{{ item.likeCount }}</td>
          <td class="text-center">{{ item.createdAt }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { IPost } from "@/types/post";

@Component
export default class List extends Vue {
  private posts: IPost[] = [];

  async created() {
    await this.$store.dispatch("getPosts").then(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  async movePost(id: string) {
    this.$router.push({ name: "Post", params: { id: id } });
  }
}
</script>

<style></style>
