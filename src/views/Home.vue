<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6">
        <v-img
          :src="'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/283219524.jpg?k=63787b617f31ad527a2d80a283725a5beeab9928fec0154d4ed7ab4954cf8ba5&o=&hp=1'"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
        >
        </v-img>
      </v-col>
      <v-col align-self="center" sm="12" md="6">
        <v-card>
          <v-card-text>
            Obiekt Malinowa Przystań domek drewniany z ruską banią położony jest
            w miejscowości Strzepcz i oferuje prywatny basen, balkon oraz widok
            na jezioro. Obiekt oddalony jest o 46 km od miejscowści Chałupy. Na
            miejscu dostępny jest bezpłatny prywatny parking.<br /><br />
            W domku letniskowym zapewniono 2 sypialnie, kuchnię z mikrofalówką,
            telewizor z płaskim ekranem, część wypoczynkową oraz 1 łazienkę z
            prysznicem.<br /><br />
            Obiekt dysponuje placem zabaw. Okolica jest popularna wśród
            miłośników trekkingu i jazdy na rowerze. Goście mogą odprężyć się w
            ogrodzie lub we wspólnym salonie.<br /><br />
            Miejscowość Sopot jest oddalona o 45 km od obiektu, a miejscowość
            Gdynia – o 47 km. Najbliższe lotnisko, Lotnisko Gdańsk-Rębiechowo,
            znajduje się 45 km od obiektu Malinowa Przystań domek drewniany z.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="12" md="3">
        <v-img
          :src="'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/283220184.jpg?k=a6ac5ce76fd9ef8a79911a56a5645500789c3d6b188b678b88fb35298ec7d7e5&o=&hp=1'"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
          height="400px"
          width="400px"
        >
        </v-img>
      </v-col>
      <v-col sm="12" md="3">
        <v-img
          :src="'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/304143440.jpg?k=c8aa452da2b7ec507ca214df5f98af97ce97fd5add0f0bdc5c11182623da64fb&o=&hp=1'"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
          height="400px"
          width="400px"
        >
        </v-img>
      </v-col>
      <v-col sm="12" md="3">
        <v-img
          :src="'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/304143232.jpg?k=fcf94541e661a5838ac90092ea1512a650a5de11da6f5edd83d0cdd5fdfa0763&o=&hp=1'"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
          height="400px"
          width="400px"
        >
        </v-img>
      </v-col>
      <v-col sm="12" md="3">
        <v-img
          :src="'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/298209736.jpg?k=b215cbda089e6ec339cedbc53a5f3cfe5fe92398814c8fe5884a8e8298248dc4&o=&hp=1'"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"
          height="400px"
          width="400px"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: {
        sample: require("../assets/gps.png"),
      },
    };
  },
};
</script>
