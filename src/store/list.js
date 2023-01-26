
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const list =  new Vuex.Store({
    state () {
      return {
        tableData: []
      }
    },
    mutations: {
      SET_ITENS(state, item) {
        state.tableData = item;
      }
    },
    actions: {
       addTodoList({commit}, item) {
          commit('SET_ITENS', item);
       } 
    }
});

export default list;