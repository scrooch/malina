<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="locations.data.Location"
      :items-per-page="5"
      class="elevation-1"
      @click:row="handleClick"
    >
    </v-data-table>
    <v-container class="align-content-xl-end+">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mr-2" color="primary" v-bind="attrs" v-on="on">
            Dodaj dane
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Locations</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field
                    v-model="form_image"
                    :rules="nameRules"
                    label="Image"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field
                    v-model="form_text"
                    :rules="nameRules"
                    label="Text"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field
                    v-model="form_title"
                    :rules="nameRules"
                    label="Title"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="8" md="8">
                  <v-text-field
                    v-model="form_distance"
                    :rules="nameRules"
                    label="Distance"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="8" sm="8">
                  <v-autocomplete
                    :items="[
                      'cyan',
                      'green',
                      'pink',
                      'amber',
                      'orange',
                      'red',
                      'purple',
                      'indigo',
                      'teal',
                      'lime',
                    ]"
                    v-model="form_color"
                    :rules="nameRules"
                    label="Color"
                    required
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="post_data"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="get_data">Odświerz dane</v-btn>
    </v-container>
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
    form_image: "",
    form_color: "",
    form_text: "",
    form_title: "",
    form_distance: "",
    nameRules: [(v) => !!v || "Its required"],
    errors: [],
    post_return: "",
    dialog: false,
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
    handleClick(value) {
      console.log(value.title);
    },
    get_data() {
      axios
        .get("https://exact-dove-16.hasura.app/api/rest/location", {
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
          },
        })
        .then((response) => (this.locations = response));
    },
    async post_data() {
      try {
        await axios
          .post(
            "https://exact-dove-16.hasura.app/api/rest/Location_post",
            {
              color: this.form_color,
              image: this.form_image,
              text: this.form_text,
              title: this.form_title,
              year: this.form_distance,
            },
            {
              headers: {
                "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
              },
            }
          )
          .then(
            (response) => (this.post_return = response),
            (this.dialog = false)
          );
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>

<style scoped></style>
