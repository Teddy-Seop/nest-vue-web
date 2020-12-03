<template>
  <v-container if="isLoading">
    <v-simple-table :fixed-header="false" class="ma-10 pa-5">
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
          <td class="text-center">{{ item.writer.name }}</td>
          <td class="text-center">{{ item.commentCount.commentCount }}</td>
          <td class="text-center">{{ item.likeCount.likeCount }}</td>
          <td class="text-center">{{ item.createdAt }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-pagination
      v-model="page"
      class="my-4"
      :length="pageLength"
      :total-visible="10"
      :click="fetchPosts(page)"
    ></v-pagination>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import Component from "vue-class-component";
import { IPostList } from "@/post/type/post.interface";

@Component
export default class List extends Vue {
  private isLoading = false;
  private posts: IPostList[] = [];
  private page = 1;
  private pageLength = 1;

  async mounted() {
    await this.fetchPosts(this.page);
  }

  async fetchPosts(page?: number) {
    this.isLoading = false;

    const response = await this.$apollo.query({
      query: gql`
        query($page: Int!) {
          postList(page: $page) {
            id
            title
            contents
            createdAt
            writer {
              name
            }
            commentCount {
              commentCount
            }
            likeCount {
              likeCount
            }
          }
          totalPostCount
        }
      `,
      variables: {
        page: page
      }
    });

    this.posts = response.data.postList;
    this.pageLength = Math.ceil(response.data.totalPostCount / 30);
    this.isLoading = true;
  }

  async movePost(id: string) {
    this.$router.push({ name: "Post", params: { id: id } });
  }
}
</script>

<style></style>
