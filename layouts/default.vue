<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :disable-resize-watcher="true"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="#000"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <div>
        <span class="">Que</span><span class="grey--text font-weight-bold ">DEV</span>
      </div>
      <v-spacer />
      <v-btn class="hidden-sm-and-down" small color="grey" :to="item.to" text v-for="(item, i) in items" :key="i">{{item.title}}</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-file-tree',
          title: 'Catogeries',
          to: '/catagories/'
        },
        {
          icon: 'mdi-trending-up',
          title: 'Trending',
          to: '/trending/'
        },
        {
          icon: 'mdi-new-box',
          title: 'Create Post',
          to: '/create/'
        },
        {
          icon: 'mdi-settings',
          title: 'settings',
          to: '/settings'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'QueDEV'
    }
  }
}
</script>
