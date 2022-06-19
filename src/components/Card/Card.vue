<template>
  <div class="custom-card">
    <div
      class="background-img"
      :style="{ backgroundImage: 'url(' + imagen + ')' }"
    ></div>
    <div class="mobile-advice">
      <p><i class="fa fa-plus" aria-hidden="true"></i> Pulsa la carta para ver más</p>
    </div>
    <div class="card-content">
      <div class="card-title">
        <h2>{{ nombre }}</h2>
      </div>
      <div class="card-text">
        <p>{{ descripcion }}</p>
      </div>
      <div class="card-buttons">
        <button @click="goToUri(repositorio)">Repositorio</button>
        <button v-if="despliegue" @click="goToUri(despliegue)">
          Despliegue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      required: true,
    },
  },
  data(){
    const {nombre, descripcion, imagen, repositorio, despliegue} = this.portfolio?.portfolio;
    return {
      nombre,
      descripcion,
      imagen,
      repositorio,
      despliegue,
    }
  },
  methods: {
    goToUri(uri) {
      window.open(uri, "_blank");
    },

  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
