/*
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
 */
import {
  register,
  login
} from '@/services/api/admin'
import { getToken, setToken } from '@/utils/auth'

export const state = () => ({
  token: getToken(),
  userId: ''
})

export const getters = () => ({
  token: state.token,
  userId: state.userId
})

export const mutations = {
  setToken(state, value) {
    state.token = value
  },
  setUserId(state, value) {
    state.userId = value
  }
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
      commit('setToken', response.data.token)
      setToken(response.data.token)
      return response
    } catch (error) {
      if(error) throw new Error(error)
    }
  }
}