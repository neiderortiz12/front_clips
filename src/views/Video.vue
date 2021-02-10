<template>
    <div>
        <Header/>
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

        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
    name: "Video",
    data() {
        return {
        ListaClips: null,        
        };
        
    },
    components: {
        Header,
        Footer,
    },
    mounted: function () {
        let direccion = "http://localhost:8000/api/clips";
        
        axios.get(direccion,{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
            console.log(data);
            this.ListaClips= data.data;
        });
    },
}
</script>