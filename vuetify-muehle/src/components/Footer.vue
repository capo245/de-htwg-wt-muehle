<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-clipboard-list',
        'mdi-google-controller',
        'mdi-book-open-page-variant',
        'mdi-github',
      ],
    }),
  }
</script>