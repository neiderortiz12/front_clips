<template>
    <div >
        <b-navbar toggleable="md"  bg-variant="dark" type="dark" variant="danger">
            <b-container>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-navbar-brand :to="{name:'Dashboard'}">
                    <img src="@/assets/bamo1.png" class="d-inline-block align-top" alt="logo">
                    Clips
                </b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item :to="{name:'Dashboard'}" exact>Inicio</b-nav-item>
                        <b-nav-item :to="{name:'About'}">Nosotros</b-nav-item>
                        <b-nav-item :to="{name:'NewClip'}">Crear</b-nav-item>
                    </b-navbar-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                        <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <b-icon icon="person-fill"></b-icon>
                            <em>{{user}}</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#" v-on:click="logOut()"><b-icon icon="power" aria-hidden="true"></b-icon> Cerrar Sesion</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
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
