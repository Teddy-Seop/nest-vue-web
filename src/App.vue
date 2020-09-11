<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="black"
    >
      <v-app-bar-nav-icon class="mr7" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- <v-icon
        class="mx-4"
        large
      >
        mdi-youtube
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title> -->
      <v-row
        align="center"
        style="max-width: 450px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
          class="ml-7"
        ></v-text-field>
      </v-row>
      <v-spacer></v-spacer>
      <v-row class="justify-end mr-7" link>
        <v-btn icon @click="write">
          <v-icon large>mdi-pencil-box-outline</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Component from 'vue-class-component';

@Component()
export default class App extends Vue {
  drawer = false;
  items = [
    { icon: 'mdi-home', text: 'HOME', link: '/' },
    { icon: 'mdi-clipboard-text-outline', text: 'LIST', link: '/list' },
    { icon: 'mdi-account-circle', text: 'MyPage', link: '/mypage' }
  ]
  items2 = [
    { picture: 28, text: 'Joseph' },
    { picture: 38, text: 'Apple' },
    { picture: 48, text: 'Xbox Ahoy' },
    { picture: 58, text: 'Nokia' },
    { picture: 78, text: 'MKBHD' },
  ]

  created () {
    this.$vuetify.theme.dark = true
  }

  write() {
    console.log('write')
    this.$router.push('/write')
  }
}
</script>