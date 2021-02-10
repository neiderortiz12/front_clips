<template>
    <div>
        <Header/>
        <div class="container">
            <form ction="" v-on:submit.prevent="createNewClip();"  enctype="multipart/form-data">
                <div >
                    <label for="" >Nombre</label>
                    <div >
                        <input type="text" name="nombre" id="nombre" v-model="form.nombre">
                    </div>
                </div>
                <div >
                        <label for="" >clip</label>
                        <div >
                            <input type="file" @change="processFile($event)" >
                        </div>
                </div>
                <div >
                        <label for="" >descripcion</label>
                        <div >
                            <input type="text" name="descripcion" id="descripcion" v-model="form.descripcion">
                        </div>
                </div>
                <div >
                        <div >
                            <input type="submit" value="Crear">
                        </div>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
    
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
    name:"NewClip",
    data(){
        return{
            Clip:null,
            form:{
                nombre:"",
                descripcion:""
            },
            clip:""
            
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        processFile(event){
            this.clip = event.target.files[0];
            console.log(event);
        },
        createNewClip(){
            console.log("esta en la funcio");
            console.log(this.clip);
            const fr = new FormData()
            fr.append('clip', this.clip);
            fr.append('nombre', this.form.nombre);
            fr.append('descripcion', this.form.descripcion);
            console.log(fr);
            axios.post('http://localhost:8000/api/clips/create', fr).then(res=>{
                console.log(res);
            });
        }
    }/*,
    mounted:function(){
        let direccion = "http://localhost:8000/api/clips/create";
        axios.get(
            direccion,
            {
                headers:{
                    Authorization:'Bearer '+localStorage.getItem('token')
                }
            }
        ).then(data=>{
            console.log(data.data);
        });
    }*/
}
</script>

<style scoped>

</style>