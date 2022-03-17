<template>
  <v-container>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      fixed
      color="pink accent-4"
    ></v-progress-linear>
    <v-timeline>
      <v-timeline-item
        v-for="(data_info, i) in info"
        :key="i"
        :color="data_info[1].color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${data_info[1].color}--text`"
            v-text="data_info[1].year + ' km'"
          ></span>
        </template>
        <div class="py-4">
          <h2
            :class="`headline font-weight-light mb-4 ${data_info[1].color}--text`"
          >
            {{ data_info[1].title }}
          </h2>
          <v-img :src="data_info[1].image" />
          <div>
            {{ data_info[1].text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
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
    var sortable = [];
    for (var one_data in this.locations.data.Location) {
      sortable.push([one_data, this.locations.data.Location[one_data]]);
    }
    sortable.sort((a, b) =>
      parseFloat(a[1].year) > parseFloat(b[1].year) ? 1 : -1
    );
    this.info = sortable;
    this.loading = false;
  },
  data: () => ({
    info: "",
    locations: "",
    loading: false,
  }),
};
</script>

<style scoped></style>
