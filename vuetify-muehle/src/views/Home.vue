<template>
  <div class="home">
    <StartGame/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import StartGame from '@/components/StartGame.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    StartGame,
    Footer
  }
}
</script>
