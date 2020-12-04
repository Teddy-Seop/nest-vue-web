<template>
  <div>
    <v-container>
      <v-card class="mx-auto text-center mb-7" max-width="500" outlined>
        <div class="pa-5">
          <h2>{{ post.title }}</h2>
        </div>
        <v-divider></v-divider>
        <div class="mt-12 contents">{{ this.post.contents }}</div>
        <v-divider></v-divider>
        <v-row>
          <v-col v-if="isLikes === false" class="float-left">
            <v-btn icon @click="like()">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <span>{{ this.likeCount }}</span>
          </v-col>
          <v-col v-if="isLikes === true" class="float-left">
            <v-btn icon @click="like()"><v-icon>mdi-heart</v-icon></v-btn>
            <span>{{ this.likeCount }}</span>
          </v-col>
          <v-col v-if="isWriter === true" class="float-right">
            <v-btn class="ma-2" @click="editPost()">EDIT</v-btn>
            <v-btn class="ma-2" @click="deletePost()">DELETE</v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="comment" label="Comment"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn @click="writeComment()">Comment</v-btn>
        </v-col>
      </v-row>
      <template>
        <div v-for="comment in commentsList" :key="comment.id">
          <div class="comment">
            <div>
              <span class="mr-5">{{ comment.user.name }}</span>
              <span>{{ comment.createdAt | dateTime(comment.createdAt) }}</span>
              <span class="float-right" v-if="comment.userId === userId">
                <v-btn icon @click="deleteComment(comment.id)">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </span>
            </div>
            <div>{{ comment.comment }}</div>
          </div>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { IPost } from "@/post/type/post.interface";
import { IComment } from "@/post/type/comment.interface";
import gql from "graphql-tag";

@Component
export default class Post extends Vue {
  private postId: number;
  private userId: number;
  private post: IPost = {} as IPost;
  private isWriter: boolean = false;
  private isLikes: boolean = false;
  private likeCount: number = 0;
  private commentsList: IComment[] = [];
  private comment: string = "";

  private async created() {
    this.postId = Number(this.$route.params.id);
    this.userId = Number(localStorage.getItem("userId"));
    // this.likeCount = this.post.likes.length;
    await this.fetchPost();
    // await this.checkPostWriter();
    // await this.checkLikes();
  }

  private async fetchPost() {
    const response = await this.$apollo.query({
      query: gql`
        query($postId: Int!) {
          post(postId: $postId) {
            id
            title
            contents
            writer {
              id
              email
              name
            }
            likeCount {
              likeCount
            }
            comments {
              comment
              user {
                id
                name
              }
            }
          }
        }
      `,
      variables: {
        postId: this.postId
      }
    });
    this.post = response.data.post;
    this.commentsList = response.data.post.comments;
    this.likeCount = response.data.post.likeCount.likeCount;
  }

  private async editPost() {
    this.$router.push({
      name: "Write",
      params: { postId: this.postId.toString() }
    });
  }

  private async deletePost() {
    await this.$store.dispatch("deletePost", this.postId);
    this.$router.push("/list");
  }

  private async like() {
    if (this.isLikes) {
      await this.$store.dispatch("unlikePost", {
        userId: this.userId,
        postsId: this.postId
      });
      this.isLikes = false;
      this.likeCount--;
    } else {
      await this.$store.dispatch("likePost", {
        userId: this.userId,
        postsId: this.postId
      });
      this.isLikes = true;
      this.likeCount++;
    }
  }

  private async writeComment() {
    await this.$store.dispatch("writeComment", {
      comment: this.comment,
      userId: this.userId,
      postsId: this.postId
    });
    // await this.fetchCommentList();
  }

  private async deleteComment(id: number) {
    await this.$store.dispatch("deleteComment", id);
    // await this.fetchCommentList();
  }

  private checkPostWriter() {
    if (this.post.writer.id === this.userId) {
      this.isWriter = true;
    } else {
      this.isWriter = false;
    }
  }

  private checkLikes() {
    let check = false;
    this.post.likes.map(elem => {
      if (elem.userId === this.userId) {
        check = true;
      }
    });
    if (check) {
      this.isLikes = true;
    } else {
      this.isLikes = false;
    }
  }
}
</script>

<style scoped lang="scss">
.contents {
  height: 500px;
}
.comment {
  border: 1px solid white;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
