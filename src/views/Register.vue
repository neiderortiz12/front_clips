<template>
    <div>
        <form class="form-clip" action="">
            <div>
                <label for="">Nombre</label>
                <div>
                    <input class="form-control" type="text" name="name" id="name" v-model="form.name">
                </div>
            </div>
            <div>
                <label for="">Email</label>
                <div>
                    <input class="form-control" type="email" name="email" id="email" v-model="form.email">
                </div>
            </div>
            <div>
                <label for="">Password</label>
                <div>
                    <input class="form-control" type="password" name="password" id="password" v-model="form.password">
                </div>
            </div>
            <div>
                <div>
                    <button class="card-form__button mt-4" type="button" v-on:click="registrarse()">Registrarse</button>
                </div>
            </div>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name:"Register",
    data(){
        return{
            form:{
                "name":"",
                "email":"",
                "password":""
            }
        }
    },
    methods:{
        registrarse(){
            let direccion ="http://localhost:8000/api/register";
            axios.post(direccion, this.form).then(data=>{
                console.log(data);
            })
        }
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