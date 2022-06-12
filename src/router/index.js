import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Proyectos from "../views/Proyectos/Proyectos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacto",
    name: "About",
    component: About,
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
