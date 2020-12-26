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
import { IPost } from "@/post/type/post.interface";
import gql from "graphql-tag";
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

  private async submit() {
    const post = {
      id: Number(this.$route.params.postId),
      title: this.title,
      contents: this.contents,
      userId: Number(localStorage.getItem("userId")),
    };

    await this.$apollo.mutate({
      mutation: gql`
        mutation savePost($post: PostInputType!) {
          savePost(post: $post)
        }
      `,
      variables: {
        post,
      },
    });
    this.$router.push("List");
  }

  private async editSetting(postId: number) {
    const { data } = await this.$apollo.query({
      query: gql`
        query getPost($postId: Int!) {
          post(postId: $postId) {
            id
            title
            contents
            userId
            createdAt
          }
        }
      `,
      variables: {
        postId,
      },
    });
    const post: IPost = data.post;
    this.title = post.title;
    this.contents = post.contents;
  }
}
</script>

<style></style>
