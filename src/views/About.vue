<template>
  <div>
    <Header/>
      <b-container>
        <div class="mt-2">
          <h4>Desarroladores</h4>
          <b-row cols="2" class="row-cols-2" >
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
              <b-card-text>
                <h1>Neider Ortiz</h1>
                <br>
                <br>
                <h4>Ingeniero de Sistemas</h4>
              </b-card-text>
            </b-card>
            
            <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
              <b-card-text>
                <h1>Sergio Gómez</h1>
                <h4>Ingeniero de Sistemas</h4>
              </b-card-text>
            </b-card>
          </b-row>
        </div>
      </b-container>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
        Header,
        Footer,
    },
}
</script>