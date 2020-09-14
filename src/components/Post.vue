<template>
  <div>
    <v-container>
      <v-row class="ma-10">
          <v-card>
              <v-card-title>
                {{ this.title }}
              </v-card-title>
              <v-card-text>
                {{ this.contents }}
              </v-card-text>
          </v-card>
      </v-row>
      <v-row class="ma-10">
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import router from '../router/index';

@Component()
export default class Post extends Vue{
    postId;
    title = "";
    contents = "";

    beforeCreate() {
        this.postId = this.$route.params.id;
    }

    created() {
        this.$store.dispatch('getPost', this.postId).then(res => {
            
        })
    }
}
</script>

<style>

</style>