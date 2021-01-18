import { ApiFactory } from "@/api";
import router from "@/router";

const ConfessionApi = ApiFactory.get("Confession");

export default {
  namespaced: true,
  state: {
    loading: false,
    confessions: [],
    currentOffset: 0,
    perPage: 24,
    errors: [],
    modal: {
      active: false,
      label: null,
      button: {
        link: "/",
        label: null
      }
    },
    confession: {
      id: null,
      uuid: null,
      status: null,
      title: null,
      content: null,
      package_id: null,
      public: null,
      access_code: null
    }
  },
  mutations: {
    resetConfessions(state) {
      state.confessions = [];
    }
  },
  actions: {
    async loadConfessions({ state }) {
      let {
        data: { data }
      } = await ConfessionApi.getConfessions(
        state.perPage,
        state.currentOffset
      );
      state.confessions = state.confessions.concat(data.confessions);
    },

    async loadMoreConfessions({ state, commit }) {
      state.currentOffset++;
      commit("loadConfessions");
    },

    async confessionsSearch({ perPage, query }) {
      let {
        data: { data }
      } = await ConfessionApi.getConfessions(perPage, 0, query);
      return data.confessions;
    },
    async getConfession({ state }, { uuid, token }) {
      await ConfessionApi.getConfession(uuid, token)
        .then(async response => {
          state.confession = response.data[0];
        })
        .catch(async () => {
          await router.replace({
            name: "Home"
          });
        });
    },
    async setPublic({ state }, isPublic) {
      await ConfessionApi.postPublic(
        state.confession.uuid,
        state.confession.accessCode,
        isPublic
      );
    },

    async createConfession(
      { state },
      { uuid, token, title, content, images, videos }
    ) {
      state.loading = true;

      if (images === undefined) {
        state.errors.push("Wyznanie musi mieć co najmniej jedno zdjęcie");
        return false;
      }

      let form_data = new FormData();
      form_data.append("title", title);
      form_data.append("content", content);
      images.forEach((value, index) => {
        form_data.append(`images[${index}]`, value);
      });
      videos.forEach((value, index) => {
        form_data.append(`videos[${index}]`, value);
      });

      await ConfessionApi.createConfession(uuid, token, form_data)
        .then(response => {
          switch (response.data.status) {
            case "CONFESSIONS_CREATED":
              state.modal = {
                active: true,
                label: "Na twojego maila wysłaliśmy link do wyznania.",
                button: {
                  link: "/wyznanie/" + uuid + "/" + token,
                  label: "Przejdź do wyznania"
                }
              };
          }
        })
        .catch(error => {
          if (error.response) {
            switch (error.response.data.status) {
              case "ORDER_VALIDATION_ERROR":
                state.errors.push("Popraw pola formularza.");
            }
          } else {
            state.errors.push("Błąd. Nie można złożyć zamówienia.");
          }
        });
      state.loading = false;
    }
  },
  modules: {},
  getters: {
    getError(state) {
      return state.errors;
    },
    getConfessions(state) {
      return state.confessions;
    },
    getIndexFromId: state => id => {
      return state.confessions.findIndex(element => element.id === id);
    },
    getNextConfessionById: (state, getters) => id => {
      const index = getters.getIndexFromId(id);
      if (typeof state.confessions[index + 1] !== "undefined")
        return state.confessions[index + 1];
      return false;
    },
    getModal(state) {
      return state.modal;
    },
    getPreviousConfessionById: (state, getters) => id => {
      const index = getters.getIndexFromId(id);
      if (typeof state.confessions[index - 1] !== "undefined")
        return state.confessions[index - 1];
      return false;
    },
    isLoading: state => {
      return state.loading;
    },
    getLoadedConfession: state => {
      return state.confession;
    },
    getConfessionById: state => id => {
      const confession = state.confessions.find(element => element.id === id);
      if (typeof confession !== "undefined") return confession;
      else return false;
    }
  }
};
