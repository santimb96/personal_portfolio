<template>
  <SnackbarInfo v-if="success"></SnackbarInfo>
  <SnackbarError v-else-if="error"></SnackbarError>
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
          type="text"
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
import SnackbarInfo from "../SnackbarInfo/SnackbarInfo.vue";
import SnackbarError from "../SnackbarError/SnackbarError.vue";

export default {
  components: {
    SnackbarInfo,
    SnackbarError,
  },
  data() {
    return {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      emailPattern: new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
      success: false,
      error: false,
    };
  },

  methods: {
    enviar() {
      if (this.validar()) {
        sendEmail(this.nombre, this.email, this.asunto, this.mensaje)
          .then(() => {
            this.openSnackBar("success");
            this.limpiar();
          })
          .catch(() => this.openSnackBar("error"));
      } else {
        this.openSnackBar("error");
      }
    },
    validar() {
      if (
        !this.nombre ||
        !this.email ||
        !this.asunto ||
        !this.mensaje ||
        !this.emailPattern.test(this.email)
      ) {
        return false;
      } else {
        return true;
      }
    },
    openSnackBar(value = null) {
      if (value === "success") {
        this.success = true;
        timeOut;
      } else if (value === "error") {
        this.error = true;
        timeOut;
      } else {
        this.success = false;
        this.error = false;
      }
      const timeOut = setTimeout(() => {
        this.success = false;
        this.error = false;
        clearTimeout(timeOut);
      }, 5000);
    },
    limpiar() {
      this.nombre = "";
      this.email = "";
      this.asunto = "";
      this.mensaje = "";
    },
  },
};
</script>

<style scoped lang="scss">
@import "./form.scss";
</style>
