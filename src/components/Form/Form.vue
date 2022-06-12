<template>
  <div class="contact-form">
    <div class="form-body">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
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
          class="form-control"
          id="mensaje"
          rows="7"
          placeholder="Mensaje que me quieres enviar..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn-submit">Enviar</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./form.scss";
</style>
