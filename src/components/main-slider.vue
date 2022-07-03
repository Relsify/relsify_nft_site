<template>
     <section class="page-title">
        <div class="swiper-container slider-main">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="slider-st1">
                        <div class="overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="box-slider">
                                        <div class="content-box">
                                            <h1 class="title" id="main-slider-title">THE ONLY OPTION <span><br>IS TO BUILD</span></h1>
                                            <p class="sub-title">From the Mount of Olympus, the crafts table of Hephaestus, 
                                                those who look unto him for help to build dwelling places shall receive it 
                                                and the SonsOfHephaestus shall be known as great undying builders from Lemnos.
                                                </p>
                                            <div class="wrap-btn">
                                                <a href="#" class="tf-button-st2 btn-effect" data-toggle="modal" data-target="#popup_bid"><span class="effect">Mint NFT</span></a>
                                                <a href="https://www.youtube.com" class="tf-button btn-effect popup-youtube">
                                                    <span class="boder-fade"></span>                                     
                                                    <span class="effect">watch video</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="image">
                                            <img src="assets/images/slider-item-image.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <!-- <div class="btn-next-main"><i class="far fa-angle-right"></i></div>
            <div class="btn-prev-main"><i class="far fa-angle-left"></i></div>
            <div class="swiper-pagination"></div> -->
        </div>
    </section>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: "MainSliderComponent",
    mounted() {
        new Swiper(".slider-main", {
            slidesPerView: 1,
            loop: false, 
            spaceBetween: 0,
            navigation: {
                nextEl: ".btn-next-main",
                prevEl: ".btn-prev-main",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                1280: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });
    }
}
</script>

<style>
.box-slider .content-box .title {
    font-size: 45px;
}
@media only screen and (max-width: 1200px) {
    div > h1#main-slider-title {
        font-size: 50px;
    }
}

@media only screen and (max-width: 991px) {
    div > h1#main-slider-title {
        font-size: 50px;
    }
}

@media only screen and (max-width: 767px) {
    div > h1#main-slider-title {
        font-size: 50px;
    }
}

@media only screen and (max-width: 600px) {
    div > h1#main-slider-title {
        font-size: 50px;
    }
}

@media only screen and (max-width: 480px) {
    div > h1#main-slider-title {
        font-size: 35px;
    }
    .page-title .wrap-btn .tf-button, .page-title .wrap-btn .tf-button-st2 {
    width: 100%;
}
}
</style>