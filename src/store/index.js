import { createStore } from "vuex";

export default createStore({
  state: {

    portfolio: {
      trabajos: [
          {
              nombre: "TimeInn",
              descripcion: "Proyecto en entorno cliente",
              repositorio: "https://github.com/santimb96/timeInn_p2",
              imagen: "../assets/timeinn.png"
          },
  
          {
              nombre: "ToyWars",
              descripcion: "Proyecto en cliente/servidor con JS, Java y SpringBoot",
              repositorio: "https://github.com/santimb96/toyWars",
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
