<template>
  <div>
    <Header></Header>
    <MainSlider></MainSlider>
    <AboutUs></AboutUs>
    <Project></Project>
    <Roadmap></Roadmap>
    <HowWeWork></HowWeWork>
    <Team></Team>
    <Relsify></Relsify>
    <Faq></Faq>
    <Footer></Footer>
    <Web3Options></Web3Options>
  </div>
</template>

<script>
import AboutUs from '../components/about-us.vue'
import Faq from '../components/faq.vue'
import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
import HowWeWork from '../components/how-we-work.vue'
import MainSlider from '../components/main-slider.vue'
import Project from '../components/project.vue'
import Roadmap from '../components/roadmap.vue'
import Team from '../components/team.vue'
import Web3Options from '../components/web3-options.vue'
import Relsify from '../components/relsify.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    AboutUs,
    Faq,
    Footer,
    Header,
    HowWeWork,
    MainSlider,
    Relsify,
    Project,
    Roadmap,
    Team,
    Web3Options
  }
}
</script>

<style>

</style>
