import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    coustomname: '',
  },
  actions: {
    start(context, obj) {
      context.commit('START', obj);
    },
  },
  mutations: {
    START(state, obj) {
      state.coustomname = obj;
    },
  },
  getters: {
    starttalk(state) {
      return state.coustomname;
    },
  },
});
