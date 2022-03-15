<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="locations.data.Location"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <v-text-field
              v-model="form_image"
              :rules="nameRules"
              label="Image"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              v-model="form_color"
              :rules="nameRules"
              label="Color"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              v-model="form_text"
              :rules="nameRules"
              label="Text"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              v-model="form_title"
              :rules="nameRules"
              label="Title"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              v-model="form_distance"
              :rules="nameRules"
              label="Distance"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2" align-self="center">
            <v-btn :disabled="!valid" color="info" @click="post_data">
              Wyślij
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginUser",
  data: () => ({
    locations: "",
    headers: [
      {
        text: "Image",
        align: "start",
        sortable: false,
        value: "image",
      },
      { text: "Color", value: "color" },
      { text: "Text", value: "text" },
      { text: "Title", value: "title" },
      { text: "Distance", value: "year" },
    ],
    valid: false,
    form_image: "",
    form_color: "",
    form_text: "",
    form_title: "",
    form_distance: "",
    nameRules: [(v) => !!v || "Name is required"],
    errors: [],
  }),
  mounted() {
    axios
      .get("https://exact-dove-16.hasura.app/api/rest/location", {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
        },
      })
      .then((response) => (this.locations = response));
  },
  methods: {
    async post_data() {
      try {
        await axios.post(
          "https://exact-dove-16.hasura.app/api/rest/location",
          {
            color: this.form_color,
            year: this.form_distance,
            title: this.form_title,
            image: this.form_image,
            text: this.form_text,
          },
          {
            headers: {
              "content-type": "application/json",
              "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
            },
          }
        );
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>

<style scoped></style>
