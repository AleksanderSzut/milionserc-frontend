import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import HowThisWork from "@/views/HowThisWork.vue";
import Book from "@/views/Book";
import JoinUs from "@/views/JoinUs";

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
