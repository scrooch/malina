<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Kontakt</div>
        <v-list-item-title class="text-h5 mb-1">
          Iwona Maszota
        </v-list-item-title>
        <v-list-item-subtitle>+48 606 740 356</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="100">
        <v-icon v-text="'mdi-book-account'"></v-icon
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn href="tel:'+48 606 740 356">Zadzwoń</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      photos: [
        {
          url_location:
            "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/283220184.jpg?k=a6ac5ce76fd9ef8a79911a56a5645500789c3d6b188b678b88fb35298ec7d7e5&o=&hp=1",
        },
        {
          url_location:
            "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/304143440.jpg?k=c8aa452da2b7ec507ca214df5f98af97ce97fd5add0f0bdc5c11182623da64fb&o=&hp=1",
        },
        {
          url_location:
            "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/304143232.jpg?k=fcf94541e661a5838ac90092ea1512a650a5de11da6f5edd83d0cdd5fdfa0763&o=&hp=1",
        },
        {
          url_location:
            "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/298209736.jpg?k=b215cbda089e6ec339cedbc53a5f3cfe5fe92398814c8fe5884a8e8298248dc4&o=&hp=1",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
