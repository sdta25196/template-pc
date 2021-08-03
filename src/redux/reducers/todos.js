import { ADD_DEMO } from '../actions/actionTypes'
const todos = (state = 0, action) => {
  switch (action.type) {
    case ADD_DEMO:
      return state + action.num
    default:
      return state
  }
}

export default todos