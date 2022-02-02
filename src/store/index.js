import { createStore } from 'vuex';

export default createStore({
  state: {
    pokemons: [],
    nextUrl: '',
    currentUrl: '',
    isLoading: false,
  },
  mutations: {
    SET_ITEM(state, { name, value }) {
      state[name] = value;
    },
    SET_POKEMON(state, payload) {
      state.pokemons.push(payload);
      if ((localStorage.pokemons === 'undefined' || !localStorage.pokemons || localStorage.pokemons === [])
        && state.pokemons.length === 20) {
        console.log(this.pokemons);
        localStorage.pokemons = JSON.stringify(state.pokemons);
      }
    },
  },
  actions: {
    UPDATE_ITEM({ commit }, { name, value }) {
      commit('SET_ITEM', { name, value });
    },
    ADD_POKEMON({ commit }, payload) {
      commit('SET_POKEMON', payload);
    },
  },
  getters: {
    pokemons: (state) => state.pokemons,
    nextUrl: (state) => state.nextUrl,
    currentUrl: (state) => state.currentUrl,
    isLoading: (state) => state.isLoading,
  },
});
