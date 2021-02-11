<template>
    <div ><!--:style="myStyle"-->
        <b-container>
        <div class="dash">
            <div  v-for="clips in ListaClips" :key="clips.id">
                <video v-on:mouseover="mousehover" v-on:mouseleave="mouseleave" v-bind:controls="micasa" class="vide"  ref="video" >
                    <source :src="'http://localhost/clips' + clips.clip" type="video/mp4">
                </video>
                    
            </div>
        </div>

            <!--<b-container fluid="lg" class="bv-example-row">
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
            </b-container>-->

        </b-container>
    </div>
    
</template>

<script>
//import Header from "@/components/Header.vue";
//import Footer from "@/components/Footer.vue";
import axios from "axios";
//var x = document.getElementById("video");

export default {
    name: "Dashboard",
    data() {
        return {
        ListaClips: null,
        micasa:false        
        };
        
    },
    components: {
        //Header,
        //Footer,
    },
    methods: {
        mousehover: function(){
            this.micasa=true;
        },
        mouseleave: function(){
            this.micasa=false;
        }

        /*repro() {
            document.getElementsByTagName("video")[0].setAttributeNS("controls","true");
        },*/
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
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
    width: 98%;
    margin: auto;
    grid-gap: 5px 5px;
    padding: 10px 0;
    overflow: hidden;
}

.dash div video {
    width: 100%;
    vertical-align: top;
    height: 200px;
    object-fit: cover;
}

.dash div:hover{
    transform: scale(1.1);

}

/*
video::-webkit-media-controls {
  visibility: hidden;
}
video::-webkit-media-controls:hover {
  visibility: visible;
}
*/


.dash div {
    display: block;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 6px rgba(0, 0, 0, .6);
}
/*
display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
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
