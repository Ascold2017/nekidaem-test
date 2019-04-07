/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proxies: [],
    filters: [
      { filterBy: 'alive', filterValue: '' },
      { filterBy: 'proxy_type', filterValue: '' },
      { filterBy: 'country', filterValue: '' }
    ]
  },
  getters: {
    proxies: ({ proxies }) => proxies,
    filters: ({ filters }) => filters
  },
  mutations: {
    SET_PROXIES: (state, data) => {
      state.proxies = data
    },
    SET_TO_ZERO_PROXIES: (state) => {
      state.proxies = []
    },
    SET_FILTER: (state, { filterBy, filterValue }) => {
      state.filters = state.filters.map(f => {
        if (f.filterBy === filterBy) {
          f.filterValue = filterValue
        }
        return f
      })
    }
  },
  actions: {
    getProxies: ({ commit, state }) => new Promise((resolve, reject) => {
      const query = new URLSearchParams()
      state.filters
      .forEach(f => {
        f.filterValue && query.append(f.filterBy, f.filterValue)
      })
      
      const url = new URL('http://localhost:3000/api/proxies')
      url.search = query.toString()

      fetch(url)
        .then(response => response.json())
        .then(data => {
          commit('SET_PROXIES', data)
          resolve(data)
        })
        .catch(error => reject(error))
    })
  }
})
