import axios from 'axios'
import qs from 'qs'
import Config from '@/config'
import { Message } from 'element-ui';

const config = {
  baseURL: Config.baseURL,
  timeout: 5 * 1000,
  crossDomain: true
}
const _axios = axios.create(config)

_axios.interceptors.request.use(
  (config) => {
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
    const errMsg = error.response.data.msg
    if(errMsg instanceof Array) {
      Message({
        message: errMsg[0],
        type: 'error'
      })
    }else {
      Message({
        message: errMsg,
        type: 'error'
      })
    }
    return
  }
)
export {
  _axios
}
