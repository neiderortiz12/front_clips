<template>
    <div :style="myStyle">
        <Header />

        <div class="dash">
            <b-container fluid="lg" class="bv-example-row">
                <b-row cols="4" class="row-cols-4" >
                    <div v-for="clips in ListaClips" :key="clips.id" class="">
                        
                        <b-col class="videoWrapper ">
                            
                            <div class="border border-dark rounded-lg ">
                                <video  @mouseover="repro()" width="250" height="250" id="clips.nombre" ref="video" controls>
                                    <source :src="'http://localhost/clips' + clips.clip" type="video/mp4" />
                                </video>
                                <h1>{{ clips.nombre }}</h1>
                               
                            </div>
                            
                        </b-col>
                         <br>
                         <br>
                         <br>
                         <br><br>
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
        axios.get(direccion).then((data) => {
        console.log(data);
        this.ListaClips = data.data;
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

.videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
}
.videoWrapper iframe {
   
    width: 100%;
    height: 100%;
}
</style>