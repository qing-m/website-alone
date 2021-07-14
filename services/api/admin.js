import { _axios } from '@/services/request/axios.js'

export const register = async function (data) {
  try {
    const response = await _axios({ url: '/admin/register', method: 'post', data })
    return response
  } catch (error) {
    if (error) { throw error }
  }
}

export const login = async function (data) {
  try {
    const response = await _axios({ url: '/admin/login', method: 'post', data })
    return response
  } catch (error) {
    if (error) { throw error }
  }
}
