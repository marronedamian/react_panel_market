import { SET_USER_DATA } from "../actions/LoginActions"

const initialState = {}

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA: {
      return action.data
    }
    default: {
      return state
    }
  }
}

export default userReducer
