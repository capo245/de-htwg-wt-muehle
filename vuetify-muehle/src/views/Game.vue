<template>
  <div class="game">
    <ButtonGroup/>
    <morrisgame/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonGroup from '@/components/ButtonGroup.vue'
import morrisgame from '@/components/morris-game.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  ButtonGroup,
  morrisgame,
  Footer
  }
}
</script>