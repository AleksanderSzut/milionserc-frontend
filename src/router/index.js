import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import HowThisWork from "@/views/HowThisWork.vue";
import Book from "@/views/Book";
import JoinUs from "@/views/JoinUs";
import Confession from "@/views/Confession";
import ThanksForPayment from "@/views/ThanksForPayment";
import CreateConfession from "@/views/CreateConfession";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jak-to-dziala",
    name: "HowThisWork",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HowThisWork
  },
  {
    path: "/ksiega-miliona-serc",
    name: "book",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Book
  },
  {
    path: "/dolacz-do-nas",
    name: "JoinUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: JoinUs
  },
  {
    path: "/dziekujemy-za-platnosc",
    name: "ThankForPayment",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ThanksForPayment,
    meta: { onePage: true }
  },
  {
    path: "/stworz-wyznanie/:uuid:/:secretKey",
    name: "CreateConfession",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CreateConfession
  },
  {
    path: "/wyznanie/:uuid/:secretKey",
    name: "Confession",
    component: Confession,
    meta: { hideNavigation: true, backgroundColorBlack: true, onePage: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
router.beforeEach(() => {
  window.scrollTo(0, 0);
  // ...
});

export default router;
