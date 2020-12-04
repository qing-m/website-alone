import { _axios } from '@/services/request/axios.js'

export function getUserInfo (params) {
  return _axios({
    url: '/getUserInfo',
    methods: 'get',
    params
  })
}
