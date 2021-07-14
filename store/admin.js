import {
  register,
  login
} from '@/services/api/admin'

export const state = () => ({

})

export const mutations = {

}

export const actions = {
  async register({commit,dispatch},data) {
    try {
      const response = await register(data)
      return response
    } catch (error) {
      if(error) throw error
    }
  },

  async login({commit,dispatch}, data) {
    try {
      const response = await login(data)
      return response
    } catch (error) {
      if(error) throw error
    }
  }
}