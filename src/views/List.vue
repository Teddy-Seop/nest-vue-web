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
import gql from "graphql-tag";
import Component from "vue-class-component";
import { IPostList } from "@/types/post";

@Component
export default class List extends Vue {
  private posts: IPostList[] = [];

  async mounted() {
    await this.fetchPosts();
  }

  async fetchPosts() {
    await this.$apollo
      .query({
        query: gql`
          query getPostList {
            getPostList {
              id
              title
              contents
              commentCount
              likeCount
              writer
              createdAt
            }
          }
        `
      })
      .then(res => {
        this.posts = res.data.getPostList;
      });
  }

  async movePost(id: string) {
    this.$router.push({ name: "Post", params: { id: id } });
  }
}
</script>

<style></style>
