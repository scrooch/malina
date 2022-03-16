<template>
  <v-row>
    <v-col sm="4" md="4"></v-col>
    <v-col :sm="size" :md="size">
      <v-container v-if="!is_login">
        <v-form style="max-width: 400px" align="center">
          <v-text-field
            v-model="user"
            :rules="[rules.required]"
            label="Login"
            required
            @keyup.enter="validate"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
            @keyup.enter="validate"
          ></v-text-field>

          <v-btn color="success" class="mr-4" @click="validate">
            Zaloguj
          </v-btn>
        </v-form>
      </v-container>
      <v-container v-if="is_login">
        <LoginUser />
      </v-container>
    </v-col>
    <v-col sm="4" md="4"></v-col>
  </v-row>
</template>

<script>
import LoginUser from "../components/LoginUser";
export default {
  name: "AdminPanel",
  components: {
    LoginUser,
  },
  data: () => ({
    credentials: "",
    show1: false,
    is_login: false,
    user: "",
    size: 4,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  methods: {
    validate() {
      if (
        this.user === `${process.env.VUE_APP_LOGIN}` &&
        this.password === `${process.env.VUE_APP_PASSWORD}`
      ) {
        this.is_login = true;
        this.size = 12;
      }
    },
  },
};
</script>

<style scoped></style>
