<template>
  <div class="proyectos">
    <div
        class="carta-proyecto"
        v-for="portfolio in portfolios"
        :key="portfolio"
    >
      <img :src="portfolio.imagen" :alt="portfolio.nombre"/>
      <h1>{{ portfolio.nombre }}</h1>
      <h3>{{ portfolio.descripcion }}</h3>
      <h4><a :href="portfolio.repositorio">Repositorio</a></h4>

    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  data () {
    return {
      numero: 0
    }
  },
  setup() {
    const store = useStore();

    const portfolios = store.getters.getPortfolio;

    return {
      portfolios,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/carta_portfolio.scss";
</style>

