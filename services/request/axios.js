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
    debugger
    return response.data
  },
  (error) => {
    // if(error.response.status == 400) {
    //   console.log(error.response.data)
    // }
    if (error) { throw error.response.data }
  }
)
export {
  _axios
}
