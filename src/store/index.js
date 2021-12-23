import { createStore } from "vuex";

export default createStore({
  state: {

    portfolio: {
      trabajos: [
          {
              nombre: "TimeInn",
              descripcion: "Proyecto en entorno cliente",
              repositorio: "https://github.com/santimb96/timeInn_p2",
              imagen: "../../img/timeinn.png"
          },
  
          {
              nombre: "Whatsagram",
              descripcion: "Imitación de la app de WhatsApp sin interacción por parte de terceros y con determinadas funcionalidades",
              repositorio: "https://github.com/santimb96/whatsagram_p1",
              imagen: "../../img/whatsagram.png"
          }
      ]
  },

    programador: {
      imagen: "../../img/santi.jpg",
      nombre: "Santi Martínez",
      puesto: "Desarrollador Web júnior",
      descripcion: "Actualmente estoy estudiando 2º de Desarrollo Web en el CIFP Francesc de Borja Moll (Palma). Me encanta programar, aprender y, sobre todo, los desafíos. En mis ratos libres me encanta hacer deporte, ir a las recreativas o pasar tiempo con mis amigos; también adoro el mundo retro y 'gaming', aunque esto último suene típico!",
      lenguajes: ["../../img/js.png", "../../img/node.png", "../../img/vue.png",
      "../../img/react.png", "../../img/laravel.png", "../../img/php.png",
      "../../img/java.png", "../../img/spring.png", "../../img/mongo.png",
      "../../img/sql.png", "../../img/postgres.png", "../../img/sass.png",
      "../../img/boot.png", "../../img/css.png", "../../img/html.png"]
    }
  
  },
  mutations: {},
  getters: {
    /**
     * 
     * @param {} state  
     * @returns 
     */
    getPortfolio: state => {
      return state.portfolio.trabajos;
    },

    getProgramador: state => {
      return state.programador;
    }
  },
  actions: {},
  modules: {},
});
