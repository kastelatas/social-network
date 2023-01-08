import { userSlice } from "./UserSlice"
import {$api} from "../../config/axios";
import { AppDispatch } from "../store";
import IUser from "../../models/IUser";

export const login = (data: Object) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching())
    const response = await $api.post<IUser>('/login', data)
    dispatch(userSlice.actions.usersFetchingSuccess(response.data))
  } catch (e) {
    dispatch(userSlice.actions.usersFetchingError(e.message))
  }
}