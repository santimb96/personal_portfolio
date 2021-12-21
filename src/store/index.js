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
    }
  },
  actions: {},
  modules: {},
});
