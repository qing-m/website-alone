/*
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
 */
import axios from 'axios'
import qs from 'qs'
import Config from '@/config'
import { Notify } from 'vant';
import { getToken } from '@/utils/auth'

const config = {
  baseURL: Config.baseURL,
  timeout: 5 * 1000,
  crossDomain: true
}
const _axios = axios.create(config)

_axios.interceptors.request.use(
  (config) => {
    if(getToken()) {
      config.headers['token'] = getToken()
    }
    if (config.method === 'get') {
      config.params = qs.parse(qs.stringify(config.params))
    }
    return config
  },
  (error) => {
    return error
  }
)

_axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if(error.response ==  null) {
      Notify({
        type: 'danger',
        message: '服务器链接超时'
      })
      throw error
    }
    const errMsg = error.response.data.msg
    if(errMsg instanceof Array) {
      Notify({
        type: 'danger',
        message: errMsg[0]
      })
    }else {
      Notify({
        type: 'danger',
        message: errMsg
      })
    }
    throw error
  }
)
export {
  _axios
}
