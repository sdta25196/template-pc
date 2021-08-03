import { ADD_DEMO } from './actionTypes'

export const addTodo = (num = 1) => {
  return {
    type: ADD_DEMO,
    num
  }
}