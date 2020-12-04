import axios from 'axios'
import qs from 'qs'
import Config from '@/config'

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
    const res = response.data
    return res
  },
  (error) => {
    return error
  }
)
export {
  _axios
}
