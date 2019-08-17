<template>
  <v-layout justify-center>
    <v-dialog v-model="searchTriger" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="$emit('searchTrigerClose')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-text-field
            class="mt-7"
            v-model="message2"
            filled
            autofocus
            clearables
          ></v-text-field>
          <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Showing results Based on your Search term</v-subheader>
          <v-list-item to="/"  @click="$emit('searchTrigerClose')">
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item  to="/post/ooi-mate" @click="$emit('searchTrigerClose')">
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
    props: ['searchTriger']
}
</script>

<style>

</style>
