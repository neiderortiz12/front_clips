<template>
    <div>
        <Header/>
        
            <div>
                <div v-for="clips in ListaClips" :key="clips.id" class="col-xs-6 col-sm-4 col-md-3 text-center">
                    <a href="http://www.google.com">
                        <h1>{{clips.id}}</h1>
                        <h1>{{clips.nombre}}</h1>
                        
                        
                    </a>
                </div>
                
                
            </div>

        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
    name:"Dashboard",
    data(){
        return{
            ListaClips:null,
        }
    },
    components:{
        Header,
        Footer
    },
    mounted:function(){
        let direccion = "http://localhost:8000/api/clips";
        axios.get(direccion).then(data =>{
            console.log(data);
            this.ListaClips= data.data;
        });
    }    

}
</script>

<style lang="stylus" scoped>

</style>