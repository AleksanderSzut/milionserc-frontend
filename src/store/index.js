import { createStore } from "vuex";
import Confessions from "./modules/confessions";
import Order from "./modules/order";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Confessions,
    Order
  }
});
