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
        <tr v-for="item in posts" :key="item.name">
          <td>{{ item.title }}</td>
          <td>{{ item.writer }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class List extends Vue {
  posts = [];

  async created() {
    await this.$store.dispatch("getPosts").then((res) => {
      this.posts = res;
    });
  }
}
</script>

<style></style>
