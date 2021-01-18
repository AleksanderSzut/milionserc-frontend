import { ApiFactory } from "@/api";
const OrderApi = ApiFactory.get("Order");

export default {
  namespaced: true,
  state: {
    error: [],
    modal: {
      active: false,
      label: null,
      button: {
        url: null,
        label: null
      }
    }
  },
  mutations: {},
  actions: {
    async order({ state }, payload) {
      await OrderApi.postOrder(payload)
        .then(response => {
          switch (response.data.status) {
            case "ORDER_SUCCESSFUL":
              state.modal = {
                active: true,
                label: "Dziękujemy za złożenie zamówienia",
                button: {
                  url: response.data.data.transactionLink,
                  label: "Przejdź do płatności"
                }
              };
          }
        })
        .catch(error => {
          if (error.response) {
            switch (error.response.data.status) {
              case "ORDER_VALIDATION_ERROR":
                state.error.push("Popraw pola formularza.");
            }
          } else {
            state.error.push("Błąd. Nie można złożyć zamówienia.");
          }
        });
    }
  },
  modules: {},
  getters: {
    getError(state) {
      return state.error;
    },
    getModal(state) {
      return state.modal;
    }
  }
};
