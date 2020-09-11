<template>
  <v-simple-table :fixed-header="false" class="ma-10 pa-5">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
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
import Component from 'vue-class-component';

@Component
export default class List extends Vue {
  posts = [
    {
      title: "Title1",
      writer: "Writer1"
    },
    {
      title: "Title2",
      writer: "Writer2"
    },
    {
      title: "Title3",
      writer: "Writer3"
    },
  ]
}
</script>

<style>

</style>