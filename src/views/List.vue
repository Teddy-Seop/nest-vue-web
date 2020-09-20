<template>
  <v-simple-table :fixed-header="false" class="ma-10 pa-5">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">User</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in posts" :key="item.id" @click="movePost(item.id)">
          <td>{{ item.title }}</td>
          <td>{{ item.user.name }}</td>
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
    });
    console.log(this.posts);
  }

  async movePost(id: string) {
    this.$router.push({ name: "Post", params: { id: id } });
  }
}
</script>

<style></style>
