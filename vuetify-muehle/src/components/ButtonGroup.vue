<template>
  <v-card
    flat
    class="py-1"
    colour="blue"
  >
    <v-card-text>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <p class="text-center">
            Game Center
          </p>
        </v-col>
        <v-btn-toggle
          v-model="toggle_exclusive"
          mandatory
        >
          <v-btn color="orange lighten-1"> Rules
            <v-icon color="orange lighten-1" >mdi-help-circle</v-icon>
          </v-btn>
          <v-btn color="orange lighten-1"> New Game
            <v-icon color="orange lighten-1" >mdi-gamepad</v-icon>
          </v-btn>
          <v-btn color="orange lighten-1"> Undo
            <v-icon color="orange lighten-1" >mdi-arrow-left-circle</v-icon>
          </v-btn>
          <v-btn color="orange lighten-1"> Redo
            <v-icon color="orange lighten-1" >mdi-arrow-right-circle</v-icon>
          </v-btn>
          <v-btn color="orange lighten-1"> Safe
            <v-icon color="orange lighten-1" >mdi-download</v-icon>
          </v-btn>
          <v-btn color="orange lighten-1"> Load
            <v-icon color="orange lighten-1" >mdi-upload</v-icon>
          </v-btn>
          <v-btn color="orange lighten-1"> Quit
            <v-icon color="orange lighten-1" >mdi-skull-scan </v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
  }
</script>