<template>
  <v-app id="inspire">
    <v-app-bar app class="grey lighten-1" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Malinowa przystań</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="grey" elevation="5" shaped @click="goToBooking()">
        Zarezerwuj
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-container>
        <v-card class="mx-auto" max-width="300" tile>
          <v-list dense>
            <v-subheader>Menu</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in urls" :key="i" :to="item.link">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-title v-text="item.name"></v-list-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-container>
    </v-navigation-drawer>
    <v-main class="grey lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    selectedItem: 1,
    urls: [
      { name: "domek", link: "/", icon: "mdi-home-variant" },
      { name: "okolica", link: "/okolica", icon: "mdi-ticket" },
    ],
  }),
  methods: {
    goToBooking() {
      window.location.href =
        "https://www.booking.com/hotel/pl/malinowa-przystan.pl.html?aid=397594;label=gog235jc-1DCAEoggI46AdIHlgDaLYBiAEBmAEeuAEXyAEM2AED6AEB-AECiAIBqAIDuAKi24eRBsACAdICJGYwNjFhNmJmLTViODUtNGExOS04ZjRmLTI3MTA1YWRlMjVjZtgCBOACAQ;sid=c2d80d131aa629e5721cdbec8a07f8b8;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1646390769;srpvid=ed3d4bb8752a023b;type=total;ucfs=1&#hotelTmpl";
    },
  },
};
</script>
