import { ApiFactory } from "@/api";
import router from "@/router";
const ConfessionApi = ApiFactory.get("Confession");

export default {
  namespaced: true,
  state: {
    confessions: [],
    currentOffset: 0,
    perPage: 24,
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
  mutations: {},
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
      console.log(state);
      await ConfessionApi.getConfession(uuid, token)
        .then(async response => {
          if (response.data[0].status === 0)
            state.confession = response.data[0];
          else
            await router.replace({
              name: "Confession",
              params: {
                uuid,
                secretKey: token
              }
            });
        })
        .catch(async () => {
          await router.replace({
            name: "Home"
          });
        });
    }
    // async createConfession({ uuid, token, title, content, images, videos }) {}
  },
  modules: {},
  getters: {
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
    getPreviousConfessionById: (state, getters) => id => {
      const index = getters.getIndexFromId(id);
      if (typeof state.confessions[index - 1] !== "undefined")
        return state.confessions[index - 1];
      return false;
    },

    getConfessionById: state => id => {
      const confession = state.confessions.find(element => element.id === id);
      if (typeof confession !== "undefined") return confession;
      else return false;
    }
  }
};
