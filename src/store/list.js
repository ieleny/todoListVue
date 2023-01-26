
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const list =  new Vuex.Store({
    state () {
      return {
        tableData: [
          {
            id: 1,
            title: "Ir para academia",
            selected: false
          }
        ]
      }
    },
    mutations: {
      SET_ITENS(state, item) {
        state.tableData = item;
      },
      DELETE_ITEM(state, index) {
        state.tableData.splice(state.tableData.findIndex(item => item.id == index), 1);
      }
    },
    actions: {
      addTodoList({commit}, item) {
        commit('SET_ITENS', item);
      },
      removingItem({commit}, index){
        commit('DELETE_ITEM', index);
      }
    }
});

export default list;