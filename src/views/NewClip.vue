<template>
    <div>

        <h1>Creación de un nuevo clip</h1>
        <h2 class="mt-4">Para añadir un nuevo clip, registra los siguientes datos</h2>
        <div class="container">
            <form action="" v-on:submit.prevent="createNewClip();" class="form-clip" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="" class="label">Nombre</label>
                    <div >
                        <input class="form-control"  placeholder="Nombre" type="text" name="nombre" id="nombre" v-model="form.nombre">
                    </div>
                </div>
                <div class="form-group">
                        <label for="" >Clip</label>
                        <div >
                            <input class="form-control" type="file" @change="processFile($event)" >
                        </div>
                </div>
                <div class="form-group">
                        <label for="" >Descripcion</label>
                        <div >
                            <input class="form-control"  placeholder="Descripcion" type="text" name="descripcion" id="descripcion" v-model="form.descripcion">
                        </div>
                </div>
                <div >
                        <div >
                            <button class="card-form__button"  type="submit" >Crear</button>
                        </div>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>

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
        //Header,
        //Footer
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
    },
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
    }
}
</script>

<style scoped>


.card-form__button{
    max-width: 600px;
    margin: auto;
    width: 100%;
    height: 55px;
    background: #2364d2;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
}

.form-clip{
    text-align: left;
    font-size: 16px;
    width: 500px;
    padding: 15px 30px;
    border-radius: 4px;
    margin: 50px auto;
    width: 500px;
    background-color: #fff;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.label {
    color: #000000;
    margin-bottom: 10px;
}


</style>