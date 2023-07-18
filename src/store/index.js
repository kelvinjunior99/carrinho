import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos: [],
    carrinha: []
  },

  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }, 

    storeCarrinha(state, payload) {
      state.carrinha = payload
    },

    entradaCarrinha(state, payload) {
      state.carrinha.push(payload)
    },

    deleteCarrinha(state, id) {
      const index = state.carrinha.findIndex(carrinha => carrinha.id === id) 

      if(index >= 0) {
        state.carrinha.splice(index, 1)
      }
    }
  },
  actions: {

    getTodos({ commit }) {

      return new Promise((resolve) => {
        return setTimeout(() => {

          return axios.get('http://localhost:3000/todos/?_page').then((response) => {
            commit('storeTodos', response.data)
            resolve()
          })
        }, 1000)
      })

    },

    getCarrinha({commit}) {
      axios.get('http://localhost:3000/carrinha').then((response) => {
        commit('storeCarrinha', response.data)
      })
    },

    addCarrinha({commit}, data) {
      axios.post('http://localhost:3000/carrinha', data).then((response) => {
         commit('entradaCarrinha', response.data)
      })
    },

    deleteCarrinha({commit}, id) {
      axios.delete(`http://localhost:3000/carrinha/${id}`).then(() => {
         commit('deleteCarrinha', id)
      })
    },



  },
  getters: {
    total(state) {
      return state.carrinha.reduce((total, item) => total += item.preco, 0)
    }
  },

  modules: {
  }
})
