<template>
  <section class="page-title comimg-soon">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="header__logo">
                        <a href="index.html"><img src="assets/images/logo/logo.png" alt=""></a>
                    </div>
                    <div class="sub-heading"><span>Site</span><span>UNnder</span><span>Reconstruction</span></div>
                    <h3 data-aos="zoom-in" data-aos-duration="800">
                        <span>Coming</span><span>Soon</span>
                    </h3>
                </div>
                <div class="col-md-12">
                    <div class="featured-countdown">
                        <span class="slogan"></span>
                        <span class="js-countdown" data-timer="1865550"></span>
                        <ul class="desc">
                            <li>Days</li>
                            <li>Hours</li>
                            <li>Minutes</li>
                            <li>Seconds</li>
                        </ul>
                    </div>
                    <form action="#" class="newlletter-form" id="subscribe-form">
                        <span></span>
                        <input type="email" placeholder="Your Email Address" required="" id="subscribe-email">
                        <div class="btn-pst">
                            <button class="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span class="effect">Sign Up</span></button>
                        </div>
                    </form>
                    <router-link to="/main">Main Page</router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IntroPage'
}
</script>

<style>

</style>