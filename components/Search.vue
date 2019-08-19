<template>
  <v-layout justify-center style="">
    <v-dialog v-model="searchTriger" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>

      <v-card>
        <v-form @submit.prevent="fetchData()">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$emit('searchTrigerClose')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            class="mt-7"
            full-width
            style="width: 90%;"
            placeholder="enter your search term"
            v-model="searchTerms"
            filled
            autofocus
            clearable
          ></v-text-field>
          <v-btn type="submit" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        </v-form>
        <v-list three-line subheader>
          <v-subheader>Showing results Based on your Keyword</v-subheader>
          <v-list-item
            v-for="(item, i) in searchItem"
            :key="i"
            :to="item.to"
            @click="$emit('searchTrigerClose')"
          >
            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
              <v-list-item-subtitle>{{item.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-layout style="height:70vh;max-width:100vw;overflow:hidden;" row wrap align-center justify-center>
          <v-progress-circular v-if="intimate" :indeterminate="intimate" :size="50" color="red"></v-progress-circular>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["searchTriger"],
  data() {
    return {
      searchTerms: "",
      intimate: false,
      searchItem: [
        // {
        //   to: "/",
        //   title: "Blogs",
        //   description:
        //     "Require password for purchase or use password to restrict purchase"
        // },
        // {
        //   to: "/post/ooi-mate",
        //   title: "Motherboard",
        //   description:
        //     "Set the content filtering level to restrict apps that can be downloaded"
        // },
        // {
        //   to: "/ret",
        //   title: "Blogs",
        //   description:
        //     "Require password for purchase or use password to restrict purchase"
        // },
        // {
        //   to: "/post/ooi-mate",
        //   title: "Motherboard",
        //   description:
        //     "Set the content filtering level to restrict apps that can be downloaded"
        // }
      ]
    };
  },
  methods: {
    async fetchData() {
      this.searchItem = [];
      if (this.searchTerms.length > 0) {
        this.intimate = true;
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(json => json.json())
          .then(data => {
            setTimeout(() => {
              this.searchItem = data;
            }, 1000);
          })
          .catch(err => console.log(err));
        if (this.searchItem.length > 0) {
            this.intimate = false;
        }
      }
    }
  }
};
</script>

<style>
</style>
