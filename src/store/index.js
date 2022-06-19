/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
  state: {
    portfolio: {
      trabajos: [
        {
          nombre: "Palmimax",
          descripcion: "Segundo proyecto de entorno cliente (DWEC), basado en aplicaciones web de gestión de carteleras de cine como la de aficine.com. En él se trabaja con HTML5, CSS y JavaScript. Además, se hacen uso de utilidades como Local Storage, cookies, Font Awesome, etc.",
          repositorio: "https://github.com/santimb96/timeInn_p2",
          despliegue: "https://xenodochial-mclean-4eb28c.netlify.app/",
          imagen: "../../img/timeinn.png",
        },
        {
          nombre: "SpotiClone",
          descripcion: "Proyecto propuesto por la empresa Wozzo (Palma de Mallorca), el cual consiste en hacer una aplicación web en MERN (MongoDB, Express, React, Node) para la gestión de una red social de música.",
          repositorio: "https://github.com/santimb96/music-project-wozzo",
          despliegue: "https://music-project-wozzo-santimb96.vercel.app/",
          imagen: "../../img/spoticlone.png",
        },
        {
          nombre: "PokeDuel",
          descripcion: "Proyecto de final de ciclo (hecho en 3 semanas), que se basa en un juego simple de combates entre pokémons. Los datos de estos se han obtenido mediante scrapping haciendo uso de Node.js. El proyecto está desarrollado en Angular, Node, Express y MongoDB.",
          repositorio: "https://github.com/santimb96/pokeDuel-client",
          despliegue: "https://pokeduel.es",
          imagen: "../../img/pokeduel.png",
        },
        {
          nombre: "Whatsagram",
          descripcion:
            "Primer proyecto de entorno cliente (DWEC). Imitación de la app de WhatsApp sin interacción con usuarios y/o servidor. únicamente para trabajar con CSS, HTML5 y JavaScript.",
          repositorio: "https://github.com/santimb96/whatsagram_p1",
          despliegue: "https://modest-heyrovsky-668da4.netlify.app/",
          imagen: "../../img/whatsagram.png",
        },
        {
          nombre: "Barquitos",
          descripcion:
            "Primer juego web desarrollado en tiempo libre. El juego consiste en una serie de barquitos que has de ir hundiendo introduciendo unas coordenadas. Está confeccionado con HTML5, CSS Y JavaScript.",
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
