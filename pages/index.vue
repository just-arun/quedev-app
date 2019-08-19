<template>
  <v-container>
    <v-layout row class="custome-container-index" style="flex-wrap: wrap-reverse;">
      <v-flex xs12 lg3 sticky>
        <v-banner sticky class="mr-1" flat text>
          <v-row class="pl-0">
            <v-col v-for="(card, i) in titems" :key="i">
            <nuxt-link to="/post/dfs">
               <v-img
               to="/post/sd"
              :src="card.src"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
            >
              <v-card-title
                v-text="card.title"
                style="width:200px; text-decoration: none;"
                class="fill-height align-end"
              ></v-card-title>
            </v-img>
            </nuxt-link>
            </v-col>
          </v-row>
        </v-banner>
      </v-flex>
      <v-flex xs12 lg9>
        <v-layout row wrap>
          <v-flex xs12 sm6 md6 lg4 v-for="(item, i) in items" :key="i">
            <v-card hover flat class="ma-2">
              <v-img class="white--text black-gradient" max-height="200px" :src="item.image"></v-img>

              <v-card-text class="pb-0">
                <v-card-title class="text--primary ml-0 pl-0 my-0 py-0">Top 10 Australian beaches</v-card-title>
              </v-card-text>
              <v-card-text class="my-0 py-0">
                <v-layout row wrap align-center>
                  <span class="ml-3">{{item.views}} views</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="item.isLike = !item.isLike"
                    icon
                    small
                    text
                    :class="{ 'red--text': item.isLike }"
                  >
                    <v-icon>{{ item.isLike ? 'mdi-heart' : 'mdi-heart-outline'}}</v-icon>
                  </v-btn>
                  <v-btn icon small text>
                    <v-icon small>mdi-share-variant</v-icon>
                  </v-btn>
                  <v-btn
                    @click="item.bookmark = !item.bookmark"
                    :class="{ 'blue--text': item.bookmark }"
                    icon
                    small
                    text
                  >
                    <v-icon>{{ item.bookmark ? 'mdi-bookmark-check' : 'mdi-bookmark' }}</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-text>
              <v-expand-transition>
                <div v-show="item.show">
                  <v-card-text>{{item.desctiption}}...</v-card-text>
                </div>
              </v-expand-transition>
              <v-card-actions>
                <v-btn to="/post/sd" text color="purple">Read more</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon small @click="item.show = !item.show">
                  <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <div class="text-center">
      <v-pagination v-model="page" :length="6" class="my-5"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img8 from "../assets/images/img8.jpg";
import img9 from "../assets/images/img9.jpg";
import img10 from "../assets/images/img10.jpg";
export default {
  data() {
    return {
      page: 1,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,

      titems: [
        { title: 'This is bullshit and deep shit', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'This is lame ass and damn ass', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
        { title: 'This is Hollyshit and Poop', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      ],
      items: [
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img1,
          views: 34,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img2,
          views: 43,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img3,
          views: 24,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img4,
          views: 33,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img5,
          views: 38,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img6,
          views: 63,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img7,
          views: 55,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img8,
          views: 62,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img9,
          views: 23,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        },
        {
          title: "item",
          desctiption:
            "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
          image: img10,
          views: 86,
          link: "item",
          show: false,
          isLike: false,
          bookmark: false
        }
      ]
    };
  },
  created() {
    // this.items.forEach(itm => {
    //   itm.show = false;
    // });
  }
};
</script>
<style>
.custome-container-index {
  margin: 5px auto;
  max-width: 1600px;
}

.black-gradient {
  position: relative;
}
.black-gradient::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top right, black rgba(255, 255, 255, 0));
}
.black-gradient::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to top right, black rgba(255, 255, 255, 0));
}
.cus-align {
  text-align: left;
  height: 100%;
  position: absolute;
  width: 200px;
  top: 60%;
}
</style>