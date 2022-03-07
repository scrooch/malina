<template>
  <v-container v-if="!errors">
    <v-card>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5"> Strzepcz </v-list-item-title>
          <v-list-item-subtitle
            >{{ posts.data[0].timestamp_utc.replace("T", " ") }},
            {{ posts.data[0].weather.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col class="text-h2" cols="6">
            {{ posts.data[0].temp }}&deg;C
          </v-col>
          <v-col cols="6">
            <v-img
              :src="
                'https://www.weatherbit.io/static/img/icons/' +
                posts.data[0].weather.icon +
                '.png'
              "
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle
          >{{ posts.data[0].wind_spd * 3.6 }} km/h</v-list-item-subtitle
        >
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-water</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{{ posts.data[0].rh }}%</v-list-item-subtitle>
      </v-list-item>

      <v-list class="transparent">
        <v-list-item v-for="item in forecast" :key="item.day">
          <v-list-item-title>{{ item.day }}</v-list-item-title>

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-subtitle class="text-right">
            {{ item.temp }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
  <v-container v-else>
    <v-img src="../assets/gps.png" max-height="350px"></v-img>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      errors: [],
      options: {
        method: "GET",
        url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
        params: { lat: "54.36", lon: "18.14", units: "metric", lang: "pl" },
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key":
            "7fcc98f353msh5f46a3fcdd8d5dcp1696d7jsn8abd4503fb87",
        },
      },
    };
  },
  created() {
    axios
      .request(this.options)
      .then((response) => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped></style>
