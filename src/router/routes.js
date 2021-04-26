const Home = () => import(/* webpackChunkName: "Home"*/ "@/views/Home.vue");
const HowThisWork = import(
  /* webpackChunkName: "HowThisWork"*/ "@/views/HowThisWork.vue"
);
const Book = () => import(/* webpackChunkName: "Book"*/ "@/views/Book");
const JoinUs = () => import(/* webpackChunkName: "JoinUs"*/ "@/views/JoinUs");
const Confession = () =>
  import(/* webpackChunkName: "Confession"*/ "@/views/Confession");
const ThanksForPayment = () =>
  import(/* webpackChunkName: "ThanksForPayment"*/ "@/views/ThanksForPayment");
const CreateConfession = () =>
  import(/* webpackChunkName: "CreateConfession"*/ "@/views/CreateConfession");

export default [
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
