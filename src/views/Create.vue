<template>
    <div>
        <Header />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
//import axios from "axios";

export default {
    name: "Create",
    data() {
        return {
        };
    },
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped>

</style>