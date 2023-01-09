import {authSlice} from "./AuthSlice"
import {$api} from "../../../config/axios";
import {AppDispatch} from "../../store";
import IUser from "../../../models/IUser";
import logging from "../../../config/logging";

export interface IUserLogin {
  username: string,
  password: string,
}

export interface IUserSignUp {
  username: string,
  password: string,
  email: string,
  firstname: string,
  lastname: string
}

export const login = (data: IUserLogin) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.loginFetching())
    const response = await $api.post<IUser>('/login', data)
    dispatch(authSlice.actions.loginFetchingSuccess(response.data))
    return response.data
  } catch (e) {
    logging.error(`/login ${e.message}`)
    dispatch(authSlice.actions.loginFetchingError(e.message))
  }
}

export const signUp = (data: IUserSignUp) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.signUpFetching())
    const response = await $api.post<IUser>('/users', data)
    dispatch(authSlice.actions.signUpFetchingSuccess(response.data))
    return response.data
  } catch (e) {
    logging.error(`/signUp ${e.message}`)
    dispatch(authSlice.actions.signUpFetchingError(e.message))
  }
}

export const logout = () => (dispatch: AppDispatch) => {
  localStorage.removeItem('token')
  dispatch(authSlice.actions.clearUser())
}