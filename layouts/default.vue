<template>
  <v-app>
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
      <v-btn @click="searchTriger = true" text small icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <!-- <v-btn text small icon><v-icon>mdi-dots-vertical</v-icon></v-btn> -->
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in quickSettings"
            :key="i"
            @click="shareFunction(item.title)"
          >
            <v-list-tile-action>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-tile-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        class="hidden-sm-and-down"
        small
        color="grey"
        :to="item.to"
        text
        v-for="(item, i) in items"
        :key="i"
      >{{item.title}}</v-btn>
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
    </v-footer>-->
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
      searchTriger: false,
      clipped: false,
      drawer: false,
      fixed: false,
      quickSettings: [
        { title: "Profile", icon: "mdi-account-circle" },
        { title: "Alerts", icon: "mdi-bell" },
        { title: "shre", icon: "mdi-share-variant" },
        { title: "Logout", icon: "mdi-logout-variant" }
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
        {
          icon: "mdi-settings",
          title: "settings",
          to: "/settings"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "QueDEV"
    };
  },
  methods: {
    shareFunction() {
      // var text = 'Add text to share with the URL';
      // if ('share' in navigator) {
      //     navigator.share({
      //         title: document.title,
      //         text: text,
      //         url: location.href,
      //     })
      // } else {
      //     // Here we use the WhatsApp API as fallback; remember to encode your text for URI
      //     location.href = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text + ' - ') + location.href
      // }
      if (navigator.share) {
        navigator
          .share({
            title: "Web Fundamentals",
            text: "Check out Web Fundamentals — it rocks!",
            url: "https://developers.google.com/web"
          })
          .then(() => console.log("Successful share"))
          .catch(error => console.log("Error sharing", error));
      }
    }
  }
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