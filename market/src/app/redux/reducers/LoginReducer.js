import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  CLEAR_LOGIN,
} from "../actions/LoginActions"

const initialState = {
  success: false,
  loading: false,
  error: null,
}

const LoginReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false,
        error: null,
      }
    }
    case LOGIN_ERROR: {
      return {
        success: false,
        loading: false,
        error: action.data,
      }
    }
    case CLEAR_LOGIN: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default LoginReducer
