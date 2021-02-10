<template>
    
    <div >
    <b-navbar toggleable="lg" bg-variant="dark" type="light" variant="primary">
        <b-navbar-brand href="#">
            <img src="@/assets/bamo1.png" class="d-inline-block align-top" alt="logo">
            Clips
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
            <b-nav-item href="#">Crear</b-nav-item>
            <b-nav-item href="#">Nosotros</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="primary"><b-icon icon="search" variant="dark"></b-icon></b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <b-icon icon="person-fill"></b-icon>
                <em> {{user}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#" v-on:click="logOut()"><b-icon icon="power" aria-hidden="true"></b-icon> Cerrar Sesion</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
    name:"Header",
    data(){
        return{
            user:localStorage.getItem('name')
        }
    },
    mounted:function(){
        
    },
    methods:{
        logOut(){
            let direccion = "http://localhost:8000/api/logout";
            axios.post(direccion,{"hola":"hola"},{headers:{Authorization:'Bearer '+localStorage.getItem('token')}}).then(data =>{
                console.log(data);
            });
            console.log("si ingresa al metodo de singotu");
        }
    }

}
</script>
