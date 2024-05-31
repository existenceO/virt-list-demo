import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentFocusSectionId: null,
  },
  mutations: {
    setCurrentFocusSectionId(state, currentFocusSectionId) {
      console.log('state: currentFocusSectionId: ', currentFocusSectionId)
      state.currentFocusSectionId = currentFocusSectionId;
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;
