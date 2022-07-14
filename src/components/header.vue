<template>
  <header id="header_main" class="header">
        <div class="container">
            <div id="site-header-inner">
                <div class="header__logo">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt=""></a>
                </div>
                <nav id="main-nav" class="main-nav">
                    <ul id="menu-primary-menu" class="menu">
                        <li class="menu-item  current-menu-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="menu-item">
                            <a href="#about">About</a>
                        </li>
                        <li class="menu-item">
                            <a href="#projects"> NFT</a>
                        </li>
                        <li class="menu-item">
                            <a href="#roadmap">Road Map</a>
                        </li>
                        <li class="menu-item">
                            <a href="#faq">FaQ</a>
                        </li>
                    </ul>
                </nav><!-- /#main-nav -->
                        <a class="tf-button btn-effect" href="https://discord.gg/Mu4ZMcjdqE">   
                            <span class="boder-fade"></span>                                     
                            <span class="effect">Join Discord</span>
                        </a>
                <div class="mobile-button"><span></span></div><!-- /.mobile-button -->
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style>
div.header__logo a img {
    width: 130px;
}
</style>