import { _axios } from '@/services/request/axios.js'

export const register = async function (data) {
  try {
    const response = await _axios({ url: '/admin/register', method: 'post', data })
    return response
  } catch (error) {
    console.log(error)
    if (error) { throw error }
  }
}
