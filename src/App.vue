<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Malinowa przystań</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn elevation="5" text rounded @click.stop="dialog = true">
        Rezerwuj
      </v-btn>
      <v-dialog v-model="dialog" max-width="350">
        <v-card>
          <v-card-title> Rezerwacja </v-card-title>

          <v-card-text>
            Jeśli chcesz zarezerwować pobyt w malinowej przystani wbierz jendą z
            opcji:
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false" :to="'/kontakt'">
              Kontakt (10% discount)
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="(dialog = false), goToBooking()"
            >
              Booking
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-layout fill-height column justify-space-between>
        <v-container>
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
        </v-container>
        <v-btn elevation="5" @click="toggleTheme" text rounded
          >Zmień motyw strony</v-btn
        >
      </v-layout>
    </v-navigation-drawer>
    <v-main>
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
    dialog: false,
    urls: [
      { name: "domek", link: "/", icon: "mdi-home-variant" },
      { name: "okolica", link: "/okolica", icon: "mdi-ticket" },
      { name: "kontakt", link: "/kontakt", icon: "mdi-book-account" },
    ],
  }),
  methods: {
    goToBooking() {
      window.location.href =
        "https://www.booking.com/hotel/pl/malinowa-przystan.pl.html?aid=397594;label=gog235jc-1DCAEoggI46AdIHlgDaLYBiAEBmAEeuAEXyAEM2AED6AEB-AECiAIBqAIDuAKi24eRBsACAdICJGYwNjFhNmJmLTViODUtNGExOS04ZjRmLTI3MTA1YWRlMjVjZtgCBOACAQ;sid=c2d80d131aa629e5721cdbec8a07f8b8;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1646390769;srpvid=ed3d4bb8752a023b;type=total;ucfs=1&#hotelTmpl";
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
