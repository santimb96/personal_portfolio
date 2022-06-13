<template>
  <section class="contenedor-presentacion">
    <div class="presentacion-personal">
      <img :src="programador.imagen" :alt="programador.nombre" />
      <h1>{{ programador.nombre }}</h1>
      <h4>{{ programador.puesto }}</h4>
      <h5>{{ programador.descripcion }}</h5>
    </div>

    <div class="lenguajes">
      <h1>Tecnologías</h1>
      <div v-html="data" class="imagenes"></div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const programador = store.getters.getProgramador;
    let lenguajes = "";

    programador.lenguajes.forEach((lenguaje) => {
      lenguajes += `<img src="${lenguaje}" alt="lenguaje">`;
    });

    return {
      programador,
      data: lenguajes,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./home.scss";
</style>
