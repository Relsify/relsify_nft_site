<template>
  <div id="wrapper">
    <Header></Header>
    <MainSlider></MainSlider>
    <AboutUs></AboutUs>
    <Project></Project>
    <RoadMap></RoadMap>
    <HowWeWork></HowWeWork>
    <Team></Team>
    <LatestNews></LatestNews>
    <Partner></Partner>
    <Faq></Faq>
    <Footer></Footer>
    <Web3Options></Web3Options>
  </div>
</template>

<script>
import AboutUs from './components/about-us.vue'
import Faq from './components/faq.vue'
import Footer from './components/footer.vue'
import Header from './components/header.vue'
import HowWeWork from './components/how-we-work.vue'
import LatestNews from './components/latest-news.vue'
import MainSlider from './components/main-slider.vue'
import Partner from './components/partner.vue'
import Project from './components/project.vue'
import Roadmap from './components/roadmap.vue'
import Team from './components/team.vue'
import Web3Options from './components/web3-options.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    AboutUs,
    Faq,
    Footer,
    Header,
    HowWeWork,
    LatestNews,
    MainSlider,
    Partner,
    Project,
    Roadmap,
    Team,
    Web3Options
  }
}
</script>

<style>

</style>
