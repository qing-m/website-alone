/*
 * @Author: 王鹤垚
 * @LastEditors: 王鹤垚
 */
export default function ({ route, store, redirect }) {
  const token = store.state.admin.token
  if(!token) {
    return redirect('/login')
  }
}