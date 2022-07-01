<template>
  <section class="page-title comimg-soon">
        <div class="container">
            <div class="row">
                <div class="offset-md-1 col-md-10">
                    <div class="header__logo">
                        <a href="index.html"><img src="assets/images/logo/logo.png" alt=""></a>
                    </div>
                    <div class="sub-heading"><span>SONS</span><span>OF</span><span>HAEPHAESTUS</span></div>
                </div>
                <div class="offset-md-1 col-md-10">
                    <div class="" data-aos="fade-up" data-aos-duration="800">
                            <p class="para-align-l">
                                SonsOfHephaestus is a collection of 10,507 unique Relsify NFTs that doubles 
                                as an identity for our tier-1 community members on the Solana Blockchain.
                            </p>
                            <p class="para-align-l">
                                Coined as the 7 offspring of Hephaestus with 1500 fictional Incarnate each,
                                 it represents the structural prowess, governance strength, exclusivity, & reward rights within the Relsify community.
                            </p>
                            <p class="para-align-l">
                                Each SonsOfHephaestus (offspring & incarnates) are dogged exemplary builders who understands
                                 what it means to build in the face of uncertainty.
                            </p>
                            <p class="para-align-l">
                                The SonsOfHephaestus build together with Hephaestus and transcend the building ideology to physical structures.
                                 He engages with real estate developers across the globe and shows them how to remain on course.
                                 Through lame, through pain, through challenges, through trials. 
                            </p>
                            <p class="para-align-l">
                                Hephaestus shall gather his sons periodically at Lemnos, his sacred cult in the Island of Lagos,
                                 where the SonsOfHephaestus shall gather to deliberate, review, and decide the building route Hephaestus shall undertake
                            </p>
                            <p class="para-align-l">
                                Oh yea sons, hail Hephaestus!
                                A great undying builder, one who builds with so much zeal, temerity, doggedness and passion!

                            </p>
                            <p class="para-align-l">
                                One of the SonsOfHephaestus is sighted and instantly vigor and inner passion to keep at it is restored and renewed.
                            </p>
                            <p class="para-align-l">
                                From the Mount of Olympus, the crafts table of Hephaestus, 
                                those who look unto him for help to build dwelling places shall receive it.
                            </p>
                            <p class="para-align-l">
                                Though Hephaestus be secretly called Amphigýeis or Kyllopodíōn, 
                                he remains the great Polyphron, Polýmētis, Klytotékhnēs, & Khalkeús who shall be seen as Agakyltos that he truly is!
                            </p>

                            <a @click="showMainPage" class="tf-button st2 btn-effect" href="#">   
                                <span class="boder-fade"></span>                                     
                                <span class="effect">CONTINUE >>></span>
                            </a>

                            <p class="mgUpDown"><i>SonsOfHephaestus! We Keep Building...</i></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IntroPage',
    methods: {
        showMainPage() {
            this.$emit('action', 'showMainPage')
        }
    },
    emits: ['action']
}
</script>

<style>
.mgUpDown {
    margin-top: 20px;
    margin-bottom: 20px;
}

.main .page-title {
    height: auto
}

.middle-center {
    margin-left: auto;
    margin-right: auto;
}

.para-align-l {
    text-align: justify;
}

.header__logo {
    margin-top: 20px;
}
</style>