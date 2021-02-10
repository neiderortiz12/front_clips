<template>
    <div ><!--:style="myStyle"-->
        <Header />
<h1>Feed</h1>
        <div class="dash">
    <!--  <div  v-for="clips in ListaClips" :key="clips.id">
                    <video style="height:200px" ref="video" controls>
                        <source :src="'http://localhost/apiclips' + clips.clip" type="video/mp4">
                    </video>
            </div>
        </div>-->

            <b-container fluid="lg" class="bv-example-row">
                <b-row cols="4" class="row-cols-4" >
                    <div v-for="clips in ListaClips" :key="clips.id" class="">
                        <b-col class="videoWrapper ">
                            <div class="border border-dark rounded-lg ">
                                <video  @mouseover="repro()" width="250" height="250" id="clips.nombre" ref="video" controls>
                                    <source :src="'http://localhost/clips' + clips.clip" type="video/mp4" />
                                </video>
                                <a class="underlineHover" href="/video"><h1>{{ clips.nombre }}</h1></a>
                                
                            </div>
                        </b-col>
                            <br>
                            
                    </div>
                </b-row>
            </b-container>
        </div>

        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
var x = document.getElementById("video");

export default {
    name: "Dashboard",
    data() {
        return {
        ListaClips: null,        
        };
        
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        repro: function () {
        x.play();
        },
    },
    mounted: function () {
        let direccion = "http://localhost:8000/api/clips";
        /*axios.get({ url:direccion,
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
            this.ListaClips=data.data;
        });*/
        axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
            console.log(data);
            this.ListaClips= data.data;
        });
    },
};
</script>

<style scoped>


.dash {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
}
/*
.videoWrapper {
    position: relative;
    padding-bottom: 56.25%;  16:9 
    padding-top: 25px;
    height: 0;
}
.videoWrapper iframe {
   
    width: 100%;
    height: 100%;
}*/
</style>
