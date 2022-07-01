<template>
  <section id="projects" class="tf-section tf-project pb-mobie">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div
            class="tf-title st2 m-b60"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p class="h8 sub-title">Epiphets</p>
            <h4 class="title m-b17">NFT IMAGES</h4>
            <div class="col-md-8">
              <p class="">
                Each SonsOfHephaestus is unique & generated from over 150 traits
                including expression, physique, accessories, building tools etc.
                The SonsOfHephaestus are stored as ERC-721 tokens on the Solana
                Blockchain and purchasable at floor price of <b>2 SOL</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-container swiper mySwiper swiper-h">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper ife-swiper1 mySwiper1 swiper-v">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_1.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_2.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_3.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_4.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_5.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_6.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_7.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_8.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-container swiper mySwiper swiper-h">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper mySwiper2 swiper-v">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_9.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_10.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_5.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_4.jpeg" alt="" />
                    <div class="content">
                      <a> Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_3.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_2.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_1.jpeg" alt="" />
                    <div class="content">
                      <a>Pesky Penguins</a>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-box">
                    <img src="assets/images/nfts/haephaestus_nft_5.jpeg" alt="" />
                    <div class="content">
                      <a>Kalkeus</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: "ProjectComponent",
  mounted() {
    this.swiper1 = new Swiper(".mySwiper1 ", {
      // direction: "vertical",
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
      },
      // observer: true,
      // observeParents: true,
      // shortSwipes: false,
      // longSwipes: false,
      // allowTouchMove: true,
      // reverseDirection: true,
      // autoplay: {
      //   delay: 0.3,
      // },
      autoplay:true,
      // freeMode: true,
      speed: 2000,
      // disableOnInteraction: true,
    });


    // window.$(".mySwiper1").hover(
    //   function () {
    //     swiper1.swiper.autoplay.stop();
    //   },
    //   function () {
    //     swiper1.swiper.autoplay.start();
    //   }
    // );

    this.swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      grabCursor: true,
      loop: true,
      breakpoints: {
          0: {
              slidesPerView: 1
          },
          600: {
              slidesPerView: 4
          },
          991: {
              slidesPerView: 4
          },
          1200: {
              slidesPerView: 4
          },
      },
      // observer: true,
      // observeParents: true,
      // shortSwipes: false,
      // longSwipes: false,
      // allowTouchMove: true,
      // autoplay: {
      //   delay: 0.3, 
      //   reverseDirection: true,
      // }, 
      autoplay:true,
      // freeMode: true, 
      speed: 2200,
      // disableOnInteraction: true
    });

    // window.$(".mySwiper2").hover(function() {
    //     (swiper2).swiper.autoplay.stop();
    // }, function() {
    //     (swiper2).swiper.autoplay.start();
    // });
  },
};
</script>

<style>
.mgleft {
  margin-left: 40px;
}
</style>