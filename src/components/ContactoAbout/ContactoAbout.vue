<template>
  <div class="contenedor-padre">
    <h1>¡Contáctame!</h1>
    <Form></Form>
    <div class="links">
      <a href="https://github.com/santimb96"><i class="fab fa-github"></i></a>
      <a href="mailto:santiagomartinezbota@gmail.com"
        ><i class="fas fa-envelope"></i
      ></a>
      <a href="https://www.linkedin.com/in/santi-martinez-bota/"
        ><i class="fab fa-linkedin"></i
      ></a>
    </div>
  </div>
</template>
<script>
import Form from "../Form/Form.vue";

export default {
  components: {
    Form,
  },
};
</script>

<style scoped lang="scss">
@import "./contacto.scss";
</style>
