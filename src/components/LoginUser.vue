<template>
  <v-container>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      fixed
      color="pink accent-4"
    ></v-progress-linear>
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
                    :rules="floatRules"
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
      <v-dialog :value="!!current_row" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5"
              >Czy na pewno chcesz usunąć: {{ current_row }} ?</span
            >
          </v-card-title>
          <v-spacer></v-spacer>
          <v-container
            ><v-btn color="blue darken-1" text @click="current_row = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="delete_data">
              Remove
            </v-btn></v-container
          >
        </v-card>
      </v-dialog>
      <v-btn @click="get_data">Odświerz dane</v-btn>
      <v-snackbar v-model="snackbar" :timeout="timeout" color="pink accent-4">
        {{ snackbar_text }}
      </v-snackbar>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginUser",
  data: () => ({
    timeout: 2000,
    snackbar: false,
    snackbar_text: "",
    loading: "",
    locations: "",
    headers: [
      {
        text: "Distance",
        align: "start",
        sortable: true,
        value: "year",
      },
      { text: "Color", value: "color" },
      { text: "Title", value: "title" },
      { text: "Text", value: "text" },
      { text: "Image", value: "image" },
    ],
    form_image: "",
    form_color: "",
    form_text: "",
    form_title: "",
    form_distance: "",
    nameRules: [(v) => !!v || "Pole wymagane!"],
    floatRules: [(v) => (v >= 0 && !!v) || "Wprowadź ilość kilometrów"],
    errors: [],
    post_return: "",
    dialog: false,
    current_row: "",
  }),
  async mounted() {
    this.loading = true;
    await axios
      .get("https://exact-dove-16.hasura.app/api/rest/location", {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
        },
      })
      .then((response) => (this.locations = response));
    this.loading = false;
  },
  methods: {
    handleClick(value) {
      this.current_row = value.title;
    },
    handleClick2(value) {
      console.log(value.title);
    },
    async get_data() {
      this.loading = true;
      await axios
        .get("https://exact-dove-16.hasura.app/api/rest/location", {
          headers: {
            "content-type": "application/json",
            "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
          },
        })
        .then((response) => (this.locations = response));
      this.loading = false;
    },
    async delete_data() {
      try {
        await axios
          .delete("https://exact-dove-16.hasura.app/api/rest/deletelocation", {
            headers: {
              "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
            },
            data: {
              title: this.current_row,
            },
          })
          .then((response) => (this.post_return = response));
      } catch (e) {
        this.errors.push(e);
      }
      this.current_row = false;
      this.snackbar_text = "Dane zostaly usunięte z bazy";
      this.snackbar = true;
      await this.get_data();
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
          .then((response) => (this.post_return = response));
      } catch (e) {
        this.errors.push(e);
      }
      this.dialog = false;
      this.snackbar_text = "Dane zostaly wyslane do bazy";
      this.snackbar = true;
      await this.get_data();
    },
  },
};
</script>

<style scoped></style>
