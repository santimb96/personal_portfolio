<template>
  <div class="proyectos">
    <Card v-for="portfolio in portfolios" :key="portfolio" :portfolio="{portfolio}"  />
  </div>
</template>

<script>
import { useStore } from "vuex";
import Card from "../Card/Card.vue";

export default {
  components: {
    Card,
  },
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
@import "./carta_portfolio.scss";
</style>
