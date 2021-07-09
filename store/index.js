export const state = () => ({
  index: 0
})

export const getters = {
  index: ()=> state.index
}

export const mutations = {
  setStateIndex(state,value) {
    state.index = value
  }
}