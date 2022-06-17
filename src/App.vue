<template>
  <div class="contenedor-app-vue">
    <Navbar></Navbar>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer/Footer.vue";
import Navbar from "./components/Navbar/Navbar.vue";

export default {
  components: {
    Footer,
    Navbar
  },
};
</script>

<style lang="scss">
@import "./styles/comun.scss";
</style>
