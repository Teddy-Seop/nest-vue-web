<template>
  <v-form>
    <v-container>
      <v-row class="ml-10">
        <v-text-field v-model="title" label="TITLE" required></v-text-field>
      </v-row>
      <v-row>
        <v-col>
          <v-file-input
            v-model="files"
            color="deep-purple accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            outlined
            :show-size="1000"
            class="mx-10"
            @change="upload()"
          >
            <template v-slot:selection="{ index, text }">
              <v-chip
                v-if="index < 2"
                color="deep-purple accent-4"
                dark
                label
                small
              >
                {{ text }}
              </v-chip>

              <span
                v-else-if="index === 2"
                class="overline grey--text text--darken-3 mx-2"
              >
                +{{ files.length - 2 }} File(s)
              </span>
            </template>
          </v-file-input>
        </v-col>
      </v-row>
      <v-row class="ml-10">
        <v-textarea
          v-model="contents"
          label="CONTENTS"
          rows="20"
          required
        ></v-textarea>
      </v-row>
      <v-btn class="float-right mr-10" @click="submit">
        <v-icon>create</v-icon>
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
  private title = "";
  private contents = "";
  private files: File[] = [];

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
