<template>
  <v-container>
    <v-form @submit.prevent="validator()">
      <v-card class="pa-2" style="border-radius:30px 0 30px 0;max-width:500px ;margin: 10px auto;">
        <h2 class="my-2 text-center">Login</h2>
        <v-layout column>
          <v-flex xs12>
            <v-text-field
              :error="emailError"
              :error-messages="emailErrorMessage"
              color="green"
              outlined
              type="email"
              label="User Name or Email Address"
              v-model="email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              :error="pwdError"
              :error-messages="pwdErrorMessage"
              color="green"
              :append-icon="password? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="password = !password"
              :type="password ? 'password' : 'text'"
              outlined
              label="Password"
              v-model="pwd"
            ></v-text-field>
          </v-flex>
          <v-btn type="submit" xs12 outlined large color="success">Login</v-btn>
        </v-layout>
        <p class="my-2 py-2 text-center">
          Dont have a account?
          <nuxt-link class="green--text" to="/user/regester">Signup</nuxt-link>
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
      pwd: "",
      emailError: false,
      emailErrorMessage: "",
      pwdErrorMessage: "",
      pwdError: false,
      password: true
    };
  },
  methods: {
    validateEamil() {
      var em = this.email;
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(em)) {
        this.emailError = false;
        this.emailErrorMessage = "";
        return true;
      } else {
        this.emailError = true;
        this.emailErrorMessage = "Invalied Eamil Adress";
        return false;
      }
    },
    passwordValidation() {
        var pa = this.pwd;
        let hasNumber = (pa.search(/[0-9]/g) != -1);
        let hasCapital = (pa.search(/[A-Z]/g) != -1);
        let hasNoSpace = (pa.search(/ /g) == -1);
        if (!hasNumber) {
            this.pwdError = true;
            this.pwdErrorMessage = "should have atlease 1 number";
            return false;
        } else if(!hasCapital) {
            this.pwdError = true;
            this.pwdErrorMessage = "should have atlease 1 Capital letter";
            return false;
        } else if(!hasNoSpace) {
            this.pwdError = true;
            this.pwdErrorMessage = "their should be no space inbetween the words";
            return false;
        } else {
            this.pwdError = false;
            this.pwdErrorMessage = "";
            return true;
        }
    },
    validator() {
      if (this.validateEamil()) {
        console.log("email passed");
      } else {
        console.log("email failed");
      }
      if (this.passwordValidation()) {
        console.log("password passed");
      } else {
        console.log("password failed");
      }
    }
  }
};
</script>
<style>
</style>