import Vue from 'vue';
import Vuex from 'vuex';
import mutations  from './mutation.js';
import actions from './actions.js';

Vue.use(Vuex); // plugin 형태이기 때문에 Vue.use로 사용해야 한다. 


export const store = new Vuex.Store({
  state: {
      news: [],
      jobs: [],
      asks: [],
      user: {},
      item: {},
      list: [],
  },
  mutations,
  getters:{
    fetchedAsk(state){
      return state.asks;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  actions: actions
})