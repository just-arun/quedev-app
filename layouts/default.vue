<template>
  <v-app :dark="darkThem">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :disable-resize-watcher="true"
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact color="#000">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <nuxt-link to="/" style="text-decoration:none;">
        <span class="black--text">Que</span>
        <span class="grey--text font-weight-bold">DEV</span>
      </nuxt-link>
      <v-spacer />
      <v-btn
        class="hidden-sm-and-down"
        small
        color="grey"
        :to="item.to"
        text
        v-for="(item, i) in items"
        :key="i"
      >{{item.title}}</v-btn>
      <v-btn @click="searchTriger = true" text small icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!-- <v-btn text small icon><v-icon>mdi-dots-vertical</v-icon></v-btn> -->
      <v-menu bottom right transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <div
          v-ripple
            v-for="(item, i) in quickSettings"
            :key="i">
          <v-list-item v-if="!item.to">
            <!-- <v-icon left>{{ item.icon }}</v-icon> -->
            <v-list-item-title class="px-2"
            @click="shareFunction(item.title)">
              <v-icon class="pr-2">{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>
            </v-list-item-title>
          </v-list-item>

          <!-- with link -->

          <v-list-item v-if="item.to" :to="item.to">
            <v-list-item-title class="px-2"
            @click="shareFunction(item.title)">
              <v-icon class="pr-2">{{ item.icon }}</v-icon>
              <span>{{ item.title }}</span>
            </v-list-item-title>
          </v-list-item>
          </div>

        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
    >
      <span>&copy; 2019</span>
    </v-footer>
    <Search
      v-if="searchTriger"
      v-bind:searchTriger="searchTriger"
      v-on:searchTrigerClose="searchTriger = false"
    />
  </v-app>
</template>

<script>
import Search from "../components/Search.vue";
export default {
  components: {
    Search
  },
  data() {
    return {
      darkThem: true,
      searchTriger: false,
      clipped: false,
      drawer: false,
      fixed: false,
      quickSettings: [
        { to:'/user/login', title: "Profile", icon: "mdi-account-circle" },
        { title: "Alerts", icon: "mdi-bell" },
        { title: "share", icon: "mdi-share-variant" },
        { to:'/user/logout', title: "Logout", icon: "mdi-logout-variant" }
      ],
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-file-tree",
          title: "Catogeries",
          to: "/catagories/"
        },
        {
          icon: "mdi-trending-up",
          title: "Trending",
          to: "/trending/"
        },
        {
          icon: "mdi-new-box",
          title: "Create Post",
          to: "/create/"
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "QueDEV"
    };
  },
  methods: {
    shareFunction(para) {
      if (para == "share") {
        if (navigator.share) {
          console.log("Successful share");
          navigator
            .share({
              title: "Web Fundamentals",
              text: "Check out Web Fundamentals — it rocks!",
              url: `${window.location.host}/${window.location.pathname}`
            })
            .then(() => {
              console.log(window.location.pathname);
            })
            .catch(error => console.log("Error sharing", error));
        }
      }
    }
  },
  created() {}
};
</script>

<style>
.posted-blog p {
  font-size: 1.2rem;
  margin: 2rem 0;
}
.posted-blog h1 {
  font-size: 3rem;
}
.posted-blog h2 {
  font-size: 2.7rem;
}
.posted-blog h3 {
  font-size: 2.4rem;
}
.posted-blog h4 {
  font-size: 2rem;
}
.posted-blog h5 {
  font-size: 1.7rem;
}
.posted-blog h6 {
  font-size: 1.3rem;
}

.posted-blog h1,
.posted-blog h2,
.posted-blog h3,
.posted-blog h4,
.posted-blog h5,
.posted-blog h6 {
  position: relative;
  text-transform: uppercase;
  margin-top: 1rem;
  padding-top: 0.5rem;
}

.posted-blog h1::after,
.posted-blog h2::after,
.posted-blog h3::after,
.posted-blog h4::after,
.posted-blog h5::after,
.posted-blog h6::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 0%;
  border-bottom: 1px solid;
}
.posted-blog h1::after,
.posted-blog h2::after,
.posted-blog h3::after,
.posted-blog h4::after,
.posted-blog h5::after,
.posted-blog h6::after,
.posted-blog b {
  animation: h1Animate 1s 0.8s 1 forwards linear;
}

@keyframes h1Animate {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .posted-blog h1 {
    font-size: 1.6rem;
  }
}
.posted-blog img {
  position: relative;
  width: 100%;
}
.posted-blog a {
  color: rgb(0, 0, 0);
  margin-bottom: 5px;
  text-decoration: none;
  transition: 0.3s;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.posted-blog b {
  position: relative;
}
.posted-blog a:hover {
  color: rgb(85, 85, 85);
  border-color: transparent;
}
</style>