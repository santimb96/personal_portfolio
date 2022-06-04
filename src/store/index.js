/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
  state: {
    portfolio: {
      trabajos: [
        {
          nombre: "TimeInn",
          descripcion: "Proyecto en entorno cliente",
          repositorio: "https://github.com/santimb96/timeInn_p2",
          imagen: "../../img/timeinn.png",
        },
        {
          nombre: "SpotiClone",
          descripcion: "Proyecto de empresa",
          repositorio: "https://github.com/santimb96/music-project-wozzo",
          despliegue: "https://music-project-wozzo-santimb96.vercel.app/",
          imagen: "../../img/spoticlone.png",
        },
        {
          nombre: "Whatsagram",
          descripcion:
            "Imitación de la app de WhatsApp sin interacción por parte de terceros y con determinadas funcionalidades",
          repositorio: "https://github.com/santimb96/whatsagram_p1",
          imagen: "../../img/whatsagram.png",
        },
        {
          nombre: "Barquitos",
          descripcion:
            "Primer juego web desarrollado",
          repositorio: "https://github.com/santimb96/barquitosJS",  
          despliegue: "https://santimb96.github.io/barquitosJS/",
          imagen: "../../img/barquitos.png",
        },
      ],
    },

    programador: {
      imagen: "../../img/santi.jpg",
      nombre: "Santi Martínez",
      puesto: "Desarrollador Web júnior",
      descripcion:
        "¡Bienvenido a mi portafolio! Me llamo Santi, ¡encantado! Soy desarrollador full-stack que vive en Baleares al que le encanta programar y aprender nuevas teconologías y metodologías de trabajo. ¡Espero que te guste mi perfil!",
      lenguajes: [
        "../../img/js.png",
        "../../img/node.png",
        "../../img/vue.png",
        "../../img/react.png",
        "../../img/laravel.png",
        "../../img/php.png",
        "../../img/java.png",
        "../../img/spring.png",
        "../../img/mongo.png",
        "../../img/sql.png",
        "../../img/postgres.png",
        "../../img/sass.png",
        "../../img/boot.png",
        "../../img/css.png",
        "../../img/html.png",
        "../../img/express.png"
      ],
    },
  },
  mutations: {},
  getters: {
    /**
     *
     * @param {} state
     * @returns
     */
    getPortfolio: (state) => {
      return state.portfolio.trabajos;
    },

    getProgramador: (state) => {
      return state.programador;
    },
  },
  actions: {},
  modules: {},
});
