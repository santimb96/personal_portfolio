<template>
  <div class="navbar">
    <div class="navbar-header">
      <h1>
        <router-link to="/"><p>SMARTÍNEZ</p></router-link>
      </h1>
      <button v-if="!displayBody" @click="onDisplay">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <button v-if="displayBody" @click="onDisplay">
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    </div>
    <div ref="body" class="navbar-body">
      <router-link to="/">Presentación</router-link>
      <router-link to="/proyectos">Proyectos</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </div>
    <router-view />
  </div>
  {{ getScreen }}
</template>

<script>
export default {
  data() {
    return {
      displayBody: false,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 850 && !this.displayBody) {
        this.$refs.body.style.display = "flex";
        this.displayBody = true;
      } else if (this.windowWidth < 850 && this.displayBody) {
        this.$refs.body.style.display = "none";
        this.displayBody = false;
      }
    };
  },
  // computed: {
  //   getScreen() {
  //     return console.warn(this.windowWidth);
  //   },
  // },
  methods: {
    onDisplay() {
      if (this.displayBody) {
        this.$refs.body.style.display = "none";
        this.displayBody = false;
      } else {
        this.$refs.body.style.display = "flex";
        this.displayBody = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
