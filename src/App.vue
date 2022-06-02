<template>
  <div class="contenedor-app-vue">
    <div id="nav">
      <router-link to="/">Presentación</router-link>
      <router-link to="/proyectos">Proyectos</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
    <router-view />
    <footer>Santi Martínez, 2021</footer>
  </div>
</template>

<style lang="scss">
@import "./styles/comun.scss";
@import "./styles/footer.scss";
</style>
