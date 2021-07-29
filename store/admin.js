import {
  register,
  login
} from '@/services/api/admin'

export const state = () => ({
  token: null
})

export const getters = () => ({
  token: state.token
})

export const mutations = {

}

export const actions = {
  async register({commit,dispatch},data) {
    try {
      const response = await register(data)
      return response
    } catch (error) {
      if(error) throw new Error(error)
    }
  },

  async login({commit,dispatch}, data) {
    try {
      const response = await login(data)
      console.log(response)
      return response
    } catch (error) {
      if(error) throw new Error(error)
    }
  }
}