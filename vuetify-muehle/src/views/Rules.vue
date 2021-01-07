<template>
  <div class="rules">
    <StartGame/>
    <Rules/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import StartGame from '@/components/StartGame.vue'
import Rules from '@/components/Rules.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  StartGame,
  Rules,
  Footer
  }
}
</script>