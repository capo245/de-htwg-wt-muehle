import Vue from 'vue'
import App from './App.vue'
import wb from "./registerServiceWorker";
import router from './router'
import store from "./store/index";
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import MorrisGame from './components/morris-game.vue';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import './app.scss';
import './registerServiceWorker'


Vue.use(VueParticles)
Vue.prototype.$workbox = wb;
Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


const app = new Vue(
  {
  el: '#gameboard-container',

  components: {
    MorrisGame: MorrisGame
  },

  data()
  {
    return {
      //Game stats are are obtained from outside of the component to allow for
      //reusability. In a real-world application this might come from a database
      //e.g., after login, for now this is just mocked with localStorage.
      winStats: [
        parseInt(localStorage.getItem('player0_wins') || 0),
        parseInt(localStorage.getItem('player1_wins') || 0)
      ]
    };
  },

  methods: {
    updateStats: function(playerWins)
    {
      localStorage.setItem('player0_wins',playerWins[0]);
      localStorage.setItem('player1_wins',playerWins[1]);
    }
  }
});
