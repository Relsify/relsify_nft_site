<template>
    <div>
      <MainPage v-show="!showIntro" />
      <IntroPage @action='showMainPage' v-show="showIntro" />
    </div>
</template>

<script>
import MainPage from './pages/Main.vue'
import IntroPage from './pages/Intro.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: '',
      showIntro: true
    }
  },
  methods: {
    showMainPage () {
      this.showIntro = false;
    }
  },
  components: {
    MainPage,
    IntroPage
  }
}
</script>

<style>

</style>
