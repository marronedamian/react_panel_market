import { useCallback } from "react"
import { useDispatch } from 'react-redux'
import { history } from "@dact/core"
import ApiClient from "./ApiClient"

export const LOGIN_ERROR = "LOGIN_ERROR"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_LOADING = "LOGIN_LOADING"
export const SET_USER_DATA = "USER_SET_DATA"
export const CLEAR_LOGIN = "CLEAR_LOGIN"

const setUser = (user) => ({
  type: SET_USER_DATA,
  data: user,
})

const loginError = (error) => ({
  type: LOGIN_ERROR,
  data: error,
})
const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
})
const loginLoading = () => ({
  type: LOGIN_LOADING,
})
const clearLogin = () => ({
  type: CLEAR_LOGIN,
})

export function register(user) {
  return async (dispatch) => {
    dispatch(loginLoading())

    try {
      const api = new ApiClient()
      const response = await api.register(user)

      if (!response.valid) {
        return dispatch(loginError(response.message))
      }

      return login({ email: user.email, password: user.password})(dispatch)
    } catch (error) {
      return dispatch(loginError(error.message))
    }
  }
}

export function login(credentials) {
  return async (dispatch) => {
    try {
      dispatch(loginLoading())

      const api = new ApiClient()
      const response = await api.login(credentials)

      if (!response.valid) {
        return dispatch(loginError(response.message))
      }

      dispatch(setUser(response.data))

      history.push({
        pathname: "/",
      })

      return dispatch(loginSuccess())
    } catch (error) {
      return dispatch(loginError(error.message))
    }
  }
}

export function logout() {
  return (dispatch) => {
    dispatch(setUser({}))

    history.push({
      pathname: "/session/signin",
    })
  }
}

export function requestResetPassword(email) {
  return async (dispatch) => {
    try {
      dispatch(loginLoading())

      const api = new ApiClient()
      const response = await api.requestPasswordReset(email)

      if (!response.valid) {
        return dispatch(loginError(response.message));
      }

      history.push({
        pathname: "/session/password-reset-sent",
        state: { email },
      })

      dispatch(loginSuccess())
    } catch (error) {
      return dispatch(loginError(error.message))
    }
  }
}

export function resetPassword(password, token) {
  return async (dispatch) => {
    try {
      dispatch(loginLoading())

      const api = new ApiClient()
      const response = await api.resetPassword(password, token)

      if (!response.valid) {
        return dispatch(loginError(response.message));
      }

      history.push({
        pathname: "/session/reset-password-success",
      })

      dispatch(loginSuccess())
    } catch (error) {
      return dispatch(loginError(error.message))
    }
  }
}

export const useClearLogin = () => {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(clearLogin()), [dispatch])
}
