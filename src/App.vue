<template>
  <v-app id="inspire">
    <v-app-bar app class="grey lighten-1" flat>
      <v-container class="py-0 fill-height">
        <v-btn shaped elevation="5" @click="goToHome()"> Domek </v-btn>
        <v-btn shaped elevation="5" @click="goToLocation()" class="ml-3">
          Okolica
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="grey" elevation="5" shaped @click="goToBooking()">
          Zarezerwuj</v-btn
        >
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToLocation() {
      this.$router.push("/okolica");
    },
    goToBooking() {
      window.location.href =
        "https://www.booking.com/hotel/pl/malinowa-przystan.pl.html?aid=397594;label=gog235jc-1DCAEoggI46AdIHlgDaLYBiAEBmAEeuAEXyAEM2AED6AEB-AECiAIBqAIDuAKi24eRBsACAdICJGYwNjFhNmJmLTViODUtNGExOS04ZjRmLTI3MTA1YWRlMjVjZtgCBOACAQ;sid=c2d80d131aa629e5721cdbec8a07f8b8;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1646390769;srpvid=ed3d4bb8752a023b;type=total;ucfs=1&#hotelTmpl";
    },
  },
};
</script>
