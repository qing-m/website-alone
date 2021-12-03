/*
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
 */
import { _axios } from '@/services/request/axios.js'

export function getUserInfo (params) {
  return _axios({
    url: '/core/getUserInfo',
    methods: 'get',
    params
  })
}
