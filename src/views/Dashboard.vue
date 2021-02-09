<template>
    <div>
        <Header/>
        
            <div class="dash" >
                <div  v-for="clips in ListaClips" :key="clips.id">
                               
                        <video style="height:200px" ref="video" controls>
                            <source :src="'http://localhost/apiclips' + clips.clip" type="video/mp4">
                        </video>
                    
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
    }    

}
</script>

<style scoped>
.dash {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  grid-gap: 10px;
  
}


</style>