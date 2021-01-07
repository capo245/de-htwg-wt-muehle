<template>
  <div class="game">
    <ButtonGroup/>
    <GameField/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import ButtonGroup from '@/components/ButtonGroup.vue'
import GameField from '@/components/GameField.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  ButtonGroup,
  GameField,
  Footer
  }
}
</script>