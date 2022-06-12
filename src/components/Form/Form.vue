<template>
  <div class="contact-form">
    <div class="form-body">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Tu nombre..."
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Tu correo electrónico..."
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Asunto</label>
        <input
          v-model="asunto"
          type="asunto"
          class="form-control"
          id="asunto"
          placeholder="Asunto por el que quieres contactarme..."
          required
        />
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje</label>
        <textarea
          v-model="mensaje"
          class="form-control"
          id="mensaje"
          rows="7"
          placeholder="Mensaje que me quieres enviar..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn-submit" @click="enviar()">Enviar</button>
    </div>
  </div>
</template>
<script>
import sendEmail from "../../services/services.js";
export default {
  data() {
    return {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    };
  },
  methods: {
    enviar() {
      sendEmail(this.nombre, this.email, this.asunto, this.mensaje);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./form.scss";
</style>
