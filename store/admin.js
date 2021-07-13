import {
  register,
} from '@/services/api/admin'

export const state = () => ({
  list: [],
  todoIndex: 1
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
  setStateTodoIndex(state,value) {
    console.log(state)
    state.todoIndex = value
  }
}

export const actions = {
  async register({commit,dispatch},data) {
    try {
      const response = await register(data)
      return response
    } catch (error) {
      if(error) throw error
    }
  }
}