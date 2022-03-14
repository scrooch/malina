<template>
  <v-container>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in info.data.Location"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{ year.title }}
          </h2>
          <v-img :src="year.image" />
          <div>
            {{ year.text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    axios
      .get("https://exact-dove-16.hasura.app/api/rest/location", {
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret": `${process.env.VUE_APP_HASURA_SECRET}`,
        },
      })
      .then((response) => (this.info = response));
  },
  data: () => ({
    info: "",
    years: [
      {
        color: "cyan",
        year: "14,5 km",
        title: "Kaszubski Park Gigantów",
        image:
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2CLQ4S1ijr-YgCD6RbVcfpVT4j2SOVZYvfKyPknI7kTt-80QMWtPH2h2XuIGAiE43b53_YU1jkKPBAQ",
        text: "W sąsiedztwie popularnego Kaszubskiego Parku Miniatur w Stryszej Budzie pod Kartuzami znajduje się Kaszubski Park Gigantów. Można tam zobaczyć wielkie przedmioty, owady w wymiarze XXL, mega ryby, monster truck, prawdziwy samolot o długości niespełna 40m, kącik najmłodszych z kulkolandią i nowość - potężne ptaki.",
      },
      {
        color: "green",
        year: "1970",
        title: "YOUR TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "pink",
        year: "1980",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "amber",
        year: "1990",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "orange",
        year: "2000",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "red",
        year: "2001",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "purple",
        year: "2002",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "indigo",
        year: "2003",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "teal",
        year: "2004",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
      {
        color: "lime",
        year: "2005",
        title: "TITLE",
        text:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola\n" +
          "          imperdiet nec ut, sed euismod convenire principes at. Est et nobis\n" +
          "          iisque percipit, an vim zril disputando voluptatibus, vix an salutandi\n" +
          "          sententiae.",
      },
    ],
  }),
};
</script>

<style scoped></style>
