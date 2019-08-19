<template>
  <v-container>
    <v-form @submit.prevent="validate()">
      <v-card class="pa-2" style="max-width: 500px; margin: 10px auto; border-radius: 30px 0 30px 0">
        <h2 class="my-2 text-center">SIGNUP</h2>
        <v-layout column>
          <v-flex xs12>
            <v-text-field color="green" outlined label="Email Address" v-model="email"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field color="green" outlined label="User Name" v-model="uName"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              color="green"
              :append-icon="password? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="password = !password"
              :type="password ? 'password' : 'text'"
              outlined
              label="Password"
              v-model="pwd"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              color="green"
              :error="pwd !== pwd2"
              :append-icon="password2? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="password2 = !password2"
              :type="password2 ? 'password' : 'text'"
              outlined
              label="Confirm Password"
              v-model="pwd2"
            ></v-text-field>
          </v-flex>
          <v-btn large type="submit" outlined xs12 color="success">Sigh Up</v-btn>
        </v-layout>
        <p class="my-2 py-2 text-center">
            Already have a account? <nuxt-link class="green--text" to="/user/login">Login</nuxt-link>
            <br>
            read our <nuxt-link class="green--text" to="/">Terms &amp; Conditions</nuxt-link>.
        </p>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      uName: "",
      pwd: "",
      pwd2: "",
      password: true,
      password2: true
    };
  },
  methods: {
    async validate() {},
    async signup() {}
  }
};
</script>
<style>
</style>