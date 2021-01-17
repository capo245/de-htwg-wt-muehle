<template>

  <div class="home">
    <StartGame/>
    <Windmill/>
    <Footer/>
  </div>



</template>

<script>
// @ is an alias to /src
import StartGame from '@/components/StartGame.vue'
import Windmill from '@/components/Windmill.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    StartGame,
    Windmill,
    Footer
  }
}
</script>
