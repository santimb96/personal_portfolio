import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Proyectos from "../views/Proyectos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacto",
    name: "About",
    component: About
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
