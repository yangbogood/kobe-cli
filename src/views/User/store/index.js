import Vue from "vue";
import Vuex from "vuex";
import { getUserList } from "../../../api/user";
Vue.use(Vuex);

const types = {
  USER_LIST: "USER_LIST"
};
export default {
  state: {
    [types.USER_LIST]: []
  },
  mutations: {
    [types.USER_LIST]: (state, res) => {
      state[types.USER_LIST] = res;
    }
  },
  actions: {
    [types.USER_LIST]: async ({ commit }) => {
      const list = await getUserList();
      commit(types.USER_LIST, list);
      return await getUserList();
    }
  },
  getters: {
    getNewsResponse(state) {
      return state[types.USER_LIST];
    }
  }
};
