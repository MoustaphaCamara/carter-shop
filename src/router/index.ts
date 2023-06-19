import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  { path: "/", component: HomePage, props: true },
  //   { path: "/product/:id", component: Product, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
