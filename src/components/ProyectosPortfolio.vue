<template>
  <div class="proyectos">
    <div
      class="carta-proyecto"
      v-for="portfolio in portfolios"
      :key="portfolio"
      @click="
        portfolio?.despliegue
          ? goToUri(portfolio?.despliegue)
          : goToUri(portfolio?.repositorio)
      "
    >
      <img :src="portfolio.imagen" :alt="portfolio.nombre" />
      <div class="body">
        <h1>{{ portfolio?.nombre }}</h1>
        <h3>{{ portfolio?.descripcion }}</h3>
        <button><a :href="portfolio?.repositorio">Repositorio</a></button>
        <button v-if="portfolio?.despliegue">
          <a :href="portfolio?.despliegue">Despliegue</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  methods: {
    goToUri(uri) {
      window.open(uri, "_blank");
    },
  },

  data() {
    return {
      numero: 0,
    };
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
