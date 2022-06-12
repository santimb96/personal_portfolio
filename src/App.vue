<template>
  <div class="contenedor-app-vue">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
@import "./styles/comun.scss";
</style>
