
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
      SET_ITENS(state) {
        this.tableData = state.tableData;
      }
    },
    actions: {
       addTodoList({commit}, list) {
          commit('SET_ITENS', list);
       } 
    }
});

export default list;